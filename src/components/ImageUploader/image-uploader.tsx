import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LinearProgress } from "@mui/material";
import "./style.css";
import useFileUpload from "../../hooks/use-file-upload";
import { UploadScenarios } from "../../enum/file-uploader";

export const ImageUploader = ({
  setImage,
}: {
  setImage: Dispatch<SetStateAction<string | null | undefined>>;
  uploadType: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const hiddenFileInput: any = useRef(null);
  const { handleContentDataUpload } = useFileUpload();

  const handleChange = async (event: any) => {
    setUploading(true);
    const res = await handleContentDataUpload(
      event,
      imageUrl,
      UploadScenarios.userProfile
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
      <br />

      <input
        ref={hiddenFileInput}
        accept="image/*"
        type="file"
        onChange={handleChange}
      />

      <br />

      <div className="overlay">
        {uploading && <LinearProgress sx={{ mt: 2 }} />}
        {!uploading && (
          <> {isSuccess ? "Upload successfully" : "select a image"} </>
        )}
      </div>
    </>
  );
};
