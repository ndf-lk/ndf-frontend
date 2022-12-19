import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import useNewsDetails from "../../hooks/news/useNewsDetails";
import { NewsEditor } from "./components/edit-news";

export const EditNewsPage = () => {
  const { id } = useParams();
  const newsDetails = useNewsDetails(id!);
  return (
    <>
      {newsDetails.isLoading && <CircularProgress />}

      {newsDetails.isSuccess && newsDetails.data && (
        <NewsEditor
          newsBody={newsDetails.data.data?.body}
          titleOfNews={newsDetails.data.data?.title}
          newsBannerImage={newsDetails.data.data?.bannerImage}
          isUpdate={true}
          id={newsDetails.data.data?._id}
        />
      )}
    </>
  );
};
