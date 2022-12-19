import { Avatar, Grid, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { UploadScenarios } from "../../enum/file-uploader";
import useFileUpload from "../../hooks/use-file-upload";
import EditIcon from "@mui/icons-material/Edit";
import { LoadingButton } from "@mui/lab";

interface FileUploaderProps {
  handleFile: (res: any) => void;
  currentImageUrl: string;
  scenario: UploadScenarios;
  alt: string;
  sx: any;
}

export const AvatarUploader = ({
  handleFile,
  currentImageUrl,
  scenario,
  sx,
  alt,
}: FileUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(currentImageUrl);
  const hiddenFileInput: any = useRef(null);
  const { progress, handleContentDataUpload } = useFileUpload();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event: any) => {
    setUploading(true);
    const res = await handleContentDataUpload(event, currentImageUrl, scenario);
    setTimeout(() => {
      setImageUrl(res!.url);
      handleFile(res);
      setUploading(false);
    }, 3000);
  };

  useEffect(() => {
    setImageUrl(currentImageUrl);
  }, [currentImageUrl]);

  return (
    <Grid item xs="auto" className="grid-item">
      <input
        ref={hiddenFileInput}
        accept="image/*"
        type="file"
        style={{
          display: "none",
        }}
        onChange={handleChange}
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        className="avatar-uploader-wrapper"
        onClick={handleClick}
      >
        <Avatar alt={alt} src={imageUrl} sx={sx} />
        <div className="profileImageUploaderOverlay">
          {uploading && (
            <LoadingButton sx={{ mx: "auto", mt: "13px" }} loading />
          )}
          {!uploading && <EditIcon sx={{ color: "white", fontSize: "20px" }} />}
        </div>
      </IconButton>
    </Grid>
  );
};
