import { Container } from "@mui/material";
import Output from "editorjs-react-renderer";

const data = {
  time: 1564767102436,
  blocks: [
    {
      type: "header",
      data: {
        level: 1,
        text: "Editor.js React Renderer",
      },
    },
    {
      type: "image",
      data: {
        file: {
          url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        },
        caption: "Test Caption",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.",
      },
    },
  ],
  version: "2.14.0",
};

const PostPage = () => {
  return (
    <>
      <Container>
        <section>
          <Output data={data} />
        </section>
      </Container>
    </>
  );
};
export default PostPage;
