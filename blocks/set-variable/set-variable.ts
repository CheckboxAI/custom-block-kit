import type { BaseSchema } from "../../base/base";

export class SetVariable {
    schema: BaseSchema = {
        key: "SET_VARIABLE",
        name: "Set Var",
        color: "#753491",
        toggleName: "feature.cbk.setvariable",
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
                                    { label: "Text", value: "TEXT" },
                                    { label: "Number", value: "NUMBER" },
                                    { label: "Datetime", value: "DATE" },
                                    { label: "File", value: "FILE" },
                                ],
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
                                ref: "variableType",
                            },
                        },
                        {
                            ref: "variableValue",
                            component: "TextInput",
                            showIf: 'variableType == "TEXT"',
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
                                    message:
                                        "This must be less than 50 characters",
                                },
                            ],
                        },
                        {
                            ref: "numVariableValue",
                            component: "NumberInput",
                            showIf: 'variableType == "NUMBER"',
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
                            showIf: 'datetimeSelection == "customDate" && variableType == "DATE"',
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
                            ref: "updateVariableName",
                            component: "SelectInput",
                            componentProps: {
                                label: "Variable Name",
                                placeholder: "Select variable name",
                                options: "getExistingVariables",
                            },
                        },
                        {
                            ref: "variableValue",
                            component: "TextInput",
                            componentProps: {
                                label: "Variable Value",
                                placeholder: "Enter variable value",
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
            const fn = cbk.getElementValue(
                "fn_selector"
            ) as keyof typeof fnTypes;

            switch (fnTypes[fn]) {
                case "create":
                    const createVariable = cbk.getElementValue("variableName");
                    const variableType = cbk.getElementValue("variableType");
                    const datetimeSelection =
                        cbk.getElementValue("datetimeSelection");
                    let value = "";

                    if (variableType === "DATE") {
                        value =
                            datetimeSelection === "currentDate"
                                ? moment().format("YYYY-MM-DD")
                                : moment(
                                      cbk.getElementValue(
                                          "datetimeVariableValue"
                                      )
                                  ).format("YYYY-MM-DD");
                    } else if (variableType === "NUMBER") {
                        value = cbk.getElementValue("numVariableValue");
                    } else if (variableType === "FILE") {
                        value = cbk.getElementValue("fileVariableValue");
                    } else {
                        value = cbk.getElementValue("variableValue");
                    }

                    cbk.setOutput(createVariable, value);
                    break;
                case "update":
                    const updateVariable =
                        cbk.getElementValue("updateVariableName");
                    const variableValue = cbk.getElementValue("variableValue");
                    cbk.setOutput(updateVariable, variableValue);
                    break;
            }
        },
    };
}
