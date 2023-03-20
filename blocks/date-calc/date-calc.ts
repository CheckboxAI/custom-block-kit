import { BaseSchema } from "../base";

export class DateCalc extends BaseSchema {
    schema: BaseSchema = {
        key: "DATE_CALC",
        name: "Date Calc",
        color: "#753491",
        toggleName: "feature.cbk.datecalc",
        icon: "M9.5 2 L 9 2 L 9 1 L 8 1 L 8 2 L 4 2 L 4 1 L 3 1 L 3 2 L 2.5 2 C 1.945312 2 1.503906 2.449219 1.503906 3 L 1.5 10 C 1.5 10.550781 1.945312 11 2.5 11 L 9.5 11 C 10.050781 11 10.5 10.550781 10.5 10 L 10.5 3 C 10.5 2.449219 10.050781 2 9.5 2 Z M 9.5 10 L 2.5 10 L 2.5 5 L 9.5 5 Z M 4.5 7 L 3.5 7 L 3.5 6 L 4.5 6 Z M 6.5 7 L 5.5 7 L 5.5 6 L 6.5 6 Z M 8.5 7 L 7.5 7 L 7.5 6 L 8.5 6 Z M 4.5 9 L 3.5 9 L 3.5 8 L 4.5 8 Z M 6.5 9 L 5.5 9 L 5.5 8 L 6.5 8 Z M 8.5 9 L 7.5 9 L 7.5 8 L 8.5 8 Z M 8.5 9",
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
                        placeholder: "Input hint | Blank",
                    },
                },
                {
                    ref: "fn_selector",
                    component: "SelectInput",
                    componentProps: {
                        label: "Select Function",
                        placeholder: "Select a function",
                        options: [
                            { label: "Add time period to date", value: "add" },
                            {
                                label: "Subtract time period from date",
                                value: "subtract",
                            },
                            {
                                label: "Difference of two dates",
                                value: "difference",
                            },
                        ],
                    },
                },
                {
                    ref: "datecalc_add_group",
                    component: "Group",
                    componentProps: {
                        label: "Add time period to date",
                    },
                    showIf: 'fn_selector == "add"',
                    children: [
                        {
                            ref: "time_period",
                            component: "NumberInput",
                            componentProps: {
                                label: "Add time period of",
                                placeholder: "Insert number",
                            },
                        },
                        {
                            ref: "unit",
                            component: "SelectInput",
                            componentProps: {
                                label: "Select unit of time",
                                placeholder: "Select unit of time",
                                options: [
                                    { label: "Minutes", value: "minutes" },
                                    { label: "Hours", value: "hours" },
                                    { label: "Days", value: "days" },
                                    { label: "Weeks", value: "weeks" },
                                    { label: "Months", value: "months" },
                                ],
                            },
                        },
                        {
                            ref: "to_date_variable",
                            component: "SelectInput",
                            componentProps: {
                                label: "To date variable",
                                placeholder: "Select date variable",
                                optionsFn: "getDateVariables",
                            },
                        },
                        {
                            ref: "datecalc_save_group",
                            component: "Group",
                            componentProps: {
                                label: "Save resulting new datetime variable as",
                            },
                            children: [
                                {
                                    ref: "new_datetime_variable",
                                    component: "TextInput",
                                    componentProps: {
                                        label: "Name of the new DATE variable",
                                        placeholder: "Variable name",
                                    },
                                    validators: [
                                        {
                                            method: "isVariableUnique",
                                            message:
                                                "This variable already exists!",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    ref: "datecalc_subtract_group",
                    component: "Group",
                    componentProps: {
                        label: "Subtract time period from date",
                    },
                    showIf: 'fn_selector == "subtract"',
                    children: [
                        {
                            ref: "time_period",
                            component: "NumberInput",
                            componentProps: {
                                label: "Subtract time period of",
                                placeholder: "Insert number",
                            },
                        },
                        {
                            ref: "unit",
                            component: "SelectInput",
                            componentProps: {
                                label: "Select unit of time",
                                placeholder: "Select unit of time",
                                options: [
                                    { label: "Minutes", value: "minutes" },
                                    { label: "Hours", value: "hours" },
                                    { label: "Days", value: "days" },
                                    { label: "Weeks", value: "weeks" },
                                    { label: "Months", value: "months" },
                                ],
                            },
                        },
                        {
                            ref: "to_date_variable",
                            component: "SelectInput",
                            componentProps: {
                                label: "To date variable",
                                placeholder: "Select date variable",
                                optionsFn: "getDateVariables",
                            },
                        },
                        {
                            ref: "datecalc_save_group",
                            component: "Group",
                            componentProps: {
                                label: "Save resulting new datetime variable as",
                            },
                            children: [
                                {
                                    ref: "new_datetime_variable",
                                    component: "TextInput",
                                    componentProps: {
                                        label: "Name of the new DATE variable",
                                        placeholder: "Variable name",
                                    },
                                    validators: [
                                        {
                                            method: "isVariableUnique",
                                            message:
                                                "This variable already exists!",
                                        },
                                    ],
                                    output: {
                                        as: "DATE",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    ref: "datecalc_difference_group",
                    component: "Group",
                    componentProps: {
                        label: "Find the difference between two dates (A - B)",
                    },
                    showIf: 'fn_selector == "difference"',
                    children: [
                        {
                            ref: "diff_date_a",
                            component: "SelectInput",
                            componentProps: {
                                label: "Date A",
                                placeholder: "Text here",
                                optionsFn: "getDateVariables",
                            },
                        },
                        {
                            ref: "diff_date_b",
                            component: "SelectInput",
                            componentProps: {
                                label: "Date B",
                                placeholder: "Text here",
                                optionsFn: "getDateVariables",
                            },
                        },
                        {
                            ref: "diff_save_block",
                            component: "Group",
                            componentProps: {
                                label: "Save difference between Date A and Date B as",
                            },
                            children: [
                                {
                                    ref: "diff_time_unit",
                                    component: "SelectInput",
                                    componentProps: {
                                        label: "Select unit of time",
                                        placeholder: "Select unit of time",
                                        options: [
                                            {
                                                label: "Minutes",
                                                value: "minutes",
                                            },
                                            { label: "Hours", value: "hours" },
                                            { label: "Days", value: "days" },
                                            { label: "Weeks", value: "weeks" },
                                            {
                                                label: "Months",
                                                value: "months",
                                            },
                                        ],
                                    },
                                },
                                {
                                    ref: "new_diff_variable",
                                    component: "TextInput",
                                    componentProps: {
                                        label: "Name of the new DATE variable",
                                        placeholder: "Variable name",
                                    },
                                    validators: [
                                        {
                                            method: "isVariableUnique",
                                            message:
                                                "This variable already exists!",
                                        },
                                    ],
                                    output: {
                                        as: "NUMBER",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        runtime: `
        const { moment } = cbk.library;
        const fn = cbk.getElementValue('fn_selector');
        const fnTypes = {
            add: 'periodUnit',
            subtract: 'periodUnit',
            difference: 'difference'
        };

        switch (fnTypes[fn]) {
            case 'periodUnit':
                const newDateVarName = cbk.getElementValue('new_datetime_variable');
                const fromDate = cbk.getVariable(cbk.getElementValue('to_date_variable'));
                const date = moment(fromDate);
                const unit = cbk.getElementValue('unit');
                const period = cbk.getElementValue('time_period');
                const toDate = date[fn](period, unit).format()
                cbk.setOutput(newDateVarName, toDate);
                break;
            case 'difference':
                const newDiffVarName = cbk.getElementValue('new_diff_variable');
                const dateA = cbk.getVariable(cbk.getElementValue('diff_date_a'));
                const dateB = cbk.getVariable(cbk.getElementValue('diff_date_b'));
                const diffUnit = cbk.getElementValue('diff_time_unit');
                const difference = moment(dateA).diff(moment(dateB), diffUnit);
                cbk.setOutput(newDiffVarName, difference);
                break;
        }
        `,
    };
}
