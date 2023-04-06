"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var custom_block_kit_exports = {};
__export(custom_block_kit_exports, {
  DateCalc: () => DateCalc,
  SetVariable: () => SetVariable,
  Sharepoint: () => Sharepoint
});
module.exports = __toCommonJS(custom_block_kit_exports);

// blocks/date-calc/date-calc.ts
var DateCalc = class {
  constructor() {
    this.schema = {
      key: "DATE_CALC",
      name: "Date Calc",
      color: "#753491",
      toggleName: "feature.cbk.datecalc",
      icon: "M9.5 2 L 9 2 L 9 1 L 8 1 L 8 2 L 4 2 L 4 1 L 3 1 L 3 2 L 2.5 2 C 1.945312 2 1.503906 2.449219 1.503906 3 L 1.5 10 C 1.5 10.550781 1.945312 11 2.5 11 L 9.5 11 C 10.050781 11 10.5 10.550781 10.5 10 L 10.5 3 C 10.5 2.449219 10.050781 2 9.5 2 Z M 9.5 10 L 2.5 10 L 2.5 5 L 9.5 5 Z M 4.5 7 L 3.5 7 L 3.5 6 L 4.5 6 Z M 6.5 7 L 5.5 7 L 5.5 6 L 6.5 6 Z M 8.5 7 L 7.5 7 L 7.5 6 L 8.5 6 Z M 4.5 9 L 3.5 9 L 3.5 8 L 4.5 8 Z M 6.5 9 L 5.5 9 L 5.5 8 L 6.5 8 Z M 8.5 9 L 7.5 9 L 7.5 8 L 8.5 8 Z M 8.5 9",
      stencil: {
        group: "CBK",
        fontSize: 12
      },
      editor: {
        elements: [
          {
            ref: "block_description",
            component: "BlockDescription",
            componentProps: {
              label: "Block Description",
              placeholder: "Enter a description for this block"
            }
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
                  value: "subtract"
                },
                {
                  label: "Difference of two dates",
                  value: "difference"
                }
              ]
            },
            validators: [
              {
                method: "required",
                message: "This must select a date function"
              }
            ]
          },
          {
            ref: "datecalc_add_group",
            component: "Group",
            componentProps: {
              label: "Add time period to date"
            },
            showIf: 'fn_selector == "add"',
            children: [
              {
                ref: "time_period",
                component: "NumberInput",
                componentProps: {
                  label: "Add time period of",
                  placeholder: "Insert number"
                },
                validators: [
                  {
                    method: "required",
                    message: "Please insert a number"
                  },
                  {
                    method: "min",
                    value: "0",
                    message: "This must be a positive number"
                  }
                ]
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
                    { label: "Months", value: "months" }
                  ]
                }
              },
              {
                ref: "to_date_variable",
                component: "SelectInput",
                componentProps: {
                  label: "To date variable",
                  placeholder: "Select date variable",
                  options: "getDateVariables"
                }
              },
              {
                ref: "datecalc_save_group",
                component: "Group",
                componentProps: {
                  label: "Save resulting new datetime variable as"
                },
                children: [
                  {
                    ref: "new_datetime_variable",
                    component: "TextInput",
                    componentProps: {
                      label: "Name of the new DATE variable",
                      placeholder: "Variable name"
                    },
                    validators: [
                      {
                        method: "isVariableUnique",
                        message: "This variable already exists!"
                      },
                      {
                        method: "max",
                        value: "50",
                        message: "This must be less than 50 characters"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            ref: "datecalc_subtract_group",
            component: "Group",
            componentProps: {
              label: "Subtract time period from date"
            },
            showIf: 'fn_selector == "subtract"',
            children: [
              {
                ref: "time_period",
                component: "NumberInput",
                componentProps: {
                  label: "Subtract time period of",
                  placeholder: "Insert number"
                },
                validators: [
                  {
                    method: "required",
                    message: "Please insert a number"
                  }
                ]
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
                    { label: "Months", value: "months" }
                  ]
                }
              },
              {
                ref: "to_date_variable",
                component: "SelectInput",
                componentProps: {
                  label: "To date variable",
                  placeholder: "Select date variable",
                  options: "getDateVariables"
                }
              },
              {
                ref: "datecalc_save_group",
                component: "Group",
                componentProps: {
                  label: "Save resulting new datetime variable as"
                },
                children: [
                  {
                    ref: "new_datetime_variable",
                    component: "TextInput",
                    componentProps: {
                      label: "Name of the new DATE variable",
                      placeholder: "Variable name"
                    },
                    validators: [
                      {
                        method: "isVariableUnique",
                        message: "This variable already exists!"
                      },
                      {
                        method: "max",
                        value: "50",
                        message: "This must be less than 50 characters"
                      }
                    ],
                    output: {
                      as: "DATE"
                    }
                  }
                ]
              }
            ]
          },
          {
            ref: "datecalc_difference_group",
            component: "Group",
            componentProps: {
              label: "Find the difference between two dates (A - B)"
            },
            showIf: 'fn_selector == "difference"',
            children: [
              {
                ref: "diff_date_a",
                component: "SelectInput",
                componentProps: {
                  label: "Date A",
                  placeholder: "Text here",
                  options: "getDateVariables"
                }
              },
              {
                ref: "diff_date_b",
                component: "SelectInput",
                componentProps: {
                  label: "Date B",
                  placeholder: "Text here",
                  options: "getDateVariables"
                }
              },
              {
                ref: "diff_save_block",
                component: "Group",
                componentProps: {
                  label: "Save difference between Date A and Date B as"
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
                          value: "minutes"
                        },
                        { label: "Hours", value: "hours" },
                        { label: "Days", value: "days" },
                        { label: "Weeks", value: "weeks" },
                        {
                          label: "Months",
                          value: "months"
                        }
                      ]
                    }
                  },
                  {
                    ref: "new_diff_variable",
                    component: "TextInput",
                    componentProps: {
                      label: "Name of the new DATE variable",
                      placeholder: "Variable name"
                    },
                    validators: [
                      {
                        method: "isVariableUnique",
                        message: "This variable already exists!"
                      },
                      {
                        method: "required",
                        message: "Please insert a variable name"
                      },
                      {
                        method: "max",
                        value: "50",
                        message: "This must be less than 50 characters"
                      }
                    ],
                    output: {
                      as: "NUMBER"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      runtime: (cbk) => __async(this, null, function* () {
        const { moment } = cbk.library;
        const fnTypes = {
          add: "periodUnit",
          subtract: "periodUnit",
          difference: "difference"
        };
        const fn = cbk.getElementValue("fn_selector");
        switch (fnTypes[fn]) {
          case "periodUnit":
            const newDateVarName = cbk.getElementValue("new_datetime_variable");
            const fromDate = cbk.getVariable(cbk.getElementValue("to_date_variable"));
            const date = moment(fromDate);
            const unit = cbk.getElementValue("unit");
            const period = cbk.getElementValue("time_period");
            const toDate = date[fn](period, unit).format();
            cbk.setOutput(newDateVarName, toDate);
            break;
          case "difference":
            const newDiffVarName = cbk.getElementValue("new_diff_variable");
            const dateA = cbk.getVariable(cbk.getElementValue("diff_date_a"));
            const dateB = cbk.getVariable(cbk.getElementValue("diff_date_b"));
            const diffUnit = cbk.getElementValue("diff_time_unit");
            const difference = moment(dateA).diff(moment(dateB), diffUnit);
            cbk.setOutput(newDiffVarName, difference);
            break;
        }
      })
    };
  }
};

// blocks/set-variable/set-variable.ts
var SetVariable = class {
  constructor() {
    this.schema = {
      key: "SET_VARIABLE",
      name: "Set Var",
      color: "#753491",
      toggleName: "feature.cbk.setvariable",
      icon: "M10 2H2C1.445 2 1 2.45 1 3V9C1 9.55 1.445 10 2 10H10C10.55 10 11 9.55 11 9V3C11 2.45 10.555 2 10 2ZM10 9H2V4H10V9ZM9 8.5H6V7.5H9V8.5ZM3.75 8.5 3.045 7.795 4.335 6.5 3.04 5.205 3.75 4.5 5.75 6.5 3.75 8.5Z",
      stencil: {
        group: "CBK",
        fontSize: 12
      },
      editor: {
        elements: [
          {
            ref: "block_description",
            component: "BlockDescription",
            componentProps: {
              label: "Block Description",
              placeholder: "Enter a description for this block"
            }
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
                  value: "update"
                }
              ]
            }
          },
          {
            ref: "setvar_create_group",
            component: "Group",
            componentProps: {
              label: "Create new variable"
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
                    { label: "File", value: "FILE" }
                  ]
                }
              },
              {
                ref: "variableName",
                component: "TextInput",
                componentProps: {
                  label: "Set name of variable as",
                  placeholder: "Enter variable name"
                },
                validators: [
                  {
                    method: "isVariableUnique",
                    message: "Variable name already exists"
                  }
                ],
                output: {
                  ref: "variableType"
                }
              },
              {
                ref: "variableValue",
                component: "TextInput",
                showIf: 'variableType == "TEXT"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                },
                validators: [
                  {
                    method: "isVariableUnique",
                    message: "Variable name already exists"
                  },
                  {
                    method: "max",
                    value: "50",
                    message: "This must be less than 50 characters"
                  }
                ]
              },
              {
                ref: "numVariableValue",
                component: "NumberInput",
                showIf: 'variableType == "NUMBER"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                },
                validators: [
                  {
                    method: "min",
                    value: "0",
                    message: "This must be a positive number"
                  }
                ]
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
                      value: "currentDate"
                    },
                    {
                      label: "Custom Date",
                      value: "customDate"
                    }
                  ]
                }
              },
              {
                ref: "datetimeVariableValue",
                component: "DateTimeInput",
                showIf: 'datetimeSelection == "customDate" && variableType == "DATE"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "fileVariableValue",
                component: "FileInput",
                showIf: 'variableType == "FILE"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              }
            ]
          },
          {
            ref: "setvar_update_group",
            component: "Group",
            componentProps: {
              label: "Update existing variable"
            },
            showIf: 'fn_selector == "update"',
            children: [
              {
                ref: "updateVariableName",
                component: "SelectInput",
                componentProps: {
                  label: "Variable Name",
                  placeholder: "Select variable name",
                  options: "getExistingVariables"
                }
              },
              {
                ref: "variableValue",
                component: "TextInput",
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              }
            ]
          }
        ]
      },
      runtime: (cbk) => __async(this, null, function* () {
        const { moment } = cbk.library;
        const fnTypes = {
          create: "create",
          update: "update"
        };
        const fn = cbk.getElementValue(
          "fn_selector"
        );
        switch (fnTypes[fn]) {
          case "create":
            const createVariable = cbk.getElementValue("variableName");
            const variableType = cbk.getElementValue("variableType");
            const datetimeSelection = cbk.getElementValue("datetimeSelection");
            let value = "";
            if (variableType === "DATE") {
              value = datetimeSelection === "currentDate" ? moment().format("YYYY-MM-DD") : moment(
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
            const updateVariable = cbk.getElementValue("updateVariableName");
            const variableValue = cbk.getElementValue("variableValue");
            cbk.setOutput(updateVariable, variableValue);
            break;
        }
      })
    };
  }
};

// blocks/sharepoint/utils.ts
var sortOptions = (a, b) => {
  const la = a.label.toLowerCase(), lb = b.label.toLowerCase();
  if (la < lb) {
    return -1;
  }
  if (la > lb) {
    return 1;
  }
  return 0;
};

// blocks/sharepoint/sharepoint.ts
var Sharepoint = class {
  constructor() {
    this.schema = {
      key: "SHAREPOINT",
      name: "Sharepoint",
      color: "#753491",
      toggleName: "feature.cbk.sharepoint",
      icon: "M 11 6.625 C 11 6.972656 10.933594 7.296875 10.800781 7.601562 C 10.671875 7.898438 10.492188 8.164062 10.265625 8.390625 C 10.039062 8.617188 9.773438 8.796875 9.46875 8.929688 C 9.167969 9.058594 8.84375 9.125 8.5 9.125 C 8.285156 9.125 8.074219 9.097656 7.863281 9.046875 C 7.835938 9.320312 7.757812 9.578125 7.636719 9.816406 C 7.507812 10.054688 7.347656 10.261719 7.148438 10.441406 C 6.957031 10.617188 6.734375 10.753906 6.484375 10.851562 C 6.230469 10.949219 5.964844 11 5.691406 11 C 5.386719 11 5.101562 10.941406 4.835938 10.824219 C 4.570312 10.710938 4.339844 10.558594 4.140625 10.359375 C 3.941406 10.164062 3.789062 9.933594 3.675781 9.664062 C 3.558594 9.398438 3.5 9.113281 3.5 8.816406 L 3.5 8.65625 C 3.511719 8.605469 3.519531 8.554688 3.523438 8.5 L 1.414062 8.5 C 1.304688 8.5 1.207031 8.460938 1.121094 8.378906 C 1.039062 8.292969 1 8.195312 1 8.085938 L 1 3.914062 C 1 3.804688 1.039062 3.707031 1.121094 3.621094 C 1.207031 3.539062 1.304688 3.5 1.414062 3.5 L 2.890625 3.5 C 2.929688 3.148438 3.03125 2.8125 3.195312 2.5 C 3.355469 2.203125 3.5625 1.941406 3.816406 1.71875 C 4.066406 1.492188 4.351562 1.316406 4.671875 1.191406 C 4.988281 1.0625 5.328125 1 5.691406 1 C 6.078125 1 6.441406 1.074219 6.78125 1.21875 C 7.125 1.371094 7.421875 1.570312 7.675781 1.824219 C 7.929688 2.078125 8.128906 2.375 8.28125 2.71875 C 8.425781 3.058594 8.5 3.425781 8.5 3.816406 L 8.5 3.96875 C 8.5 4.019531 8.492188 4.070312 8.480469 4.125 C 8.828125 4.125 9.152344 4.191406 9.453125 4.320312 C 9.761719 4.449219 10.027344 4.628906 10.25 4.855469 C 10.488281 5.078125 10.671875 5.339844 10.800781 5.644531 C 10.933594 5.953125 11 6.277344 11 6.625 M 5.683594 1.625 C 5.414062 1.625 5.160156 1.671875 4.914062 1.769531 C 4.667969 1.863281 4.445312 1.992188 4.25 2.160156 C 4.0625 2.328125 3.90625 2.523438 3.773438 2.75 C 3.648438 2.984375 3.566406 3.234375 3.523438 3.5 L 5.585938 3.5 C 5.695312 3.5 5.792969 3.542969 5.878906 3.625 C 5.960938 3.707031 6 3.804688 6 3.914062 L 6 5.976562 L 6.089844 5.960938 C 6.148438 5.753906 6.230469 5.558594 6.339844 5.371094 C 6.445312 5.179688 6.578125 5.011719 6.734375 4.859375 C 6.886719 4.710938 7.058594 4.578125 7.25 4.464844 C 7.429688 4.355469 7.625 4.273438 7.835938 4.214844 C 7.863281 4.070312 7.875 3.9375 7.875 3.816406 C 7.875 3.511719 7.816406 3.226562 7.699219 2.960938 C 7.585938 2.695312 7.429688 2.464844 7.230469 2.269531 C 7.035156 2.074219 6.804688 1.917969 6.539062 1.800781 C 6.273438 1.683594 5.988281 1.625 5.683594 1.625 M 3.550781 7.625 C 3.699219 7.625 3.851562 7.609375 4 7.578125 C 4.140625 7.550781 4.265625 7.5 4.378906 7.425781 C 4.492188 7.355469 4.585938 7.261719 4.65625 7.144531 C 4.71875 7.023438 4.75 6.878906 4.75 6.703125 C 4.75 6.527344 4.714844 6.382812 4.648438 6.265625 C 4.578125 6.148438 4.484375 6.050781 4.375 5.96875 C 4.265625 5.894531 4.148438 5.828125 4.019531 5.78125 L 3.660156 5.636719 C 3.554688 5.589844 3.460938 5.546875 3.386719 5.5 C 3.3125 5.449219 3.273438 5.386719 3.273438 5.308594 C 3.273438 5.257812 3.296875 5.210938 3.335938 5.175781 C 3.375 5.140625 3.421875 5.117188 3.476562 5.101562 C 3.527344 5.078125 3.582031 5.0625 3.640625 5.054688 C 3.699219 5.050781 3.75 5.050781 3.789062 5.050781 C 3.953125 5.050781 4.101562 5.070312 4.230469 5.109375 C 4.355469 5.152344 4.488281 5.214844 4.625 5.300781 L 4.625 4.558594 C 4.542969 4.535156 4.46875 4.515625 4.40625 4.5 C 4.339844 4.484375 4.273438 4.46875 4.210938 4.460938 C 4.144531 4.449219 4.074219 4.441406 4 4.433594 C 3.933594 4.433594 3.859375 4.429688 3.773438 4.429688 C 3.632812 4.429688 3.484375 4.445312 3.335938 4.476562 C 3.183594 4.507812 3.046875 4.5625 2.925781 4.636719 C 2.808594 4.710938 2.710938 4.804688 2.628906 4.914062 C 2.554688 5.03125 2.515625 5.175781 2.515625 5.34375 C 2.515625 5.511719 2.550781 5.648438 2.625 5.75 C 2.699219 5.867188 2.789062 5.964844 2.898438 6.046875 C 3.011719 6.121094 3.125 6.191406 3.25 6.25 L 3.609375 6.394531 C 3.722656 6.441406 3.816406 6.488281 3.890625 6.539062 C 3.964844 6.59375 4 6.65625 4 6.730469 C 4 6.792969 3.980469 6.84375 3.945312 6.878906 C 3.910156 6.917969 3.867188 6.941406 3.816406 6.960938 C 3.773438 6.988281 3.71875 7 3.65625 7 L 3.5 7 C 3.304688 7 3.128906 6.96875 2.980469 6.910156 C 2.828125 6.84375 2.671875 6.757812 2.519531 6.648438 L 2.519531 7.429688 C 2.851562 7.558594 3.191406 7.625 3.550781 7.625 M 5.683594 10.375 C 5.894531 10.375 6.097656 10.332031 6.289062 10.25 C 6.480469 10.171875 6.648438 10.058594 6.789062 9.921875 C 6.929688 9.777344 7.042969 9.609375 7.125 9.421875 C 7.207031 9.230469 7.25 9.027344 7.25 8.816406 C 7.25 8.628906 7.21875 8.449219 7.15625 8.28125 C 7.09375 8.109375 7.011719 7.957031 6.898438 7.824219 C 6.785156 7.6875 6.652344 7.574219 6.5 7.480469 C 6.351562 7.386719 6.183594 7.320312 6 7.28125 L 6 8.085938 C 6 8.195312 5.960938 8.292969 5.878906 8.378906 C 5.792969 8.460938 5.695312 8.5 5.585938 8.5 L 4.15625 8.5 C 4.136719 8.601562 4.125 8.707031 4.125 8.816406 C 4.125 9.027344 4.167969 9.230469 4.25 9.421875 C 4.328125 9.609375 4.441406 9.777344 4.578125 9.921875 C 4.722656 10.058594 4.890625 10.171875 5.078125 10.25 C 5.269531 10.332031 5.472656 10.375 5.683594 10.375 M 8.5 8.5 C 8.757812 8.5 9 8.453125 9.226562 8.355469 C 9.453125 8.257812 9.65625 8.125 9.824219 7.949219 C 9.996094 7.78125 10.128906 7.582031 10.230469 7.355469 C 10.328125 7.128906 10.375 6.886719 10.375 6.625 C 10.375 6.375 10.328125 6.132812 10.230469 5.898438 C 10.128906 5.671875 9.996094 5.46875 9.824219 5.300781 C 9.65625 5.128906 9.453125 4.996094 9.226562 4.894531 C 9 4.796875 8.757812 4.75 8.5 4.75 C 8.242188 4.75 8 4.800781 7.773438 4.898438 C 7.546875 5 7.351562 5.136719 7.179688 5.304688 C 7.011719 5.476562 6.875 5.671875 6.773438 5.898438 C 6.675781 6.132812 6.625 6.375 6.625 6.625 L 6.625 6.730469 L 6.636719 6.839844 C 6.789062 6.914062 6.929688 7.003906 7.058594 7.109375 C 7.1875 7.214844 7.304688 7.335938 7.410156 7.464844 C 7.511719 7.597656 7.597656 7.742188 7.671875 7.894531 C 7.738281 8.046875 7.792969 8.207031 7.828125 8.371094 C 8.050781 8.457031 8.273438 8.5 8.5 8.5 Z M 8.5 8.5",
      stencil: {
        group: "CBK",
        fontSize: 12
      },
      editor: {
        elements: [
          {
            ref: "block_description",
            component: "BlockDescription",
            componentProps: {
              label: "Block Description"
            }
          },
          {
            ref: "fn_selector",
            component: "SelectInput",
            componentProps: {
              label: "Select Function",
              placeholder: "Select function",
              options: [
                { label: "Create Folder", value: "create_folder" },
                {
                  label: "Upload file to folder",
                  value: "upload_file"
                }
              ]
            },
            validators: [
              {
                method: "required",
                message: "Please select a function"
              }
            ]
          },
          {
            ref: "site_id",
            component: "SelectInput",
            componentProps: {
              label: "Select Site",
              placeholder: "Select site",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get("/public/integrations/sharepoint/sites");
                return response ? response.map(({ id, displayName }) => ({
                  value: id,
                  label: displayName
                })).sort(sortOptions) : [];
              })
            },
            validators: [
              {
                method: "required",
                message: "Please select a site"
              }
            ]
          },
          {
            ref: "drive_id",
            showIf: "!!site_id",
            component: "SelectInput",
            componentProps: {
              label: "Select Drive",
              placeholder: "Select drive",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/sharepoint/drives",
                  {
                    siteId: cbk.getElementValue("site_id")
                  }
                );
                return response ? response.map(({ id, name }) => ({
                  value: id,
                  label: name
                })).sort(sortOptions) : [];
              })
            },
            validators: [
              {
                method: "required",
                message: "Please select a drive"
              }
            ]
          },
          {
            ref: "folder_id",
            showIf: "!!site_id && !!drive_id",
            component: "SelectInput",
            componentProps: {
              label: "Select Folder",
              placeholder: "Select folder",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/sharepoint/folders",
                  {
                    siteId: cbk.getElementValue("site_id"),
                    driveId: cbk.getElementValue("drive_id")
                  }
                );
                if (!response)
                  return [];
                const initialOptions = [{ value: "", label: "/" }];
                const options = response.map(({ id, name }) => ({
                  value: id,
                  label: name
                })).sort(sortOptions);
                return initialOptions.concat(options);
              })
            }
          },
          {
            ref: "folder_name",
            showIf: 'fn_selector == "create_folder"',
            component: "InterpolationInput",
            componentProps: {
              label: "Folder name"
            },
            validators: [
              {
                method: "required",
                message: "Please enter the folder name"
              }
            ]
          },
          {
            ref: "file",
            showIf: 'fn_selector == "upload_file"',
            component: "SelectInput",
            componentProps: {
              label: "File to upload",
              placeholder: "Select file",
              options: "getFileVariables"
            }
          },
          {
            ref: "file_name",
            showIf: 'fn_selector == "upload_file"',
            component: "InterpolationInput",
            componentProps: {
              label: "File name"
            }
          }
        ]
      },
      runtime: (cbk) => __async(this, null, function* () {
        const fn = cbk.getElementValue("fn_selector");
        function getFolderDriveItem(siteId, listId, folderId) {
          return __async(this, null, function* () {
            return yield cbk.apiClient.msgraph.api(
              `/sites/${siteId}/lists/${listId}/items/${folderId}/driveItem`
            ).get();
          });
        }
        function getDriveId(siteId, listId) {
          return __async(this, null, function* () {
            const { id } = yield cbk.apiClient.msgraph.api(`/sites/${siteId}/lists/${listId}/drive`).get();
            return id;
          });
        }
        if (fn === "upload_file") {
          const siteId = cbk.getElementValue("site_id");
          const driveId = cbk.getElementValue("drive_id");
          const folderId = cbk.getElementValue("folder_id");
          const originalName = cbk.getElementValue("file_name");
          const fileVar = cbk.getElementValue("file");
          const files = cbk.getVariable(fileVar);
          const [file] = JSON.parse(files);
          const fileExtension = file.fileName.slice((file.fileName.lastIndexOf(".") - 1 >>> 0) + 2);
          const fileName = encodeURIComponent(`${originalName}${fileExtension ? "." + fileExtension : ""}` || file.fileName);
          const buffer = yield cbk.downloadFile(file.fileKey);
          const size = Buffer.byteLength(buffer);
          const { FileUpload, OneDriveLargeFileUploadTask } = cbk.library.msgraph;
          const fileObject = new FileUpload(buffer, fileName, size);
          const msgraphClient = cbk.apiClient.msgraph;
          let uploadSessionURL;
          if (folderId) {
            const { id, parentReference } = yield getFolderDriveItem(
              siteId,
              driveId,
              folderId
            );
            uploadSessionURL = `/drives/${parentReference.driveId}/items/${id}:/${fileName}:/createUploadSession`;
          } else {
            const id = yield getDriveId(siteId, driveId);
            uploadSessionURL = `/drives/${id}/root/children:/${fileName}:/createUploadSession`;
          }
          const options = {
            fileName,
            rangeSize: 1024 * 1024,
            uploadSessionURL,
            conflictBehavior: "rename"
          };
          const uploadTask = yield OneDriveLargeFileUploadTask.createTaskWithFileObject(
            msgraphClient,
            fileObject,
            options
          );
          const up = yield uploadTask.upload();
          cbk.log("msgraph: DONE upload file to one drive", up);
        } else if (fn === "create_folder") {
          const siteId = cbk.getElementValue("site_id");
          const driveId = cbk.getElementValue("drive_id");
          const folderId = cbk.getElementValue("folder_id");
          const folderName = cbk.getElementValue("folder_name");
          let dirUrl;
          if (folderId) {
            const { id, parentReference } = yield getFolderDriveItem(
              siteId,
              driveId,
              folderId
            );
            dirUrl = `/drives/${parentReference.driveId}/items/${id}/children`;
          } else {
            const id = yield getDriveId(siteId, driveId);
            dirUrl = `/drives/${id}/root/children`;
          }
          const response = yield cbk.apiClient.msgraph.api(dirUrl).post({
            name: folderName,
            folder: {},
            "@microsoft.graph.conflictBehavior": "replace"
          });
          cbk.log("msgraph: DONE create folder", response);
        }
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateCalc,
  SetVariable,
  Sharepoint
});
