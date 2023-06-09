import type { BaseSchema } from "../../base/base";

export class SetVariable {
  schema: BaseSchema = {
    key: "SET_VARIABLE",
    name: "Set Var",
    color: "#EAAB46",
    blockType: "functional",
    toggleName: "feature.cbk.setvariable",
    icon: "M10 2H2C1.445 2 1 2.45 1 3V9C1 9.55 1.445 10 2 10H10C10.55 10 11 9.55 11 9V3C11 2.45 10.555 2 10 2ZM10 9H2V4H10V9ZM9 8.5H6V7.5H9V8.5ZM3.75 8.5 3.045 7.795 4.335 6.5 3.04 5.205 3.75 4.5 5.75 6.5 3.75 8.5Z",
    stencil: {
      group: "FUNCTIONS",
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
          ref: "fn_selector",
          component: "SelectInput",
          componentProps: {
            label: "Select Function",
            placeholder: "Select function",
            options: [
              { label: "Create new variable", value: "create" },
              {
                label: "Update existing variable",
                value: "update",
              },
            ],
          },
        },
        {
          ref: "setvar_create_group",
          component: "Group",
          componentProps: {
            label: "Create new variable",
          },
          showIf: 'fn_selector == "create"',
          children: [
            {
              ref: "variableType",
              component: "SelectInput",
              componentProps: {
                label: "Variable Type",
                placeholder: "Select variable type",
                options: [
                  { label: "Text", value: "TXT" },
                  { label: "Number", value: "NUM" },
                  { label: "Datetime", value: "DATE" },
                  { label: "File", value: "FILE" },
                  { label: "Doc", value: "DOC" },
                ],
              },
            },
            {
              ref: "variableName",
              component: "TextInput",
              componentProps: {
                label: "Set name of variable as",
                placeholder: "Enter variable name",
                format:"clientTimezone"
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
                  method: "matches",
                  value: "^[a-zA-Z]",
                  message: "Variable name must start with an alphabet",
                },
                {
                  method: "matches",
                  value: "^[a-zA-Z0-9_]+$",
                  message: "Variable name is alphanumeric characters and _ only",
                },
                {
                  method: "max",
                  value: "50",
                  message: "This must be less than 50 characters",
                }
              ],
              output: {
                ref: "variableType",
              },
            },
            {
              ref: "variableValue",
              component: "TextInput",
              showIf: 'variableType == "TXT"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
              validators: [
                {
                  method: "isVariableUnique",
                  message: "Variable name already exists",
                },
                {
                  method: "max",
                  value: "50",
                  message: "This must be less than 50 characters",
                },
              ],
            },
            {
              ref: "numVariableValue",
              component: "NumberInput",
              showIf: 'variableType == "NUM"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
              validators: [
                {
                  method: "min",
                  value: "0",
                  message: "This must be a positive number",
                },
              ],
            },
            {
              ref: "datetimeSelection",
              component: "SelectInput",
              showIf: 'variableType == "DATE"',
              componentProps: {
                label: "Select date option",
                placeholder: "Select date option",
                options: [
                  {
                    label: "Current Date",
                    value: "currentDate",
                  },
                  {
                    label: "Custom Date",
                    value: "customDate",
                  },
                ],
              },
            },
            {
              ref: "datetimeVariableValue",
              component: "DateTimeInput",
              showIf:
                'datetimeSelection == "customDate" && variableType == "DATE"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
            },
            {
              ref: "fileVariableValue",
              component: "FileInput",
              showIf: 'variableType == "FILE"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
            },
            {
              ref: "docVariableValue",
              component: "DocInput",
              showIf: 'variableType == "DOC"',
              componentProps: {
                label: "Document Value",
                placeholder: "Enter document value",
              },
            },
          ],
        },
        {
          ref: "setvar_update_group",
          component: "Group",
          componentProps: {
            label: "Update existing variable",
          },
          showIf: 'fn_selector == "update"',
          children: [
            {
              ref: "update_variable_name",
              component: "SelectInput",
              componentProps: {
                label: "Variable Name",
                placeholder: "Select variable name",
                options: "getExistingVariables",
              },
            },
            {
              ref: "update_value",
              component: "TextInput",
              showIf:
                '(GET(VARS,update_variable_name)).fieldInputType == "TXT"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
              validators: [
                {
                  method: "isVariableUnique",
                  message: "Variable name already exists",
                },
                {
                  method: "matches",
                  value: "^[a-zA-Z]",
                  message: "Variable name must start with an alphabet",
                },
                {
                  method: "matches",
                  value: "^[a-zA-Z0-9_]+$",
                  message: "Variable name is alphanumeric characters and _ only",
                },
                {
                  method: "max",
                  value: "50",
                  message: "This must be less than 50 characters",
                },
              ],
            },
            {
              ref: "update_num",
              component: "NumberInput",
              showIf:
                '(GET(VARS,update_variable_name)).fieldInputType == "NUM"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
              validators: [
                {
                  method: "min",
                  value: "0",
                  message: "This must be a positive number",
                },
              ],
            },
            {
              ref: "update_date",
              component: "DateTimeInput",
              showIf:
                '(GET(VARS,update_variable_name)).fieldInputType == "DATE"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
            },
            {
              ref: "update_file",
              component: "FileInput",
              showIf:
                '(GET(VARS,update_variable_name)).fieldInputType == "FILE"',
              componentProps: {
                label: "Variable Value",
                placeholder: "Enter variable value",
              },
            },
            {
              ref: "update_doc",
              component: "DocInput",
              showIf:
                '(GET(VARS,update_variable_name)).fieldInputType == "DOC"',
              componentProps: {
                label: "Document Value",
                placeholder: "Enter document value",
              },
            },
          ],
        },
      ],
    },
    runtime: async (cbk) => {
      const { moment } = cbk.library;
      const fnTypes = {
        create: "create",
        update: "update",
      };
      const fn = cbk.getElementValue("fn_selector") as keyof typeof fnTypes;

      switch (fnTypes[fn]) {
        case "create":
          const createVariable = cbk.getElementValue("variableName");
          const variableType = cbk.getElementValue("variableType");
          const datetimeSelection = cbk.getElementValue("datetimeSelection");
          let value = "";

          if (variableType === "DATE") {
            const curTime =
              datetimeSelection === "currentDate"
                ? moment().format()
                : cbk.getElementValue("datetimeVariableValue");
            const utc = moment(curTime).parseZone().utcOffset();
            value = moment(curTime).utcOffset(utc).format();
          } else if (variableType === "NUM") {
            value = cbk.getElementValue("numVariableValue");
          } else if (variableType === "FILE") {
            value = cbk.getElementValue("fileVariableValue");
          } else if (variableType === "DOC") {
            value = cbk.getElementValue("docVariableValue");
          } else {
            value = cbk.getElementValue("variableValue");
          }

          cbk.setOutput(createVariable, value);
          break;
        case "update":
          const updateVariable = cbk.getElementValue("update_variable_name");
          const updateVarType = cbk.getVariableType(updateVariable);
          let updated = "";
          cbk.log("UPDATE VAR NAME", updateVariable);
          cbk.log("UPDATE VAR TYPE", updateVarType);

          if (updateVarType === "DATE") {
            const updateDate = cbk.getElementValue("update_date");
            const utc = moment(updateDate).parseZone().utcOffset();
            updated = moment(updateDate).utcOffset(utc).format();
          } else if (updateVarType === "NUM") {
            updated = cbk.getElementValue("update_num");
          } else if (updateVarType === "FILE") {
            updated = cbk.getElementValue("update_file");
          } else if (updateVarType === "DOC") {
            updated = cbk.getElementValue("update_doc");
          } else {
            updated = cbk.getElementValue("update_value");
          }

          cbk.log("UPDATE VAR VALUE", updated);
          cbk.setOutput(updateVariable, updated);
          break;
      }
    },
  };
}
