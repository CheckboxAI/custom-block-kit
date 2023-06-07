import type { BaseSchema } from "../../base";
import { categorizeInput } from "./classify";

export class Triage {
  schema: BaseSchema = {
    key: "TRIAGE",
    name: "Triage",
    color: "#EAAB46",
    blockType: "functional",
    icon: "M 4.5 9.375 L 7 11.875 C 7.070312 11.945312 7.164062 11.984375 7.265625 11.984375 C 7.3125 11.984375 7.363281 11.976562 7.410156 11.953125 C 7.546875 11.894531 7.636719 11.761719 7.640625 11.609375 L 7.640625 4.90625 L 11.890625 0.640625 C 11.996094 0.535156 12.027344 0.371094 11.96875 0.234375 C 11.914062 0.09375 11.777344 0 11.625 0 L 0.375 0 C 0.222656 0 0.0859375 0.09375 0.03125 0.234375 C -0.0273438 0.371094 0.00390625 0.535156 0.109375 0.640625 L 4.375 4.90625 L 4.375 9.125 C 4.382812 9.21875 4.429688 9.308594 4.5 9.375 Z M 1.277344 0.75 L 10.722656 0.75 L 6.972656 4.5 C 6.898438 4.570312 6.859375 4.667969 6.859375 4.765625 L 6.859375 10.722656 L 5.109375 8.96875 L 5.109375 4.75 C 5.109375 4.652344 5.070312 4.554688 5 4.484375 Z M 1.277344 0.75 ",
    stencil: {
      group: "FUNCTIONS", // TODO maintain consistent grouping
      fontSize: 12,
    },
    editor: {
      elements: [
        {
          ref: "inputVariable",
          component: "SelectInput",
          componentProps: {
            label: "Variable to categorise",
            placeholder: "Select variable name",
            options: "getExistingVariables",
          },
          validators: [
            {
              method: "required",
              message: "Please select a variable",
            },
          ],
        },
        {
          ref: "categories",
          component: "KeyValueInput",
          componentProps: {
            label: "Categories",
            placeholder: "Enter categories",
          },
        },
        {
          ref: "outputVariableName",
          component: "TextInput",
          componentProps: {
            label: "Output category variable name",
            placeholder: "Output Variable",
          },
          validators: [
            {
              method: "isVariableUnique",
              message: "Variable name already exists",
            },
            {
              method: "matches",
              value: "^\\S*$",
              message: "Variable name cannot contain spaces",
            },
            {
              method: "required",
              message: "Please enter an output variable name",
            },
          ],
          output: {
            as: "TXT",
          },
        },
        {
          ref: "confidence",
          label: "Confidence",
          component: "NumberInput",
          componentProps: {
            label: "Confidence",
            placeholder: "Enter the AI confidence required",
          },
          validators: [
            {
              method: "min",
              value: "0",
              message: "The threshold must be a positive number",
            },
            {
              method: "max",
              value: "1",
              message: "The threshold must be less than or equal to 1",
            },
          ],
        },
        {
          ref: "fallbackCategory",
          component: "TextInput",
          componentProps: {
            label: "Fallback Category",
            placeholder: "Enter the fallback category",
          },
        },
      ],
    },
    runtime: async (cbk) => {
      const formCategories = cbk.getElementValue("categories");
      const input = cbk.library.getVariable(
        cbk.getElementValue("inputVariable")
      );
      const confidence = parseFloat(cbk.getElementValue("confidence")) || 0.5;
      const outputVariableName = cbk.getElementValue("outputVariableName");
      const fallbackCategory =
        cbk.getElementValue("fallbackCategory") || "Catchall";

      // Transform formCategories keys from {id: "id", value: "value"} to  Category[]
      type Category = {
        label: string;
        description: string;
      };
      const stringified = JSON.stringify(formCategories);
      const categories: Category[] = JSON.parse(stringified).map(
        (category: { id: string; value: string }) => {
          return {
            label: category.id,
            description: category.value,
          };
        }
      );

      const result = await categorizeInput(
        cbk,
        categories,
        input,
        confidence,
        fallbackCategory
      );

      const formatResult = result?.category;
      cbk.setOutput(outputVariableName, formatResult);
    },
  };
}
