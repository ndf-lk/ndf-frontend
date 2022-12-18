import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LinearProgress } from "@mui/material";
import { DashboardMainButton } from "../Buttons/DashboardMainButton";
import "./style.css";
import useFileUpload from "../../hooks/use-file-upload";
import { UploadScenarios } from "../../enum/file-uploader";

export const ImageUploader = ({
  setImage,
  uploadType
}: {
  setImage: Dispatch<SetStateAction<string | null | undefined>>;
  uploadType: UploadScenarios;
}) => {
  const [uploading, setUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const hiddenFileInput: any = useRef(null);
  const { handleContentDataUpload } = useFileUpload();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event: any) => {
    setUploading(true);
    const res = await handleContentDataUpload(
      event,
      imageUrl,
      uploadType
    );
    setTimeout(() => {
      setImageUrl(res!.url);
      setImage(res!.url);
      setUploading(false);
      setIsSuccess(true);
    }, 3000);
  };

  useEffect(() => {
    setImageUrl(imageUrl);
  }, [imageUrl]);

  return (
    <>
      <input
        ref={hiddenFileInput}
        accept="image/*"
        type="file"
        style={{
          display: "none",
        }}
        onChange={handleChange}
      />

      <DashboardMainButton loading={uploading} onClick={handleClick}>
        Upload Banner
      </DashboardMainButton>

      <div style={{ marginTop: 10 }}>
        {!uploading && (
          <> {isSuccess ? "Upload successfully" : "select a image"} </>
        )}
      </div>
    </>
  );
};
