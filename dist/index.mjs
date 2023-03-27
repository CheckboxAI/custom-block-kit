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
    `
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
                    { label: "Text", value: "text" },
                    { label: "Number", value: "number" },
                    { label: "Datetime", value: "datetime" }
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
                ]
              },
              {
                ref: "variableValue",
                component: "TextInput",
                showIf: 'variableType == "text"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "numVariableValue",
                component: "NumberInput",
                showIf: 'variableType == "number"',
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
                showIf: 'variableType == "datetime"',
                componentProps: {
                  label: "Variable Type",
                  placeholder: "Select variable type",
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
                showIf: 'datetimeSelection == "customDate" && variableType == "datetime"',
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
      runtime: `
        const { moment } = cbk.library;
        const fn = cbk.getElementValue('fn_selector');
        const fnTypes = {
            create: 'create',
            update: 'update',
        };

        switch (fnTypes[fn]) {
            case 'create':
                const createVariable = cbk.getElementValue('variableName');
                const variableType = cbk.getElementValue('variableType');
                const datetimeSelection = cbk.getElementValue('datetimeSelection');
                let value = ''

                if (variableType === 'datetime') {
                    value = datetimeSelection === 'currentDate'
                        ? moment().format('YYYY-MM-DD')
                        : moment(cbk.getElementValue('datetimeVariableValue')).format('YYYY-MM-DD')
                } else if (variableType === 'number') {
                    value = cbk.getElementValue('numVariableValue');
                } else {
                    value = cbk.getElementValue('variableValue');
                }

                cbk.setOutput(createVariable, value);
                break;
            case 'update':
                const updateVariable = cbk.getElementValue('updateVariableName');
                const variableValue = cbk.getElementValue('variableValue');

                cbk.setOutput(updateVariable, variableValue);
                break;
            }
        `
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
      icon: "M10 2H2C1.445 2 1 2.45 1 3V9C1 9.55 1.445 10 2 10H10C10.55 10 11 9.55 11 9V3C11 2.45 10.555 2 10 2ZM10 9H2V4H10V9ZM9 8.5H6V7.5H9V8.5ZM3.75 8.5 3.045 7.795 4.335 6.5 3.04 5.205 3.75 4.5 5.75 6.5 3.75 8.5Z",
      stencil: {
        group: "CBK",
        fontSize: 12
      },
      editor: {
        elements: [
          {
            ref: "block_description",
            component: "InterpolationInput",
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
                { label: "Create Folder", value: "create" },
                {
                  label: "Upload file to folder",
                  value: "upload"
                }
              ]
            }
          },
          {
            ref: "siteId",
            component: "SelectInput",
            componentProps: {
              label: "Select Site",
              placeholder: "Select site",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/msgraph/sharepoint/sites"
                );
                return response ? response.map(({ id, name }) => ({ value: id, label: name })).sort(sortOptions) : [];
              })
            }
          },
          {
            ref: "driveId",
            showIf: "!!siteId",
            component: "SelectInput",
            componentProps: {
              label: "Select Drive",
              placeholder: "Select drive",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/msgraph/sharepoint/drives",
                  {
                    siteId: cbk.getElementValue("siteId")
                  }
                );
                return response ? response.map(({ id, name }) => ({ value: id, label: name })).sort(sortOptions) : [];
              })
            }
          },
          {
            ref: "folderId",
            showIf: "!!siteId && !!driveId",
            component: "SelectInput",
            componentProps: {
              label: "Select Folder",
              placeholder: "Select folder",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/msgraph/sharepoint/folders",
                  {
                    siteId: cbk.getElementValue("siteId"),
                    driveId: cbk.getElementValue("driveId")
                  }
                );
                return response ? response.map(({ id, name }) => ({ value: id, label: name })).sort(sortOptions) : [];
              })
            }
          }
        ]
      },
      runtime: `
        console.log('lalala')
    `
    };
  }
};
export {
  DateCalc,
  SetVariable,
  Sharepoint
};
