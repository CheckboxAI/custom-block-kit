import { BaseSchema } from "../base";

export class SetVariable extends BaseSchema {
    schema = {
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
                    component: "InterpolationInput",
                    componentProps: {
                        label: "Block Description",
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
                                    { label: "Text", value: "text" },
                                    { label: "Number", value: "number" },
                                    { label: "Datetime", value: "datetime" },
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
                        },
                        {
                            ref: "variableValue",
                            component: "TextInput",
                            showIf: 'variableType != "datetime"',
                            componentProps: {
                                label: "Variable Value",
                                placeholder: "Enter variable value",
                            },
                        },
                        {
                            ref: "datetimeSelection",
                            component: "SelectInput",
                            componentProps: {
                                label: "Variable Type",
                                placeholder: "Select variable type",
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
                            showIf: 'datetimeSelection == "customDate"',
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
                            ref: "variableName",
                            component: "SelectInput",
                            componentProps: {
                                label: "Variable Name",
                                placeholder: "Select variable name",
                                optionsFn: "getExistingVariables",
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
        runtime: `
        const { moment } = cbk.library;
        const fn = cbk.getElementValue('fn_selector');
        const fnTypes = {
            create: 'create',
            update: 'update',
        };

        switch (fnTypes[fn]) {
            case 'create':
                const variableName = cbk.getElementValue('variableName');
                const variableType = cbk.getElementValue('variableType'); 
                const datetimeSelection = cbk.getElementValue('datetimeSelection');
                let value = ''

                if (variableType === 'datetime') {
                    value = datetimeSelection === 'currentDate' 
                    ? moment.now() 
                    : cbk.getElementValue('datetimeVariableValue');
                } else {
                    value = cbk.getElementValue('variableValue');
                }

                cbk.setOutput(variableName, value);
                break;
            case 'update':
                const variableName = cbk.getElementValue('variableName');
                const variableValue = cbk.getElementValue('variableValue');

                cbk.setOutput(variableName, variableValue);
                break;
        `,
    };
}
