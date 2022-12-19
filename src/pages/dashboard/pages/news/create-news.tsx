import { NewsEditor } from "../../components/edit-news";

export const CreateNewsPage = () => {
  return (
    <>
      <NewsEditor
        newsBody={""}
        titleOfNews={""}
        newsBannerImage={null}
        isUpdate={false}
        id={""}
      />
    </>
  );
};
