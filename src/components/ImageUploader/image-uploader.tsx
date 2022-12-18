import { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, LinearProgress } from "@mui/material";
import { DashboardMainButton } from "../Buttons/DashboardMainButton";
import "./style.css";

export const ImageUploader = (props: {
  setImage: Dispatch<SetStateAction<string | null | undefined>>;
  path: string;
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();

    const data = new FormData();
    data.append("file", selectedFile!);
    // @todo fix here

    setIsLoading(false);
  };

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="file"
          style={{ width: "100%" }}
          onChange={handleFileSelect}
          className="formbold-browse"
        />

        <br />

        {isLoading && <LinearProgress sx={{ mt: 2 }} />}

        <DashboardMainButton
          type="submit"
          sx={{ mt: 10 }}
          loading={isLoading}
          style={{ height: 35, fontSize: 15 }}
        >
          Upload File
        </DashboardMainButton>
      </form>
    </>
  );
};
