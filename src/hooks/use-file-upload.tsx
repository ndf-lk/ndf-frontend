import axios from "axios";
import { useState } from "react";
import { FileExtensions, UploadScenarios } from "../enum/file-uploader";
import { getAuthToken } from "../helpers/token";
import { IRestApiResponse } from "../interfaces/api-response";
import { IUploadConfig } from "../interfaces/file-uploader";
import AppConfig from "../config";
import { isArray } from "lodash";

const images = [FileExtensions.jpg, FileExtensions.jpeg, FileExtensions.png];
const documents = [FileExtensions.pdf];
const mbSize = 1000000;

export const uploadConfig = new Map<number, IUploadConfig>([
  [
    UploadScenarios.userProfile,
    {
      path: "/users/upload",
      allowedExtensions: [...images, ...documents],
      sizeLimit: 3072 * mbSize,
    },
  ],
]);

const useFileUpload = () => {
  const [progress, setProgress] = useState(-1);

  const onUploadProgress = (event: any) => {
    setProgress(Math.round((100 * event.loaded) / event.total));
  };

  const handleContentDataUpload = async (
    e: any,
    url: string,
    scenario: UploadScenarios,
    file?: File
  ) => {
    try {
      setProgress(0);
      const fileUploaded = file || e.target.files[0] || e.dataTransfer.files[0];
      const config = uploadConfig.get(scenario);

      if (!config) {
        setProgress(-1);
        return {
          name: "",
          url,
          extension: "",
          category: "",
          statusCode: 400,
          message: "Invalid configuration",
        };
      }

      if (fileUploaded) {
        const extension = fileUploaded.name.split(".").pop().toLowerCase();
        if (!config.allowedExtensions.includes(`.${extension}`)) {
          setProgress(-1);
          return {
            name: "",
            url,
            extension: "",
            category: "",
            statusCode: 400,
            message: "Invalid extension",
          };
        }
      }

      if (config.sizeLimit < fileUploaded.size) {
        setProgress(-1);
        return {
          name: "",
          url,
          extension: "",
          category: "",
          statusCode: 400,
          message: "File is larger than the recommended size",
        };
      }

      try {
        const fileData = {
          fileName: fileUploaded.name,
          fileSize: fileUploaded.size,
        };

        const res: IRestApiResponse = await axios.post(
          `${AppConfig.BACKEND_API}pre-signed-url/create-url`,
          fileData,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Content-Type": "application/json",
              redirect: "follow",
              referrer: "no-referrer",
              Authorization: `Bearer ${getAuthToken() || ""}`,
            },
          }
        );

        if (res.status === 201 && res.data && res.data.data) {
          const {
            uniqueFileName,
            presignedPost,
            contentType,
            acl,
            publicUrl,
            fileExtension,
            fileCategory,
          } = res.data.data;
          const formData = {
            ...presignedPost.fields,
            "Content-Type": contentType,
            acl,
            file: fileUploaded,
          };

          const res2: any = await axios.post(presignedPost.url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
          });
          if (res2.status === 204) {
            setProgress(-1);
            return {
              name: uniqueFileName,
              url: publicUrl,
              extension: fileExtension,
              category: fileCategory,
              statusCode: res.data.statusCode,
              message: isArray(res.data.message)
                ? res.data.message[0]
                : "success",
            };
          }
          setProgress(-1);
          return {
            name: "",
            url,
            extension: "",
            category: "",
            statusCode: 400,
            message: "Upload failed",
          };
        }
      } catch (error) {
        setProgress(-1);
        return {
          name: "",
          url,
          extension: "",
          category: "",
          statusCode: 400,
          message: (error as Error).message,
        };
      }
    } catch (error) {
      setProgress(-1);
      return {
        name: "",
        url,
        extension: "",
        category: "",
        statusCode: 400,
        message: (error as Error).message,
      };
    }
  };

  return {
    handleContentDataUpload,
    progress,
  };
};

export default useFileUpload;
