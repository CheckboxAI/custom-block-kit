import type { BaseSchema } from "../../base/base";

export class BruhAI {
  schema: BaseSchema = {
    key: "SET_BRUH_AI",
    name: "Bruh AI",
    color: "#753491",
    blockType: "functional",
    // toggleName: "feature.cbk.bruhai",
    icon: "M10 2H2C1.445 2 1 2.45 1 3V9C1 9.55 1.445 10 2 10H10C10.55 10 11 9.55 11 9V3C11 2.45 10.555 2 10 2ZM10 9H2V4H10V9ZM9 8.5H6V7.5H9V8.5ZM3.75 8.5 3.045 7.795 4.335 6.5 3.04 5.205 3.75 4.5 5.75 6.5 3.75 8.5Z",
    stencil: {
      group: "CBK",
      fontSize: 12,
    },
    editor: {
      elements: [
        {
          ref: "block_description",
          component: "BlockDescription",
          componentProps: {
            label: "Block Description",
            placeholder: "Enter a description for this block",
          },
        },
        {
          ref: "document",
          component: "SelectInput",
          componentProps: {
            label: "Select document",
            placeholder: "Select a document",
            options: "getFileVariables",
          },
        },
        {
          ref: "prompt",
          component: "TextInput",
          componentProps: {
            label: "Prompt",
            placeholder: "Ask Bruh AI Anything",
          },
        },
        {
          ref: "variableName",
          component: "TextInput",
          componentProps: {
            label: "Set name of variable as",
            placeholder: "Enter variable name",
          },
          validators: [
            {
              method: "isVariableUnique",
              message: "Variable name already exists",
            },
          ],
          output: {
            as: "TEXT",
          },
        },
      ],
    },
    runtime: async (cbk) => {
      const prompt = cbk.getElementValue("prompt");
      const fileVar = cbk.getElementValue("document");
      const files = cbk.getVariable(fileVar);
      const [file] = JSON.parse(files);
      cbk.log(file);
      const response = await cbk.library.makeRequest({
        method: "post",
        url: "http://194.233.67.16:8080/answer_question",
        data: {
          question: prompt,
        },
      });
      cbk.log(`${prompt}. Context: ${file.fileKey}_${file.fileName} only`);
      const variableName = cbk.getElementValue("variableName");
      cbk.setOutput(variableName, response.data.answer);
    },
  };
}
