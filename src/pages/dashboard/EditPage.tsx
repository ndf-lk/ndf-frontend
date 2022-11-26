import { createReactEditorJS } from "react-editor-js";

export const EditPage = () => {
  const ReactEditorJS = createReactEditorJS();

  return (
    <>
      <h1> the editor </h1>
      <ReactEditorJS
        defaultValue={{
          time: 1635603431943,
          blocks: [
            {
              id: "12iM3lqzcm",
              type: "paragraph",
              data: {
                text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
              },
            },

            {
              id: "Ptb9oEioJn",
              type: "paragraph",
              data: {
                text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
              },
            },
            {
              id: "-J7nt-Ksnw",
              type: "paragraph",
              data: {
                text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
              },
            },
          ],
        }}
      />
    </>
  );
};
