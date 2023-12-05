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
  Sharepoint: () => Sharepoint,
  Ticket: () => Ticket,
  Triage: () => Triage
});
module.exports = __toCommonJS(custom_block_kit_exports);

// blocks/date-calc/date-options.ts
var dateOptions = [
  { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
  { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
  { label: "YYYY/MM/DD", value: "YYYY/MM/DD" },
  { label: "D MMMM YYYY", value: "D MMMM YYYY" },
  { label: "D MMM YYYY", value: "D MMM YYYY" },
  { label: "MMMM D, YYYY", value: "MMMM D, YYYY" },
  { label: "MMM D, YYYY", value: "MMM D, YYYY" },
  { label: "DD/MM/YYYY HH:mm", value: "DD/MM/YYYY HH:mm" },
  { label: "YYYY/MM/DD HH:mm", value: "YYYY/MM/DD HH:mm" },
  { label: "MM/DD/YYYY HH:mm", value: "MM/DD/YYYY HH:mm" },
  { label: "D MMMM YYYY HH:mm", value: "D MMMM YYYY HH:mm" },
  { label: "MMMM D, YYYY HH:mm", value: "MMMM D, YYYY HH:mm" },
  { label: "MMM D, YYYY HH:mm", value: "MMM D, YYYY HH:mm" },
  { label: "D MMM YYYY HH:mm", value: "D MMM YYYY HH:mm" }
];

// blocks/date-calc/date-calc.ts
var DateCalc = class {
  constructor() {
    this.schema = {
      key: "DATE_CALC",
      name: "Date Calc",
      color: "#EAAB46",
      blockType: "functional",
      toggleName: "feature.cbk.datecalc",
      icon: "M9.5 2 L 9 2 L 9 1 L 8 1 L 8 2 L 4 2 L 4 1 L 3 1 L 3 2 L 2.5 2 C 1.945312 2 1.503906 2.449219 1.503906 3 L 1.5 10 C 1.5 10.550781 1.945312 11 2.5 11 L 9.5 11 C 10.050781 11 10.5 10.550781 10.5 10 L 10.5 3 C 10.5 2.449219 10.050781 2 9.5 2 Z M 9.5 10 L 2.5 10 L 2.5 5 L 9.5 5 Z M 4.5 7 L 3.5 7 L 3.5 6 L 4.5 6 Z M 6.5 7 L 5.5 7 L 5.5 6 L 6.5 6 Z M 8.5 7 L 7.5 7 L 7.5 6 L 8.5 6 Z M 4.5 9 L 3.5 9 L 3.5 8 L 4.5 8 Z M 6.5 9 L 5.5 9 L 5.5 8 L 6.5 8 Z M 8.5 9 L 7.5 9 L 7.5 8 L 8.5 8 Z M 8.5 9",
      stencil: {
        group: "FUNCTIONS",
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
                  placeholder: "Insert number",
                  variableAutoComplete: true
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
                  placeholder: "Insert number",
                  variableAutoComplete: true
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
              }
            ]
          },
          {
            ref: "datecalc_save_add_sub",
            component: "Group",
            componentProps: {
              label: "Save resulting new datetime variable as"
            },
            showIf: "fn_selector == 'subtract' || fn_selector == 'add'",
            children: [
              {
                ref: "new_datetime_variable",
                component: "TextInput",
                componentProps: {
                  label: "Name of the new DATE variable",
                  placeholder: "Variable name",
                  format: "format_date"
                },
                validators: [
                  {
                    method: "isVariableUnique",
                    message: "This variable already exists!"
                  },
                  {
                    method: "matches",
                    value: "^\\S*$",
                    message: "Variable name cannot contain spaces"
                  },
                  {
                    method: "max",
                    value: "50",
                    message: "This must be less than 50 characters"
                  },
                  {
                    method: "required",
                    message: "Must enter a variable name"
                  }
                ],
                output: {
                  as: "DATE"
                }
              },
              {
                ref: "format_date",
                component: "SelectInput",
                componentProps: {
                  label: "Format Date as",
                  placeholder: "YYYY/MM/DD",
                  options: dateOptions
                }
              }
            ]
          },
          {
            ref: "datecalc_difference_group",
            component: "Group",
            componentProps: {
              label: "Find the difference between two dates (B - A)"
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
                    },
                    validators: [
                      {
                        method: "required",
                        message: "Please select a unit of time"
                      }
                    ]
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
                        method: "matches",
                        value: "^\\S*$",
                        message: "Variable name cannot contain spaces"
                      },
                      {
                        method: "matches",
                        value: "^[a-zA-Z]",
                        message: "Variable name must start with an alphabet"
                      },
                      {
                        method: "matches",
                        value: "^[a-zA-Z0-9_]+$",
                        message: "Variable name is alphanumeric characters and _ only"
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
            const fromDate = cbk.getVariable(
              cbk.getElementValue("to_date_variable")
            );
            if (!fromDate)
              break;
            const utc = moment(fromDate).parseZone().utcOffset();
            const date = moment(fromDate).utcOffset(utc);
            const unit = cbk.getElementValue("unit");
            const period = cbk.getElementValue("time_period");
            const toDate = date[fn](period, unit).format();
            cbk.setOutput(newDateVarName, toDate);
            break;
          case "difference":
            const newDiffVarName = cbk.getElementValue("new_diff_variable");
            const dateA = cbk.getVariable(cbk.getElementValue("diff_date_a"));
            const dateB = cbk.getVariable(cbk.getElementValue("diff_date_b"));
            if (!dateA || !dateB)
              break;
            const timez = moment(dateA).parseZone().utcOffset();
            const diffUnit = cbk.getElementValue("diff_time_unit");
            const difference = moment(dateB).utcOffset(timez).diff(moment(dateA).utcOffset(timez), diffUnit);
            cbk.setOutput(newDiffVarName, difference);
            break;
        }
      })
    };
  }
};

// blocks/set-variable/timezones.json
var timezones_default = [
  {
    value: "Dateline Standard Time",
    abbr: "DST",
    offset: -12,
    isdst: false,
    text: "(UTC-12:00) International Date Line West",
    utc: ["Etc/GMT+12"]
  },
  {
    value: "UTC-11",
    abbr: "U",
    offset: -11,
    isdst: false,
    text: "(UTC-11:00) Coordinated Universal Time-11",
    utc: ["Etc/GMT+11", "Pacific/Midway", "Pacific/Niue", "Pacific/Pago_Pago"]
  },
  {
    value: "Hawaiian Standard Time",
    abbr: "HST",
    offset: -10,
    isdst: false,
    text: "(UTC-10:00) Hawaii",
    utc: [
      "Etc/GMT+10",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Rarotonga",
      "Pacific/Tahiti"
    ]
  },
  {
    value: "Alaskan Standard Time",
    abbr: "AKDT",
    offset: -8,
    isdst: true,
    text: "(UTC-09:00) Alaska",
    utc: [
      "America/Anchorage",
      "America/Juneau",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ]
  },
  {
    value: "Pacific Standard Time (Mexico)",
    abbr: "PDT",
    offset: -7,
    isdst: true,
    text: "(UTC-08:00) Baja California",
    utc: ["America/Santa_Isabel"]
  },
  {
    value: "Pacific Daylight Time",
    abbr: "PDT",
    offset: -7,
    isdst: true,
    text: "(UTC-07:00) Pacific Daylight Time (US & Canada)",
    utc: ["America/Los_Angeles", "America/Tijuana", "America/Vancouver"]
  },
  {
    value: "Pacific Standard Time",
    abbr: "PST",
    offset: -8,
    isdst: false,
    text: "(UTC-08:00) Pacific Standard Time (US & Canada)",
    utc: [
      "America/Los_Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "PST8PDT"
    ]
  },
  {
    value: "US Mountain Standard Time",
    abbr: "UMST",
    offset: -7,
    isdst: false,
    text: "(UTC-07:00) Arizona",
    utc: [
      "America/Creston",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Hermosillo",
      "America/Phoenix",
      "America/Whitehorse",
      "Etc/GMT+7"
    ]
  },
  {
    value: "Mountain Standard Time (Mexico)",
    abbr: "MDT",
    offset: -6,
    isdst: true,
    text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    utc: ["America/Chihuahua", "America/Mazatlan"]
  },
  {
    value: "Mountain Standard Time",
    abbr: "MDT",
    offset: -6,
    isdst: true,
    text: "(UTC-07:00) Mountain Time (US & Canada)",
    utc: [
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife",
      "MST7MDT"
    ]
  },
  {
    value: "Central America Standard Time",
    abbr: "CAST",
    offset: -6,
    isdst: false,
    text: "(UTC-06:00) Central America",
    utc: [
      "America/Belize",
      "America/Costa_Rica",
      "America/El_Salvador",
      "America/Guatemala",
      "America/Managua",
      "America/Tegucigalpa",
      "Etc/GMT+6",
      "Pacific/Galapagos"
    ]
  },
  {
    value: "Central Standard Time",
    abbr: "CDT",
    offset: -5,
    isdst: true,
    text: "(UTC-06:00) Central Time (US & Canada)",
    utc: [
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Matamoros",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg",
      "CST6CDT"
    ]
  },
  {
    value: "Central Standard Time (Mexico)",
    abbr: "CDT",
    offset: -5,
    isdst: true,
    text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    utc: [
      "America/Bahia_Banderas",
      "America/Cancun",
      "America/Merida",
      "America/Mexico_City",
      "America/Monterrey"
    ]
  },
  {
    value: "Canada Central Standard Time",
    abbr: "CCST",
    offset: -6,
    isdst: false,
    text: "(UTC-06:00) Saskatchewan",
    utc: ["America/Regina", "America/Swift_Current"]
  },
  {
    value: "SA Pacific Standard Time",
    abbr: "SPST",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Bogota, Lima, Quito",
    utc: [
      "America/Bogota",
      "America/Cayman",
      "America/Coral_Harbour",
      "America/Eirunepe",
      "America/Guayaquil",
      "America/Jamaica",
      "America/Lima",
      "America/Panama",
      "America/Rio_Branco",
      "Etc/GMT+5"
    ]
  },
  {
    value: "Eastern Standard Time",
    abbr: "EST",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Eastern Time (US & Canada)",
    utc: [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto"
    ]
  },
  {
    value: "Eastern Daylight Time",
    abbr: "EDT",
    offset: -4,
    isdst: true,
    text: "(UTC-04:00) Eastern Daylight Time (US & Canada)",
    utc: [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto"
    ]
  },
  {
    value: "US Eastern Standard Time",
    abbr: "UEDT",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Indiana (East)",
    utc: [
      "America/Indiana/Marengo",
      "America/Indiana/Vevay",
      "America/Indianapolis"
    ]
  },
  {
    value: "Venezuela Standard Time",
    abbr: "VST",
    offset: -4.5,
    isdst: false,
    text: "(UTC-04:30) Caracas",
    utc: ["America/Caracas"]
  },
  {
    value: "Paraguay Standard Time",
    abbr: "PYT",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Asuncion",
    utc: ["America/Asuncion"]
  },
  {
    value: "Atlantic Standard Time",
    abbr: "ADT",
    offset: -3,
    isdst: true,
    text: "(UTC-04:00) Atlantic Time (Canada)",
    utc: [
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Halifax",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ]
  },
  {
    value: "Central Brazilian Standard Time",
    abbr: "CBST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Cuiaba",
    utc: ["America/Campo_Grande", "America/Cuiaba"]
  },
  {
    value: "SA Western Standard Time",
    abbr: "SWST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    utc: [
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Curacao",
      "America/Dominica",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guyana",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lower_Princes",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Montserrat",
      "America/Port_of_Spain",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Santo_Domingo",
      "America/St_Barthelemy",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Tortola",
      "Etc/GMT+4"
    ]
  },
  {
    value: "Pacific SA Standard Time",
    abbr: "PSST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Santiago",
    utc: ["America/Santiago", "Antarctica/Palmer"]
  },
  {
    value: "Newfoundland Standard Time",
    abbr: "NDT",
    offset: -2.5,
    isdst: true,
    text: "(UTC-03:30) Newfoundland",
    utc: ["America/St_Johns"]
  },
  {
    value: "E. South America Standard Time",
    abbr: "ESAST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Brasilia",
    utc: ["America/Sao_Paulo"]
  },
  {
    value: "Argentina Standard Time",
    abbr: "AST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Buenos Aires",
    utc: [
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Catamarca",
      "America/Argentina/Cordoba",
      "America/Argentina/Jujuy",
      "America/Argentina/La_Rioja",
      "America/Argentina/Mendoza",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Buenos_Aires",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza"
    ]
  },
  {
    value: "SA Eastern Standard Time",
    abbr: "SEST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Cayenne, Fortaleza",
    utc: [
      "America/Araguaina",
      "America/Belem",
      "America/Cayenne",
      "America/Fortaleza",
      "America/Maceio",
      "America/Paramaribo",
      "America/Recife",
      "America/Santarem",
      "Antarctica/Rothera",
      "Atlantic/Stanley",
      "Etc/GMT+3"
    ]
  },
  {
    value: "Greenland Standard Time",
    abbr: "GDT",
    offset: -3,
    isdst: true,
    text: "(UTC-03:00) Greenland",
    utc: ["America/Godthab"]
  },
  {
    value: "Montevideo Standard Time",
    abbr: "MST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Montevideo",
    utc: ["America/Montevideo"]
  },
  {
    value: "Bahia Standard Time",
    abbr: "BST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Salvador",
    utc: ["America/Bahia"]
  },
  {
    value: "UTC-02",
    abbr: "U",
    offset: -2,
    isdst: false,
    text: "(UTC-02:00) Coordinated Universal Time-02",
    utc: ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"]
  },
  {
    value: "Mid-Atlantic Standard Time",
    abbr: "MDT",
    offset: -1,
    isdst: true,
    text: "(UTC-02:00) Mid-Atlantic - Old",
    utc: []
  },
  {
    value: "Azores Standard Time",
    abbr: "ADT",
    offset: 0,
    isdst: true,
    text: "(UTC-01:00) Azores",
    utc: ["America/Scoresbysund", "Atlantic/Azores"]
  },
  {
    value: "Cape Verde Standard Time",
    abbr: "CVST",
    offset: -1,
    isdst: false,
    text: "(UTC-01:00) Cape Verde Is.",
    utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"]
  },
  {
    value: "Morocco Standard Time",
    abbr: "MDT",
    offset: 1,
    isdst: true,
    text: "(UTC) Casablanca",
    utc: ["Africa/Casablanca", "Africa/El_Aaiun"]
  },
  {
    value: "UTC",
    abbr: "UTC",
    offset: 0,
    isdst: false,
    text: "(UTC) Coordinated Universal Time",
    utc: ["America/Danmarkshavn", "Etc/GMT"]
  },
  {
    value: "GMT Standard Time",
    abbr: "GMT",
    offset: 0,
    isdst: false,
    text: "(UTC) Edinburgh, London",
    utc: [
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London"
    ]
  },
  {
    value: "British Summer Time",
    abbr: "BST",
    offset: 1,
    isdst: true,
    text: "(UTC+01:00) Edinburgh, London",
    utc: [
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London"
    ]
  },
  {
    value: "GMT Standard Time",
    abbr: "GDT",
    offset: 1,
    isdst: true,
    text: "(UTC) Dublin, Lisbon",
    utc: [
      "Atlantic/Canary",
      "Atlantic/Faeroe",
      "Atlantic/Madeira",
      "Europe/Dublin",
      "Europe/Lisbon"
    ]
  },
  {
    value: "Greenwich Standard Time",
    abbr: "GST",
    offset: 0,
    isdst: false,
    text: "(UTC) Monrovia, Reykjavik",
    utc: [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao_Tome",
      "Atlantic/Reykjavik",
      "Atlantic/St_Helena"
    ]
  },
  {
    value: "W. Europe Standard Time",
    abbr: "WEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    utc: [
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Berlin",
      "Europe/Busingen",
      "Europe/Gibraltar",
      "Europe/Luxembourg",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Stockholm",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Zurich"
    ]
  },
  {
    value: "Central Europe Standard Time",
    abbr: "CEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    utc: [
      "Europe/Belgrade",
      "Europe/Bratislava",
      "Europe/Budapest",
      "Europe/Ljubljana",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Tirane"
    ]
  },
  {
    value: "Romance Standard Time",
    abbr: "RDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    utc: [
      "Africa/Ceuta",
      "Europe/Brussels",
      "Europe/Copenhagen",
      "Europe/Madrid",
      "Europe/Paris"
    ]
  },
  {
    value: "Central European Standard Time",
    abbr: "CEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    utc: [
      "Europe/Sarajevo",
      "Europe/Skopje",
      "Europe/Warsaw",
      "Europe/Zagreb"
    ]
  },
  {
    value: "W. Central Africa Standard Time",
    abbr: "WCAST",
    offset: 1,
    isdst: false,
    text: "(UTC+01:00) West Central Africa",
    utc: [
      "Africa/Algiers",
      "Africa/Bangui",
      "Africa/Brazzaville",
      "Africa/Douala",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Luanda",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo",
      "Africa/Tunis",
      "Etc/GMT-1"
    ]
  },
  {
    value: "Namibia Standard Time",
    abbr: "NST",
    offset: 1,
    isdst: false,
    text: "(UTC+01:00) Windhoek",
    utc: ["Africa/Windhoek"]
  },
  {
    value: "GTB Standard Time",
    abbr: "GDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Athens, Bucharest",
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau"
    ]
  },
  {
    value: "Middle East Standard Time",
    abbr: "MEDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Beirut",
    utc: ["Asia/Beirut"]
  },
  {
    value: "Egypt Standard Time",
    abbr: "EST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Cairo",
    utc: ["Africa/Cairo"]
  },
  {
    value: "Syria Standard Time",
    abbr: "SDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Damascus",
    utc: ["Asia/Damascus"]
  },
  {
    value: "E. Europe Standard Time",
    abbr: "EEDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) E. Europe",
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Nicosia",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ]
  },
  {
    value: "South Africa Standard Time",
    abbr: "SAST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Harare, Pretoria",
    utc: [
      "Africa/Blantyre",
      "Africa/Bujumbura",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Kigali",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Etc/GMT-2"
    ]
  },
  {
    value: "FLE Standard Time",
    abbr: "FDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    utc: [
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ]
  },
  {
    value: "Turkey Standard Time",
    abbr: "TDT",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Istanbul",
    utc: ["Europe/Istanbul"]
  },
  {
    value: "Israel Standard Time",
    abbr: "JDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Jerusalem",
    utc: ["Asia/Jerusalem"]
  },
  {
    value: "Libya Standard Time",
    abbr: "LST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Tripoli",
    utc: ["Africa/Tripoli"]
  },
  {
    value: "Jordan Standard Time",
    abbr: "JST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Amman",
    utc: ["Asia/Amman"]
  },
  {
    value: "Arabic Standard Time",
    abbr: "AST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Baghdad",
    utc: ["Asia/Baghdad"]
  },
  {
    value: "Kaliningrad Standard Time",
    abbr: "KST",
    offset: 3,
    isdst: false,
    text: "(UTC+02:00) Kaliningrad",
    utc: ["Europe/Kaliningrad"]
  },
  {
    value: "Arab Standard Time",
    abbr: "AST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Kuwait, Riyadh",
    utc: [
      "Asia/Aden",
      "Asia/Bahrain",
      "Asia/Kuwait",
      "Asia/Qatar",
      "Asia/Riyadh"
    ]
  },
  {
    value: "E. Africa Standard Time",
    abbr: "EAST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Nairobi",
    utc: [
      "Africa/Addis_Ababa",
      "Africa/Asmera",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Mogadishu",
      "Africa/Nairobi",
      "Antarctica/Syowa",
      "Etc/GMT-3",
      "Indian/Antananarivo",
      "Indian/Comoro",
      "Indian/Mayotte"
    ]
  },
  {
    value: "Moscow Standard Time",
    abbr: "MSK",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
    utc: [
      "Europe/Kirov",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd",
      "Europe/Minsk"
    ]
  },
  {
    value: "Samara Time",
    abbr: "SAMT",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
    utc: ["Europe/Astrakhan", "Europe/Samara", "Europe/Ulyanovsk"]
  },
  {
    value: "Iran Standard Time",
    abbr: "IDT",
    offset: 4.5,
    isdst: true,
    text: "(UTC+03:30) Tehran",
    utc: ["Asia/Tehran"]
  },
  {
    value: "Arabian Standard Time",
    abbr: "AST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Abu Dhabi, Muscat",
    utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"]
  },
  {
    value: "Azerbaijan Standard Time",
    abbr: "ADT",
    offset: 5,
    isdst: true,
    text: "(UTC+04:00) Baku",
    utc: ["Asia/Baku"]
  },
  {
    value: "Mauritius Standard Time",
    abbr: "MST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Port Louis",
    utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"]
  },
  {
    value: "Georgian Standard Time",
    abbr: "GET",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Tbilisi",
    utc: ["Asia/Tbilisi"]
  },
  {
    value: "Caucasus Standard Time",
    abbr: "CST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Yerevan",
    utc: ["Asia/Yerevan"]
  },
  {
    value: "Afghanistan Standard Time",
    abbr: "AST",
    offset: 4.5,
    isdst: false,
    text: "(UTC+04:30) Kabul",
    utc: ["Asia/Kabul"]
  },
  {
    value: "West Asia Standard Time",
    abbr: "WAST",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Ashgabat, Tashkent",
    utc: [
      "Antarctica/Mawson",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Dushanbe",
      "Asia/Oral",
      "Asia/Samarkand",
      "Asia/Tashkent",
      "Etc/GMT-5",
      "Indian/Kerguelen",
      "Indian/Maldives"
    ]
  },
  {
    value: "Yekaterinburg Time",
    abbr: "YEKT",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Yekaterinburg",
    utc: ["Asia/Yekaterinburg"]
  },
  {
    value: "Pakistan Standard Time",
    abbr: "PKT",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Islamabad, Karachi",
    utc: ["Asia/Karachi"]
  },
  {
    value: "India Standard Time",
    abbr: "IST",
    offset: 5.5,
    isdst: false,
    text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    utc: ["Asia/Kolkata", "Asia/Calcutta"]
  },
  {
    value: "Sri Lanka Standard Time",
    abbr: "SLST",
    offset: 5.5,
    isdst: false,
    text: "(UTC+05:30) Sri Jayawardenepura",
    utc: ["Asia/Colombo"]
  },
  {
    value: "Nepal Standard Time",
    abbr: "NST",
    offset: 5.75,
    isdst: false,
    text: "(UTC+05:45) Kathmandu",
    utc: ["Asia/Kathmandu"]
  },
  {
    value: "Central Asia Standard Time",
    abbr: "CAST",
    offset: 6,
    isdst: false,
    text: "(UTC+06:00) Nur-Sultan (Astana)",
    utc: [
      "Antarctica/Vostok",
      "Asia/Almaty",
      "Asia/Bishkek",
      "Asia/Qyzylorda",
      "Asia/Urumqi",
      "Etc/GMT-6",
      "Indian/Chagos"
    ]
  },
  {
    value: "Bangladesh Standard Time",
    abbr: "BST",
    offset: 6,
    isdst: false,
    text: "(UTC+06:00) Dhaka",
    utc: ["Asia/Dhaka", "Asia/Thimphu"]
  },
  {
    value: "Myanmar Standard Time",
    abbr: "MST",
    offset: 6.5,
    isdst: false,
    text: "(UTC+06:30) Yangon (Rangoon)",
    utc: ["Asia/Rangoon", "Indian/Cocos"]
  },
  {
    value: "SE Asia Standard Time",
    abbr: "SAST",
    offset: 7,
    isdst: false,
    text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    utc: [
      "Antarctica/Davis",
      "Asia/Bangkok",
      "Asia/Hovd",
      "Asia/Jakarta",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Saigon",
      "Asia/Vientiane",
      "Etc/GMT-7",
      "Indian/Christmas"
    ]
  },
  {
    value: "N. Central Asia Standard Time",
    abbr: "NCAST",
    offset: 7,
    isdst: false,
    text: "(UTC+07:00) Novosibirsk",
    utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"]
  },
  {
    value: "China Standard Time",
    abbr: "CST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"]
  },
  {
    value: "North Asia Standard Time",
    abbr: "NAST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Krasnoyarsk",
    utc: ["Asia/Krasnoyarsk"]
  },
  {
    value: "Singapore Standard Time",
    abbr: "MPST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Kuala Lumpur, Singapore",
    utc: [
      "Asia/Brunei",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Singapore",
      "Etc/GMT-8"
    ]
  },
  {
    value: "W. Australia Standard Time",
    abbr: "WAST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Perth",
    utc: ["Antarctica/Casey", "Australia/Perth"]
  },
  {
    value: "Taipei Standard Time",
    abbr: "TST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Taipei",
    utc: ["Asia/Taipei"]
  },
  {
    value: "Ulaanbaatar Standard Time",
    abbr: "UST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Ulaanbaatar",
    utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"]
  },
  {
    value: "North Asia East Standard Time",
    abbr: "NAEST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Irkutsk",
    utc: ["Asia/Irkutsk"]
  },
  {
    value: "Japan Standard Time",
    abbr: "JST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
    utc: [
      "Asia/Dili",
      "Asia/Jayapura",
      "Asia/Tokyo",
      "Etc/GMT-9",
      "Pacific/Palau"
    ]
  },
  {
    value: "Korea Standard Time",
    abbr: "KST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Seoul",
    utc: ["Asia/Pyongyang", "Asia/Seoul"]
  },
  {
    value: "Cen. Australia Standard Time",
    abbr: "CAST",
    offset: 9.5,
    isdst: false,
    text: "(UTC+09:30) Adelaide",
    utc: ["Australia/Adelaide", "Australia/Broken_Hill"]
  },
  {
    value: "AUS Central Standard Time",
    abbr: "ACST",
    offset: 9.5,
    isdst: false,
    text: "(UTC+09:30) Darwin",
    utc: ["Australia/Darwin"]
  },
  {
    value: "E. Australia Standard Time",
    abbr: "EAST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Brisbane",
    utc: ["Australia/Brisbane", "Australia/Lindeman"]
  },
  {
    value: "AUS Eastern Standard Time",
    abbr: "AEST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Canberra, Melbourne, Sydney",
    utc: ["Australia/Melbourne", "Australia/Sydney"]
  },
  {
    value: "West Pacific Standard Time",
    abbr: "WPST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Guam, Port Moresby",
    utc: [
      "Antarctica/DumontDUrville",
      "Etc/GMT-10",
      "Pacific/Guam",
      "Pacific/Port_Moresby",
      "Pacific/Saipan",
      "Pacific/Truk"
    ]
  },
  {
    value: "Tasmania Standard Time",
    abbr: "TST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Hobart",
    utc: ["Australia/Currie", "Australia/Hobart"]
  },
  {
    value: "Yakutsk Standard Time",
    abbr: "YST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Yakutsk",
    utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"]
  },
  {
    value: "Central Pacific Standard Time",
    abbr: "CPST",
    offset: 11,
    isdst: false,
    text: "(UTC+11:00) Solomon Is., New Caledonia",
    utc: [
      "Antarctica/Macquarie",
      "Etc/GMT-11",
      "Pacific/Efate",
      "Pacific/Guadalcanal",
      "Pacific/Kosrae",
      "Pacific/Noumea",
      "Pacific/Ponape"
    ]
  },
  {
    value: "Vladivostok Standard Time",
    abbr: "VST",
    offset: 11,
    isdst: false,
    text: "(UTC+11:00) Vladivostok",
    utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"]
  },
  {
    value: "New Zealand Standard Time",
    abbr: "NZST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Auckland, Wellington",
    utc: ["Antarctica/McMurdo", "Pacific/Auckland"]
  },
  {
    value: "UTC+12",
    abbr: "U",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Coordinated Universal Time+12",
    utc: [
      "Etc/GMT-12",
      "Pacific/Funafuti",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Nauru",
      "Pacific/Tarawa",
      "Pacific/Wake",
      "Pacific/Wallis"
    ]
  },
  {
    value: "Fiji Standard Time",
    abbr: "FST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Fiji",
    utc: ["Pacific/Fiji"]
  },
  {
    value: "Magadan Standard Time",
    abbr: "MST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Magadan",
    utc: [
      "Asia/Anadyr",
      "Asia/Kamchatka",
      "Asia/Magadan",
      "Asia/Srednekolymsk"
    ]
  },
  {
    value: "Kamchatka Standard Time",
    abbr: "KDT",
    offset: 13,
    isdst: true,
    text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
    utc: ["Asia/Kamchatka"]
  },
  {
    value: "Tonga Standard Time",
    abbr: "TST",
    offset: 13,
    isdst: false,
    text: "(UTC+13:00) Nuku'alofa",
    utc: [
      "Etc/GMT-13",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Tongatapu"
    ]
  },
  {
    value: "Samoa Standard Time",
    abbr: "SST",
    offset: 13,
    isdst: false,
    text: "(UTC+13:00) Samoa",
    utc: ["Pacific/Apia"]
  }
];

// blocks/set-variable/set-variable.ts
var SetVariable = class {
  constructor() {
    this.schema = {
      key: "SET_VARIABLE",
      name: "Set Var",
      color: "#EAAB46",
      blockType: "functional",
      toggleName: "feature.cbk.setvariable",
      icon: "M10 2H2C1.445 2 1 2.45 1 3V9C1 9.55 1.445 10 2 10H10C10.55 10 11 9.55 11 9V3C11 2.45 10.555 2 10 2ZM10 9H2V4H10V9ZM9 8.5H6V7.5H9V8.5ZM3.75 8.5 3.045 7.795 4.335 6.5 3.04 5.205 3.75 4.5 5.75 6.5 3.75 8.5Z",
      stencil: {
        group: "FUNCTIONS",
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
                },
                { label: "Format existing LIST variable", value: "format" }
                // { label: "Format existing DATE variable", value: "formatDate" },
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
                    { label: "Text", value: "TXT" },
                    { label: "Number", value: "NUM" },
                    { label: "Datetime", value: "DATE" },
                    { label: "File", value: "FILE" },
                    { label: "Doc", value: "DOC" },
                    { label: "Checkbox", value: "CBX" },
                    { label: "Radio", value: "RAD" }
                  ]
                }
              },
              {
                ref: "variableName",
                component: "TextInput",
                componentProps: {
                  label: "Set name of variable as",
                  placeholder: "Enter variable name",
                  format: "clientTimezone",
                  optionsRef: "radioOptions"
                },
                validators: [
                  {
                    method: "isVariableUnique",
                    message: "Variable name already exists"
                  },
                  {
                    method: "matches",
                    value: "^\\S*$",
                    message: "Variable name cannot contain spaces"
                  },
                  {
                    method: "matches",
                    value: "^[a-zA-Z]",
                    message: "Variable name must start with an alphabet"
                  },
                  {
                    method: "matches",
                    value: "^[a-zA-Z0-9_]+$",
                    message: "Variable name is alphanumeric characters and _ only"
                  },
                  {
                    method: "max",
                    value: "50",
                    message: "This must be less than 50 characters"
                  }
                ],
                output: {
                  ref: "variableType"
                }
              },
              {
                ref: "variableValue",
                component: "TextInput",
                showIf: 'variableType == "TXT"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "numVariableValue",
                component: "NumberInput",
                showIf: 'variableType == "NUM"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
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
              },
              {
                ref: "setvar_doc_var_group",
                component: "Group",
                componentProps: {
                  label: "Select document template to use"
                },
                showIf: 'variableType == "DOC"',
                children: [
                  {
                    ref: "docTemplateType",
                    component: "RadioGroupInput",
                    componentProps: {
                      options: [
                        {
                          label: "New template",
                          value: "new_template"
                        },
                        {
                          label: "Existing document variable",
                          value: "existing_document_variable"
                        }
                      ],
                      whenChanged: (cbk) => {
                        cbk.setElementValue("docVariableValue", "");
                        cbk.setElementValue("existingDocVariableValue", "");
                      }
                    }
                  },
                  {
                    ref: "docVariableValue",
                    component: "DocInput",
                    showIf: 'docTemplateType == "new_template"',
                    componentProps: {
                      label: "Document Value",
                      placeholder: "Enter document value"
                    }
                  },
                  {
                    ref: "existingDocVariableValue",
                    component: "SelectInput",
                    showIf: 'docTemplateType == "existing_document_variable"',
                    componentProps: {
                      label: "Select doc variable",
                      options: "getOnlyDocVariables"
                    }
                  }
                ]
              },
              {
                ref: "checkboxVariableValue",
                component: "SelectInput",
                showIf: 'variableType == "CBX"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Select variable value",
                  options: [
                    {
                      label: "Checked",
                      value: "TRUE"
                    },
                    {
                      label: "Unchecked",
                      value: "FALSE"
                    }
                  ]
                }
              },
              {
                ref: "radio_variable_group",
                component: "Group",
                showIf: 'variableType == "RAD"',
                componentProps: {
                  label: "Add Radio Options"
                },
                children: [
                  {
                    ref: "radioVariableValue",
                    component: "SelectInput",
                    showIf: "!!radioOptions",
                    componentProps: {
                      label: "Select radio option",
                      options: (cbk) => __async(this, null, function* () {
                        let options = [];
                        const radioOptions = cbk.getElementValue(
                          "radioOptions"
                        );
                        if (radioOptions instanceof Array) {
                          options = radioOptions.filter((x) => x == null ? void 0 : x.option).map((x) => ({
                            label: x.option || "",
                            value: x.option || ""
                          }));
                        }
                        return options;
                      })
                    }
                  },
                  {
                    ref: "radioOptions",
                    component: "ListInput",
                    componentProps: {
                      label: "Add options to radio input",
                      addLabel: "Add Option",
                      inputComponent: {
                        ref: "option",
                        component: "TextInput",
                        componentProps: {
                          placeholder: "--None--",
                          includeEmptyErrorPlaceholder: false
                        }
                      },
                      whenChanged: (cbk, value) => {
                        const radioVariableValue = cbk.getElementValue("radioVariableValue");
                        if (value === radioVariableValue) {
                          cbk.setElementValue("radioVariableValue", "");
                        }
                      }
                    }
                  }
                ]
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
                ref: "update_variable_name",
                component: "SelectInput",
                componentProps: {
                  label: "Variable Name",
                  placeholder: "Select variable name",
                  options: "getExistingVariables"
                }
              },
              {
                ref: "update_value",
                component: "TextInput",
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "TXT"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "update_num",
                component: "NumberInput",
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "NUM"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "update_date",
                component: "DateTimeInput",
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "DATE"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "update_file",
                component: "FileInput",
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "FILE"',
                componentProps: {
                  label: "Variable Value",
                  placeholder: "Enter variable value"
                }
              },
              {
                ref: "update_doc_var_group",
                component: "Group",
                componentProps: {
                  label: "Select document template to use"
                },
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "DOC"',
                children: [
                  {
                    ref: "updateDocTemplateType",
                    component: "RadioGroupInput",
                    componentProps: {
                      options: [
                        {
                          label: "New template",
                          value: "new_template"
                        },
                        {
                          label: "Existing document variable",
                          value: "existing_document_variable"
                        }
                      ],
                      whenChanged: (cbk) => {
                        cbk.setElementValue("update_doc", "");
                        cbk.setElementValue("existing_update_doc", "");
                      }
                    }
                  },
                  {
                    ref: "update_doc",
                    component: "DocInput",
                    showIf: 'updateDocTemplateType == "new_template"',
                    componentProps: {
                      label: "Document Value",
                      placeholder: "Enter document value"
                    }
                  },
                  {
                    ref: "existing_update_doc",
                    component: "SelectInput",
                    showIf: 'updateDocTemplateType == "existing_document_variable"',
                    componentProps: {
                      label: "Select doc variable",
                      options: "getOnlyDocVariables"
                    }
                  }
                ]
              },
              {
                ref: "update_checkbox",
                component: "SelectInput",
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "CBX"',
                componentProps: {
                  label: "Checkbox Value",
                  placeholder: "Enter variable value",
                  options: [
                    {
                      label: "Checked",
                      value: "TRUE"
                    },
                    {
                      label: "Unchecked",
                      value: "FALSE"
                    }
                  ]
                }
              },
              {
                ref: "update_radio",
                component: "SelectInput",
                showIf: '(GET(VARS,update_variable_name)).fieldInputType == "RAD"',
                componentProps: {
                  label: "Radio Option Value",
                  placeholder: "Select Radio Option",
                  options: (cbk) => __async(this, null, function* () {
                    const selectedVariable = cbk.getElementValue(
                      "update_variable_name"
                    );
                    const radioOptions = cbk.getRadioOptions(selectedVariable);
                    return radioOptions.map((x) => ({
                      label: x,
                      value: x
                    }));
                  })
                }
              }
            ]
          },
          {
            ref: "setvar_format_list_group",
            component: "Group",
            componentProps: {
              label: "Format existing LIST variable"
            },
            showIf: 'fn_selector == "format"',
            children: [
              {
                ref: "selected_variable_name",
                component: "SelectInput",
                componentProps: {
                  label: "Selected Variable Name",
                  placeholder: "Select variable name",
                  options: "getFormattableListVariables"
                }
              },
              {
                ref: "override_variable",
                component: "SelectInput",
                componentProps: {
                  label: "Override Variable Value",
                  placeholder: "To override the list variable or not",
                  options: [
                    { label: "Yes", value: "true" },
                    { label: "No", value: "false" }
                  ]
                }
              },
              {
                ref: "new_variable_name",
                component: "TextInput",
                showIf: "override_variable == 'false'",
                componentProps: {
                  label: "New Formatted Variable Name",
                  placeholder: "Enter variable name"
                },
                validators: [
                  {
                    method: "isVariableUnique",
                    message: "Variable name already exists"
                  },
                  {
                    method: "matches",
                    value: "^\\S*$",
                    message: "Variable name cannot contain spaces"
                  },
                  {
                    method: "matches",
                    value: "^[a-zA-Z]",
                    message: "Variable name must start with an alphabet"
                  },
                  {
                    method: "matches",
                    value: "^[a-zA-Z0-9_]+$",
                    message: "Variable name is alphanumeric characters and _ only"
                  },
                  {
                    method: "max",
                    value: "50",
                    message: "This must be less than 50 characters"
                  }
                ],
                output: {
                  as: "LIST"
                }
              },
              {
                ref: "ending_suffix",
                component: "TextInput",
                componentProps: {
                  label: "Suffix to append to end of each list item",
                  placeholder: "Common suffix"
                }
              },
              {
                ref: "second_last_suffix",
                component: "TextInput",
                componentProps: {
                  label: "Suffix to append to the end of the second last list item",
                  placeholder: "Second last suffix"
                }
              },
              {
                ref: "last_suffix",
                component: "TextInput",
                componentProps: {
                  label: "Suffix to append to the end of the last list item",
                  placeholder: "Last Suffix"
                }
              },
              {
                ref: "concatenated_variable",
                component: "TextInput",
                componentProps: {
                  label: "Concatenated Variable Name",
                  placeholder: "Enter variable name, converts ['a','b'] to 'a, b'"
                },
                validators: [
                  {
                    method: "isVariableUnique",
                    message: "Variable name already exists"
                  },
                  {
                    method: "matches",
                    value: "^\\S*$",
                    message: "Variable name cannot contain spaces"
                  },
                  {
                    method: "max",
                    value: "50",
                    message: "This must be less than 50 characters"
                  }
                ],
                output: {
                  as: "TXT"
                }
              }
            ]
          },
          {
            ref: "setvar_format_date_group",
            component: "Group",
            componentProps: {
              label: "Format existing DATE variable"
            },
            showIf: 'fn_selector == "formatDate"',
            children: [
              {
                ref: "selected_date_variable_name",
                component: "SelectInput",
                componentProps: {
                  label: "Selected Variable Name",
                  placeholder: "Select variable name",
                  options: "getDateVariables"
                }
              },
              {
                ref: "timezones",
                component: "SelectInput",
                componentProps: {
                  label: "Timezone",
                  placeholder: "Select timezone",
                  options: timezones_default.map((x) => ({
                    label: x.text,
                    value: x.offset
                  })),
                  isSearchable: true
                }
              },
              {
                ref: "format_date",
                component: "SelectInput",
                componentProps: {
                  label: "Format Date as",
                  placeholder: "YYYY/MM/DD",
                  options: dateOptions
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
          update: "update",
          format: "format",
          formatDate: "formatDate"
        };
        const fn = cbk.getElementValue("fn_selector");
        cbk.log("FUNCTION TYPE", fn);
        switch (fnTypes[fn]) {
          case "create":
            const createVariable = cbk.getElementValue("variableName");
            const variableType = cbk.getElementValue("variableType");
            const datetimeSelection = cbk.getElementValue("datetimeSelection");
            let value = "";
            if (variableType === "DATE") {
              const curTime = datetimeSelection === "currentDate" ? moment().format() : cbk.getElementValue("datetimeVariableValue");
              const utc = moment(curTime).parseZone().utcOffset();
              value = moment(curTime).utcOffset(utc).format();
            } else if (variableType === "NUM") {
              value = cbk.getElementValue("numVariableValue");
            } else if (variableType === "FILE") {
              value = cbk.getElementValue("fileVariableValue");
            } else if (variableType === "DOC") {
              if (cbk.getElementValue("docTemplateType") === "new_template") {
                value = cbk.getElementValue("docVariableValue");
              } else {
                const docVar = cbk.getElementValue("existingDocVariableValue");
                value = cbk.getVariableDocValue(docVar);
              }
            } else if (variableType === "CBX") {
              value = cbk.getElementValue("checkboxVariableValue");
            } else if (variableType === "RAD") {
              value = cbk.getElementValue("radioVariableValue");
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
              if (cbk.getElementValue("updateDocTemplateType") === "new_template") {
                updated = cbk.getElementValue("update_doc");
              } else {
                const docVar = cbk.getElementValue("existing_update_doc");
                updated = cbk.getVariableDocValue(docVar);
              }
            } else if (updateVarType === "CBX") {
              updated = cbk.getElementValue("update_checkbox");
            } else if (updateVarType === "RAD") {
              updated = cbk.getElementValue("update_radio");
            } else {
              updated = cbk.getElementValue("update_value");
            }
            cbk.log("UPDATE VAR VALUE", updated);
            if (cbk.hasInput(updateVariable)) {
              cbk.overwriteInput(updateVariable, updated);
            } else {
              cbk.setOutput(updateVariable, updated);
            }
            break;
          case "format":
            const selectedVariable = cbk.getElementValue(
              "selected_variable_name"
            );
            const overrideVariable = cbk.getElementValue("override_variable");
            const newFormattedVariable = cbk.getElementValue("new_variable_name");
            const concatenatedVariable = cbk.getElementValue(
              "concatenated_variable"
            );
            const commonSuffix = cbk.getElementValue("ending_suffix");
            const secondLastSuffix = cbk.getElementValue("second_last_suffix");
            const lastSuffix = cbk.getElementValue("last_suffix");
            const listInfo = cbk.getVariable(selectedVariable);
            let concatenatedResult = "";
            const formatList = (list) => {
              if (!commonSuffix && !secondLastSuffix && !lastSuffix) {
                concatenatedResult = list.join("");
                return list;
              }
              if (list.length === 0) {
                concatenatedResult = "";
                return [];
              }
              if (list.length === 1) {
                concatenatedResult = `${list[0]}${lastSuffix}`;
                return [`${list[0]}${lastSuffix}`];
              }
              const formattedList2 = list.map((item, index) => {
                if (index === list.length - 1) {
                  concatenatedResult += list[index] + lastSuffix;
                  return `${item}${lastSuffix}`;
                } else if (index === list.length - 2) {
                  concatenatedResult += list[index] + (secondLastSuffix || commonSuffix);
                  return `${item}${secondLastSuffix || commonSuffix}`;
                } else {
                  concatenatedResult += list[index] + commonSuffix;
                  return `${item}${commonSuffix}`;
                }
              });
              return formattedList2;
            };
            const formattedList = formatList(listInfo);
            cbk.log("Pre-formatted List", listInfo);
            cbk.log("Formatted List", formattedList);
            cbk.log("Common Suffix", commonSuffix);
            cbk.log("Suffix for second last item", secondLastSuffix);
            cbk.log("Suffix for last item", lastSuffix);
            if (overrideVariable === "false") {
              cbk.log("Override is false, creating a new variable");
              cbk.setOutput(newFormattedVariable, formattedList);
            } else {
              cbk.log("Override is true, updating existing variable");
              cbk.setOutput(selectedVariable, formattedList);
            }
            if (concatenatedVariable) {
              cbk.log("Creating concatenated variable");
              cbk.setOutput(concatenatedVariable, concatenatedResult);
            }
            break;
          case "formatDate":
            const selectedDateVariableName = cbk.getElementValue(
              "selected_date_variable_name"
            );
            const timezone = cbk.getElementValue("timezones");
            const formatDate = cbk.getElementValue("format_date");
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
var SIGNED_REPORT_TYPE = "signed-report";
var Sharepoint = class {
  constructor() {
    this.schema = {
      key: "SHAREPOINT",
      name: "Sharepoint",
      color: "#71B22F",
      blockType: "functional",
      toggleName: "feature.cbk.sharepoint",
      icon: "M 11 6.625 C 11 6.972656 10.933594 7.296875 10.800781 7.601562 C 10.671875 7.898438 10.492188 8.164062 10.265625 8.390625 C 10.039062 8.617188 9.773438 8.796875 9.46875 8.929688 C 9.167969 9.058594 8.84375 9.125 8.5 9.125 C 8.285156 9.125 8.074219 9.097656 7.863281 9.046875 C 7.835938 9.320312 7.757812 9.578125 7.636719 9.816406 C 7.507812 10.054688 7.347656 10.261719 7.148438 10.441406 C 6.957031 10.617188 6.734375 10.753906 6.484375 10.851562 C 6.230469 10.949219 5.964844 11 5.691406 11 C 5.386719 11 5.101562 10.941406 4.835938 10.824219 C 4.570312 10.710938 4.339844 10.558594 4.140625 10.359375 C 3.941406 10.164062 3.789062 9.933594 3.675781 9.664062 C 3.558594 9.398438 3.5 9.113281 3.5 8.816406 L 3.5 8.65625 C 3.511719 8.605469 3.519531 8.554688 3.523438 8.5 L 1.414062 8.5 C 1.304688 8.5 1.207031 8.460938 1.121094 8.378906 C 1.039062 8.292969 1 8.195312 1 8.085938 L 1 3.914062 C 1 3.804688 1.039062 3.707031 1.121094 3.621094 C 1.207031 3.539062 1.304688 3.5 1.414062 3.5 L 2.890625 3.5 C 2.929688 3.148438 3.03125 2.8125 3.195312 2.5 C 3.355469 2.203125 3.5625 1.941406 3.816406 1.71875 C 4.066406 1.492188 4.351562 1.316406 4.671875 1.191406 C 4.988281 1.0625 5.328125 1 5.691406 1 C 6.078125 1 6.441406 1.074219 6.78125 1.21875 C 7.125 1.371094 7.421875 1.570312 7.675781 1.824219 C 7.929688 2.078125 8.128906 2.375 8.28125 2.71875 C 8.425781 3.058594 8.5 3.425781 8.5 3.816406 L 8.5 3.96875 C 8.5 4.019531 8.492188 4.070312 8.480469 4.125 C 8.828125 4.125 9.152344 4.191406 9.453125 4.320312 C 9.761719 4.449219 10.027344 4.628906 10.25 4.855469 C 10.488281 5.078125 10.671875 5.339844 10.800781 5.644531 C 10.933594 5.953125 11 6.277344 11 6.625 M 5.683594 1.625 C 5.414062 1.625 5.160156 1.671875 4.914062 1.769531 C 4.667969 1.863281 4.445312 1.992188 4.25 2.160156 C 4.0625 2.328125 3.90625 2.523438 3.773438 2.75 C 3.648438 2.984375 3.566406 3.234375 3.523438 3.5 L 5.585938 3.5 C 5.695312 3.5 5.792969 3.542969 5.878906 3.625 C 5.960938 3.707031 6 3.804688 6 3.914062 L 6 5.976562 L 6.089844 5.960938 C 6.148438 5.753906 6.230469 5.558594 6.339844 5.371094 C 6.445312 5.179688 6.578125 5.011719 6.734375 4.859375 C 6.886719 4.710938 7.058594 4.578125 7.25 4.464844 C 7.429688 4.355469 7.625 4.273438 7.835938 4.214844 C 7.863281 4.070312 7.875 3.9375 7.875 3.816406 C 7.875 3.511719 7.816406 3.226562 7.699219 2.960938 C 7.585938 2.695312 7.429688 2.464844 7.230469 2.269531 C 7.035156 2.074219 6.804688 1.917969 6.539062 1.800781 C 6.273438 1.683594 5.988281 1.625 5.683594 1.625 M 3.550781 7.625 C 3.699219 7.625 3.851562 7.609375 4 7.578125 C 4.140625 7.550781 4.265625 7.5 4.378906 7.425781 C 4.492188 7.355469 4.585938 7.261719 4.65625 7.144531 C 4.71875 7.023438 4.75 6.878906 4.75 6.703125 C 4.75 6.527344 4.714844 6.382812 4.648438 6.265625 C 4.578125 6.148438 4.484375 6.050781 4.375 5.96875 C 4.265625 5.894531 4.148438 5.828125 4.019531 5.78125 L 3.660156 5.636719 C 3.554688 5.589844 3.460938 5.546875 3.386719 5.5 C 3.3125 5.449219 3.273438 5.386719 3.273438 5.308594 C 3.273438 5.257812 3.296875 5.210938 3.335938 5.175781 C 3.375 5.140625 3.421875 5.117188 3.476562 5.101562 C 3.527344 5.078125 3.582031 5.0625 3.640625 5.054688 C 3.699219 5.050781 3.75 5.050781 3.789062 5.050781 C 3.953125 5.050781 4.101562 5.070312 4.230469 5.109375 C 4.355469 5.152344 4.488281 5.214844 4.625 5.300781 L 4.625 4.558594 C 4.542969 4.535156 4.46875 4.515625 4.40625 4.5 C 4.339844 4.484375 4.273438 4.46875 4.210938 4.460938 C 4.144531 4.449219 4.074219 4.441406 4 4.433594 C 3.933594 4.433594 3.859375 4.429688 3.773438 4.429688 C 3.632812 4.429688 3.484375 4.445312 3.335938 4.476562 C 3.183594 4.507812 3.046875 4.5625 2.925781 4.636719 C 2.808594 4.710938 2.710938 4.804688 2.628906 4.914062 C 2.554688 5.03125 2.515625 5.175781 2.515625 5.34375 C 2.515625 5.511719 2.550781 5.648438 2.625 5.75 C 2.699219 5.867188 2.789062 5.964844 2.898438 6.046875 C 3.011719 6.121094 3.125 6.191406 3.25 6.25 L 3.609375 6.394531 C 3.722656 6.441406 3.816406 6.488281 3.890625 6.539062 C 3.964844 6.59375 4 6.65625 4 6.730469 C 4 6.792969 3.980469 6.84375 3.945312 6.878906 C 3.910156 6.917969 3.867188 6.941406 3.816406 6.960938 C 3.773438 6.988281 3.71875 7 3.65625 7 L 3.5 7 C 3.304688 7 3.128906 6.96875 2.980469 6.910156 C 2.828125 6.84375 2.671875 6.757812 2.519531 6.648438 L 2.519531 7.429688 C 2.851562 7.558594 3.191406 7.625 3.550781 7.625 M 5.683594 10.375 C 5.894531 10.375 6.097656 10.332031 6.289062 10.25 C 6.480469 10.171875 6.648438 10.058594 6.789062 9.921875 C 6.929688 9.777344 7.042969 9.609375 7.125 9.421875 C 7.207031 9.230469 7.25 9.027344 7.25 8.816406 C 7.25 8.628906 7.21875 8.449219 7.15625 8.28125 C 7.09375 8.109375 7.011719 7.957031 6.898438 7.824219 C 6.785156 7.6875 6.652344 7.574219 6.5 7.480469 C 6.351562 7.386719 6.183594 7.320312 6 7.28125 L 6 8.085938 C 6 8.195312 5.960938 8.292969 5.878906 8.378906 C 5.792969 8.460938 5.695312 8.5 5.585938 8.5 L 4.15625 8.5 C 4.136719 8.601562 4.125 8.707031 4.125 8.816406 C 4.125 9.027344 4.167969 9.230469 4.25 9.421875 C 4.328125 9.609375 4.441406 9.777344 4.578125 9.921875 C 4.722656 10.058594 4.890625 10.171875 5.078125 10.25 C 5.269531 10.332031 5.472656 10.375 5.683594 10.375 M 8.5 8.5 C 8.757812 8.5 9 8.453125 9.226562 8.355469 C 9.453125 8.257812 9.65625 8.125 9.824219 7.949219 C 9.996094 7.78125 10.128906 7.582031 10.230469 7.355469 C 10.328125 7.128906 10.375 6.886719 10.375 6.625 C 10.375 6.375 10.328125 6.132812 10.230469 5.898438 C 10.128906 5.671875 9.996094 5.46875 9.824219 5.300781 C 9.65625 5.128906 9.453125 4.996094 9.226562 4.894531 C 9 4.796875 8.757812 4.75 8.5 4.75 C 8.242188 4.75 8 4.800781 7.773438 4.898438 C 7.546875 5 7.351562 5.136719 7.179688 5.304688 C 7.011719 5.476562 6.875 5.671875 6.773438 5.898438 C 6.675781 6.132812 6.625 6.375 6.625 6.625 L 6.625 6.730469 L 6.636719 6.839844 C 6.789062 6.914062 6.929688 7.003906 7.058594 7.109375 C 7.1875 7.214844 7.304688 7.335938 7.410156 7.464844 C 7.511719 7.597656 7.597656 7.742188 7.671875 7.894531 C 7.738281 8.046875 7.792969 8.207031 7.828125 8.371094 C 8.050781 8.457031 8.273438 8.5 8.5 8.5 Z M 8.5 8.5",
      stencil: {
        group: "INTEGRATIONS",
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
            ref: "connection_id",
            component: "SelectInput",
            componentProps: {
              label: "Connection",
              placeholder: "Select a connection",
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/sharepoint/overview"
                );
                return response ? response.map(({ connectionId, name, email }) => ({
                  value: connectionId,
                  label: `${name} (${email})`
                })) : [];
              }),
              whenChanged: (cbk) => {
                cbk.setElementValue("site_id", "");
                cbk.setElementValue("drive_id", "");
                cbk.setElementValue("folder_id", "");
              }
            },
            validators: [
              {
                method: "required",
                message: "Please select a connection"
              }
            ]
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
            showIf: "!!connection_id",
            component: "SelectInput",
            componentProps: {
              label: "Select Site",
              placeholder: "Select site",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                const response = yield cbk.api.get(
                  "/public/integrations/sharepoint/sites",
                  { connectionId: cbk.getElementValue("connection_id") }
                );
                return response ? response.map(({ id, displayName }) => ({
                  value: id,
                  label: displayName
                })).sort(sortOptions) : [];
              }),
              whenChanged: (cbk, value) => {
                cbk.setElementValue("drive_id", "");
              }
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
            showIf: "!!connection_id && !!site_id",
            component: "SelectInput",
            componentProps: {
              label: "Select Drive",
              placeholder: "Select drive",
              isSearchable: true,
              options: (cbk) => __async(this, null, function* () {
                try {
                  const response = yield cbk.api.get(
                    "/public/integrations/sharepoint/drives",
                    {
                      siteId: cbk.getElementValue("site_id"),
                      connectionId: cbk.getElementValue("connection_id")
                    }
                  );
                  return response ? response.map(({ id, name }) => ({
                    value: id,
                    label: name
                  })).sort(sortOptions) : [];
                } catch (e) {
                  return [];
                }
              }),
              whenChanged: (cbk) => {
                cbk.setElementValue("folder_id", "");
              }
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
            showIf: "!!connection_id && !!site_id && !!drive_id",
            component: "SelectInput",
            componentProps: {
              label: "Select Folder",
              placeholder: "Select folder",
              isSearchable: true,
              options: (cbk, optionState) => __async(this, null, function* () {
                try {
                  const response = yield cbk.api.get(
                    "/public/integrations/sharepoint/folders",
                    {
                      connectionId: cbk.getElementValue("connection_id"),
                      siteId: cbk.getElementValue("site_id"),
                      driveId: cbk.getElementValue("drive_id"),
                      searchTerm: optionState == null ? void 0 : optionState.searchTerm,
                      itemId: optionState == null ? void 0 : optionState.selectedValue
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
                } catch (e) {
                  return [];
                }
              }),
              variableAutoComplete: true
            }
          },
          {
            ref: "folder_name",
            showIf: 'fn_selector == "create_folder"',
            component: "TextInput",
            componentProps: {
              label: "Folder name",
              variableAutoComplete: true
            },
            validators: [
              {
                method: "required",
                message: "Please enter the folder name"
              }
            ]
          },
          {
            ref: "folder_var",
            showIf: 'fn_selector == "create_folder"',
            component: "TextInput",
            componentProps: {
              label: "Save new folder path as",
              variableAutoComplete: true,
              placeholder: "Variable name"
            },
            validators: [
              {
                method: "required",
                message: "Please enter the variable name"
              }
            ],
            output: {
              as: "TXT"
            }
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
            ref: "file_types",
            showIf: (cbk) => {
              if (cbk.getElementValue("fn_selector") === "upload_file") {
                if (cbk.getVariableType(cbk.getElementValue("file")) === "DOC") {
                  return true;
                }
              }
              return false;
            },
            component: "CheckboxGroupInput",
            componentProps: {
              label: "Upload the following file types if available",
              options: [
                { value: "docx", label: "DOCX", defaultChecked: true },
                { value: "pdf", label: "PDF", defaultChecked: true },
                {
                  value: SIGNED_REPORT_TYPE,
                  label: "E-Signed",
                  defaultChecked: true
                }
              ]
            },
            validators: [
              {
                method: "minTruthyObjectValues",
                value: "1",
                message: "Please select at least one file type"
              }
            ]
          },
          {
            ref: "prefix_name",
            showIf: 'fn_selector == "upload_file"',
            component: "TextInput",
            componentProps: {
              label: "Prefix Name",
              variableAutoComplete: true
            }
          }
        ]
      },
      runtime: (cbk) => __async(this, null, function* () {
        var _a, _b;
        const fn = cbk.getElementValue("fn_selector");
        const msgraphClient = yield cbk.apiClient.msgraph();
        const excludedChars = /[<>:"/\\|?*%#]/g;
        function getFolderDriveItem(siteId, listId, folderId) {
          return __async(this, null, function* () {
            return yield msgraphClient.api(`/sites/${siteId}/lists/${listId}/items/${folderId}/driveItem`).get();
          });
        }
        function getDriveId(siteId, listId) {
          return __async(this, null, function* () {
            const { id } = yield msgraphClient.api(`/sites/${siteId}/lists/${listId}/drive`).get();
            return id;
          });
        }
        function getDriveFromPath(siteID, path) {
          return __async(this, null, function* () {
            const { id } = yield msgraphClient.api(`/sites/${siteID}/drive/root:/${path}`).get();
            return id;
          });
        }
        function isFolderVariable(folderId) {
          return isNaN(Number(folderId));
        }
        function isFileTypeSelected(fileType, fileExtension) {
          const fileTypes = cbk.getVariableType(cbk.getElementValue("file")) === "DOC" && cbk.getElementValue("file_types");
          if (fileTypes && Object.keys(fileTypes)) {
            const checkedValues = Object.entries(fileTypes).filter(([_, checked]) => checked).map(([value]) => value);
            if (fileType === SIGNED_REPORT_TYPE)
              return checkedValues.includes(SIGNED_REPORT_TYPE);
            return checkedValues.includes(fileExtension);
          }
          return true;
        }
        function isPDFInDocx(file) {
          return file.fileType === "report" && file.fileName.match(/\.pdf\.docx$/i);
        }
        if (fn === "upload_file") {
          const siteId = cbk.getElementValue("site_id");
          const driveId = cbk.getElementValue("drive_id");
          const folderId = cbk.getElementValue("folder_id");
          const prefixName = (_a = cbk.getElementValue("prefix_name")) == null ? void 0 : _a.replace(excludedChars, "");
          const fileVar = cbk.getElementValue("file");
          const files = cbk.getVariable(fileVar);
          cbk.log("sharepoint: Initiating upload files to sharepoint");
          const parsedFiles = files ? JSON.parse(files) : [];
          cbk.log("files: ", parsedFiles);
          yield Promise.all(
            parsedFiles.map((file) => __async(this, null, function* () {
              cbk.log("upload: Enter()");
              cbk.log(`upload: file: ${JSON.stringify(file)}`);
              const fileParts = file.fileName.replace(excludedChars, "").split(".");
              const fileNameWithoutPrefix = fileParts[0];
              const fileExtension = fileParts[fileParts.length - 1];
              if (isPDFInDocx(file)) {
                cbk.log(`upload: skipped because file type is .pdf.docx`);
                return;
              }
              if (!isFileTypeSelected(file.fileType, fileExtension)) {
                cbk.log(
                  `upload: skipped because file type ${fileExtension} not selected`
                );
                return;
              }
              cbk.log("upload: file extension", fileExtension);
              cbk.log("upload: fileNameWithoutPrefix: ", fileNameWithoutPrefix);
              const fileName = prefixName ? `${prefixName}${fileNameWithoutPrefix}.${fileExtension}` : `${fileNameWithoutPrefix}.${fileExtension}`;
              const encodedFileName = encodeURIComponent(fileName);
              cbk.log(`upload: fileName: ${fileName}`);
              const buffer = yield cbk.downloadFile(file.fileKey);
              const size = Buffer.byteLength(buffer);
              const { FileUpload, OneDriveLargeFileUploadTask } = cbk.library.msgraph;
              const fileObject = new FileUpload(buffer, fileName, size);
              cbk.log("upload: fileObject", fileObject);
              let uploadSessionURL;
              if (folderId && !isNaN(Number(folderId))) {
                const { id, parentReference } = yield getFolderDriveItem(
                  siteId,
                  driveId,
                  folderId
                );
                uploadSessionURL = `/drives/${parentReference.driveId}/items/${id}:/${encodedFileName}:/createUploadSession`;
              } else {
                const id = yield getDriveId(siteId, driveId);
                uploadSessionURL = folderId && isFolderVariable(folderId) ? `/drives/${id}/root:/${encodeURI(
                  folderId
                )}/${encodedFileName}:/createUploadSession` : `/drives/${id}/root/children:/${encodedFileName}:/createUploadSession`;
              }
              cbk.log("upload: uploadSessionURL", uploadSessionURL);
              const options = {
                fileName,
                rangeSize: 1024 * 1024,
                uploadSessionURL,
                conflictBehavior: "rename"
              };
              cbk.log("upload: create upload task", options);
              const uploadTask = yield OneDriveLargeFileUploadTask.createTaskWithFileObject(
                msgraphClient,
                fileObject,
                options
              );
              cbk.log("upload: upload task created", uploadTask);
              const up = yield uploadTask.upload();
              cbk.log("upload: DONE upload file to one drive", up);
            }))
          );
          cbk.log("sharepoint: upload files done");
        } else if (fn === "create_folder") {
          const siteId = cbk.getElementValue("site_id");
          const driveId = cbk.getElementValue("drive_id");
          const folderId = cbk.getElementValue("folder_id");
          const folderName = cbk.getElementValue("folder_name").replace(excludedChars, "");
          const folderVar = cbk.getElementValue("folder_var");
          let dirUrl;
          if (folderId && !isFolderVariable(folderId)) {
            const { id, parentReference } = yield getFolderDriveItem(
              siteId,
              driveId,
              folderId
            );
            dirUrl = `/drives/${parentReference.driveId}/items/${id}/children`;
          } else {
            if (folderId && isNaN(Number(folderId))) {
              const id = yield getDriveFromPath(siteId, encodeURI(folderId));
              dirUrl = `/sites/${siteId}/drive/items/${id}/children`;
            } else {
              const id = yield getDriveId(siteId, driveId);
              dirUrl = `/drives/${id}/root/children`;
            }
          }
          const response = yield msgraphClient.api(dirUrl).post({
            name: folderName,
            folder: {},
            "@microsoft.graph.conflictBehavior": "replace"
          });
          cbk.log("msgraph: DONE create folder", response);
          const folderPath = ((_b = response == null ? void 0 : response.parentReference) == null ? void 0 : _b.path.split("root:/")[1]) || "";
          cbk.setOutput(folderVar, `${folderPath}/${folderName}`);
        }
      })
    };
  }
};

// blocks/triage/classify.ts
function categorizeInput(cbk, categories, input, confidence, fallbackCategory) {
  return __async(this, null, function* () {
    const categoriesFormatted = categories.map((category) => {
      return `- "${category.label}": ${category.description}`;
    }).join("\n");
    const prompt = `
    You are an AI that triages inbound requests. To get to the right outcome, you think through step by step the confidence that a request falls within each of the provided categories and include your reasoning in your response. You only respond in the following JSON format - your response includes likelihoods for all categories provided below. Your response should be a single JSON array.

    {

    category:string,

    confidence:float, // 2 dp

    reason: string // up to 200 characters

    }[]

    

    Categories (in format "label": description):

    ${categoriesFormatted}
    


    Request: "${input}"
    `;
    try {
      const data = {
        model: "gpt-3.5-turbo",
        temperature: 0,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      };
      const openAiClient = yield cbk.apiClient.openai();
      const response = yield openAiClient.completions(data);
      const responseJson = response.data;
      const output = responseJson.choices[0].message.content;
      const outputJson = JSON.parse(output);
      let highestLikelihoodCategory = {
        category: "",
        confidence: 0,
        reason: ""
      };
      for (let i = 0; i < outputJson.length; i++) {
        const category = outputJson[i];
        if (category.confidence > highestLikelihoodCategory.confidence && category.confidence > confidence) {
          highestLikelihoodCategory.confidence = category.confidence;
          highestLikelihoodCategory.category = category.category;
          highestLikelihoodCategory.reason = category.reason;
        }
      }
      var outputCategory = highestLikelihoodCategory;
      if (highestLikelihoodCategory.category === "") {
        outputCategory = {
          category: fallbackCategory,
          confidence: 0,
          reason: "No category met the confidence threshold"
        };
      }
      return outputCategory;
    } catch (error) {
      console.error("Error:", error);
    }
  });
}

// blocks/triage/triage.ts
var Triage = class {
  constructor() {
    this.schema = {
      key: "TRIAGE",
      name: "Triage",
      color: "#EAAB46",
      blockType: "functional",
      toggleName: "feature.cbk.triage",
      icon: "M 4.5 9.375 L 7 11.875 C 7.070312 11.945312 7.164062 11.984375 7.265625 11.984375 C 7.3125 11.984375 7.363281 11.976562 7.410156 11.953125 C 7.546875 11.894531 7.636719 11.761719 7.640625 11.609375 L 7.640625 4.90625 L 11.890625 0.640625 C 11.996094 0.535156 12.027344 0.371094 11.96875 0.234375 C 11.914062 0.09375 11.777344 0 11.625 0 L 0.375 0 C 0.222656 0 0.0859375 0.09375 0.03125 0.234375 C -0.0273438 0.371094 0.00390625 0.535156 0.109375 0.640625 L 4.375 4.90625 L 4.375 9.125 C 4.382812 9.21875 4.429688 9.308594 4.5 9.375 Z M 1.277344 0.75 L 10.722656 0.75 L 6.972656 4.5 C 6.898438 4.570312 6.859375 4.667969 6.859375 4.765625 L 6.859375 10.722656 L 5.109375 8.96875 L 5.109375 4.75 C 5.109375 4.652344 5.070312 4.554688 5 4.484375 Z M 1.277344 0.75 ",
      stencil: {
        group: "FUNCTIONS",
        // TODO maintain consistent grouping
        fontSize: 12
      },
      editor: {
        elements: [
          {
            ref: "inputVariable",
            component: "SelectInput",
            componentProps: {
              label: "Variable to categorise",
              placeholder: "Select variable name",
              options: "getExistingVariables"
            },
            validators: [
              {
                method: "required",
                message: "Please select a variable"
              }
            ]
          },
          {
            ref: "categories",
            component: "KeyValueInput",
            componentProps: {
              label: "Categories",
              placeholder: "Enter categories"
            }
          },
          {
            ref: "outputVariableName",
            component: "TextInput",
            componentProps: {
              label: "Output category variable name",
              placeholder: "Output Variable"
            },
            validators: [
              {
                method: "isVariableUnique",
                message: "Variable name already exists"
              },
              {
                method: "matches",
                value: "^\\S*$",
                message: "Variable name cannot contain spaces"
              },
              {
                method: "matches",
                value: "^[a-zA-Z]",
                message: "Variable name must start with an alphabet"
              },
              {
                method: "matches",
                value: "^[a-zA-Z0-9_]+$",
                message: "Variable name is alphanumeric characters and _ only"
              },
              {
                method: "required",
                message: "Please enter an output variable name"
              }
            ],
            output: {
              as: "TXT"
            }
          },
          {
            ref: "confidence",
            label: "Confidence",
            component: "NumberInput",
            componentProps: {
              label: "Confidence",
              placeholder: "Enter the AI confidence required"
            },
            validators: [
              {
                method: "min",
                value: "0",
                message: "The threshold must be a positive number"
              },
              {
                method: "max",
                value: "1",
                message: "The threshold must be less than or equal to 1"
              }
            ]
          },
          {
            ref: "fallbackCategory",
            component: "TextInput",
            componentProps: {
              label: "Fallback Category",
              placeholder: "Enter the fallback category"
            }
          }
        ]
      },
      runtime: (cbk) => __async(this, null, function* () {
        const formCategories = cbk.getElementValue("categories");
        const input = cbk.library.getVariable(
          cbk.getElementValue("inputVariable")
        );
        const confidence = parseFloat(cbk.getElementValue("confidence")) || 0.5;
        const outputVariableName = cbk.getElementValue("outputVariableName");
        const fallbackCategory = cbk.getElementValue("fallbackCategory") || "Catchall";
        const stringified = JSON.stringify(formCategories);
        const categories = JSON.parse(stringified).map(
          (category) => {
            return {
              label: category.id,
              description: category.value
            };
          }
        );
        const result = yield categorizeInput(
          cbk,
          categories,
          input,
          confidence,
          fallbackCategory
        );
        const formatResult = result == null ? void 0 : result.category;
        cbk.setOutput(outputVariableName, formatResult);
      })
    };
  }
};

// blocks/ticket/ticket.ts
var Ticket = class {
  constructor() {
    this.schema = {
      key: "TICKET",
      name: "ticket",
      color: "#857EC9",
      blockType: "functional",
      toggleName: "feature.cbk.ticket",
      icon: "M10.86,6.37L5.63,1.14h0c-.31-.31-.81-.32-1.13,0,0,0,0,0,0,0L1.14,4.49c-.15,.14-.24,.34-.24,.55,0,.22,.08,.43,.24,.59l5.22,5.22c.14,.15,.34,.24,.55,.24h.02c.21,0,.42-.09,.57-.24l.72-.72c.16-.16,.18-.41,.04-.59-.27-.37-.23-.88,.09-1.2,.32-.32,.83-.36,1.2-.08,.18,.13,.43,.11,.59-.04l.71-.71c.15-.14,.24-.34,.24-.55,0-.22-.08-.43-.24-.59Zm-7.96,.46l-.5-.5,.92-.91,.5,.5-.92,.91Zm1.5-1.5l-.5-.5,.92-.92,.5,.5-.92,.92Zm1.51-1.5l-.5-.5,.91-.92,.5,.5-.91,.92Z",
      stencil: {
        group: "CONNECTORS",
        fontSize: 12
      },
      editor: {
        elements: [
          {
            ref: "ticket_general_group",
            component: "Group",
            componentProps: {
              label: "General"
            },
            children: [
              {
                ref: "block_description",
                component: "BlockDescription",
                componentProps: {
                  label: "Block Description",
                  placeholder: "Enter a description for this block"
                }
              },
              {
                ref: "board_id",
                component: "SelectInput",
                componentProps: {
                  label: "Select board*",
                  placeholder: "Select a board",
                  isSearchable: true,
                  options: (cbk) => __async(this, null, function* () {
                    const response = yield cbk.api.get("/ticketing/boards");
                    return (response == null ? void 0 : response.result) ? response.result.map(
                      ({ id, name }) => ({
                        value: id,
                        label: `${name}`
                      })
                    ) : [];
                  }),
                  whenChanged: (cbk) => {
                    cbk.setElementValue("fn_selector", "");
                    cbk.setElementValue("ticket_layout_id", "");
                  }
                },
                validators: [
                  {
                    method: "required",
                    message: "Please select a board"
                  }
                ]
              }
            ]
          },
          {
            ref: "ticket_board_connector_group",
            showIf: "!!board_id",
            component: "Group",
            componentProps: {
              label: "Board connector"
            },
            children: [
              {
                ref: "fn_selector",
                component: "SelectInput",
                componentProps: {
                  label: "Function",
                  placeholder: "Select a function",
                  options: [
                    {
                      label: "Create new ticket",
                      value: "create_new_ticket"
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
                ref: "ticket_layout_id",
                component: "SelectInput",
                componentProps: {
                  label: "Ticket layout",
                  placeholder: "Select ticket layout",
                  isSearchable: true,
                  options: (cbk) => __async(this, null, function* () {
                    var _a, _b;
                    const response = yield cbk.api.get(
                      "/ticketing/ticket-layouts?offset=0&limit=100000&status=live"
                    );
                    return ((_b = (_a = response == null ? void 0 : response.result) == null ? void 0 : _a.payload) == null ? void 0 : _b.data) ? response.result.payload.data.map(
                      ({ id, name }) => ({
                        value: id,
                        label: `${name}`
                      })
                    ) : [];
                  }),
                  whenChanged: (cbk) => {
                    cbk.setElementValue("ticketing_layout_field_selector", "");
                  }
                },
                validators: [
                  {
                    method: "required",
                    message: "Please select a ticket layout"
                  }
                ]
              }
            ]
          },
          {
            ref: "create_new_ticket_group",
            showIf: "fn_selector == 'create_new_ticket'",
            component: "Group",
            componentProps: {
              label: "Create new ticket"
            },
            children: [
              {
                ref: "ticketing_layout_field_selector",
                component: "KeyValueListInput",
                showIf: "!!ticket_layout_id",
                componentProps: {
                  label: "Select Field",
                  placeholder: "--None--",
                  keyValueComponents: (cbk) => __async(this, null, function* () {
                    var _a, _b;
                    const layoutId = cbk.getElementValue("ticket_layout_id");
                    const allWorkflowVars = cbk.getAllVars();
                    const response = yield cbk.api.get(
                      `/ticketing/ticket-layouts/${layoutId}`
                    );
                    const ticketingWorkflowVarMapping = {
                      USER: ["USER"],
                      SHORT_TXT: ["TXT", "PARA"],
                      LONG_TXT: ["TXT", "PARA"],
                      NUM: ["NUM", "SLDR"],
                      SEL: ["SEL", "RAD", "CBX", "ACT"],
                      MULTI_SEL: ["LIST", "LP_SIZE", "LP_IND"],
                      UPLOAD: ["FILE", "DOC"],
                      DATE_TIME: ["DATE"]
                    };
                    return response ? (_b = (_a = response == null ? void 0 : response.result) == null ? void 0 : _a.fields) == null ? void 0 : _b.map((v) => {
                      var _a2;
                      const mapping = ticketingWorkflowVarMapping[v.fieldType];
                      let filteredVars = allWorkflowVars.filter(
                        (workflowVar) => !mapping || (mapping == null ? void 0 : mapping.includes(workflowVar.type)) || // for single select field, we allow COMP variable
                        v.fieldType === "SEL" && /^COMP\d+/.test(workflowVar.label)
                      );
                      return {
                        left: {
                          ref: "value",
                          component: "SelectInput",
                          componentProps: {
                            options: filteredVars,
                            allowUnselect: !((_a2 = v.metadata) == null ? void 0 : _a2.isReadOnly)
                          }
                        },
                        right: {
                          ref: "id",
                          component: "TextValueDisplay",
                          componentProps: {
                            readOnly: true,
                            value: v.id,
                            displayText: v.name,
                            type: v.fieldType
                          }
                        }
                      };
                    }) : [];
                  })
                }
              }
            ]
          },
          {
            ref: "ticket_add_subject_group",
            showIf: "fn_selector == 'create_new_ticket'",
            component: "Group",
            componentProps: {
              label: "Add Subject",
              icon: "M11.2502 1.49935C11.2502 1.03911 11.6233 0.666015 12.0835 0.666016L14.1644 0.666019C14.1652 0.666017 14.166 0.666016 14.1668 0.666016C14.1676 0.666016 14.1685 0.666017 14.1693 0.666019L16.2502 0.666023C16.7104 0.666023 17.0835 1.03912 17.0835 1.49936C17.0835 1.95959 16.7104 2.33269 16.2502 2.33269L15.0002 2.33269V3.99935L15.6989 3.99935C16.1382 3.99933 16.5172 3.99932 16.8294 4.02482C17.1588 4.05174 17.4865 4.11117 17.8018 4.27183C18.2722 4.51152 18.6547 4.89397 18.8943 5.36437C19.055 5.67969 19.1144 6.00737 19.1414 6.33683C19.1669 6.64896 19.1668 7.02793 19.1668 7.46721V10.5315C19.1668 10.9708 19.1669 11.3497 19.1414 11.6619C19.1144 11.9913 19.055 12.319 18.8943 12.6343C18.6547 13.1047 18.2722 13.4872 17.8018 13.7269C17.4865 13.8875 17.1588 13.947 16.8294 13.9739C16.5172 13.9994 16.1382 13.9994 15.6989 13.9993H15.0002V15.666L16.2502 15.666C16.7104 15.666 17.0835 16.0391 17.0835 16.4994C17.0835 16.9596 16.7104 17.3327 16.2502 17.3327L12.0835 17.3327C11.6233 17.3327 11.2502 16.9596 11.2502 16.4993C11.2502 16.0391 11.6233 15.666 12.0835 15.666L13.3335 15.666V13.167C13.3335 13.1667 13.3335 13.1664 13.3335 13.166C13.3335 13.1657 13.3335 13.1653 13.3335 13.165L13.3335 4.83323C13.3335 4.83305 13.3335 4.83341 13.3335 4.83323C13.3335 4.83305 13.3335 4.83232 13.3335 4.83213V2.33268L12.0835 2.33268C11.6233 2.33268 11.2502 1.95958 11.2502 1.49935ZM15.0002 5.66602V12.3327H15.6668C16.1473 12.3327 16.4575 12.332 16.6936 12.3127C16.92 12.2942 17.004 12.2628 17.0452 12.2419C17.202 12.162 17.3294 12.0345 17.4093 11.8777C17.4303 11.8365 17.4617 11.7525 17.4802 11.5262C17.4995 11.29 17.5002 10.9798 17.5002 10.4993V7.49935C17.5002 7.01889 17.4995 6.70866 17.4802 6.47255C17.4617 6.24616 17.4303 6.16223 17.4093 6.12102C17.3294 5.96422 17.202 5.83674 17.0452 5.75684C17.004 5.73585 16.92 5.70445 16.6936 5.68596C16.4575 5.66666 16.1473 5.66602 15.6668 5.66602H15.0002ZM4.30138 3.99935L10.8335 3.99935C11.2937 3.99935 11.6668 4.37245 11.6668 4.83268C11.6668 5.29292 11.2937 5.66602 10.8335 5.66602H4.3335C3.85304 5.66602 3.54281 5.66666 3.30669 5.68596C3.08031 5.70445 2.99638 5.73585 2.95517 5.75684C2.79837 5.83674 2.67089 5.96422 2.59099 6.12102C2.57 6.16223 2.5386 6.24616 2.5201 6.47255C2.50081 6.70866 2.50016 7.01889 2.50016 7.49935V10.4993C2.50016 10.9798 2.50081 11.29 2.5201 11.5262C2.5386 11.7525 2.57 11.8365 2.59099 11.8777C2.67089 12.0345 2.79837 12.162 2.95517 12.2419C2.99638 12.2628 3.08031 12.2942 3.30669 12.3127C3.54281 12.332 3.85304 12.3327 4.3335 12.3327H10.8335C11.2937 12.3327 11.6668 12.7058 11.6668 13.166C11.6668 13.6263 11.2937 13.9993 10.8335 13.9993H4.30139C3.8621 13.9994 3.48312 13.9994 3.17097 13.9739C2.84152 13.947 2.51384 13.8875 2.19852 13.7269C1.72812 13.4872 1.34566 13.1047 1.10598 12.6343C0.94532 12.319 0.88589 11.9913 0.858972 11.6619C0.833469 11.3497 0.833482 10.9708 0.833497 10.5315V7.46723C0.833482 7.02794 0.833469 6.64897 0.858972 6.33683C0.88589 6.00737 0.94532 5.67969 1.10598 5.36437C1.34566 4.89397 1.72812 4.51152 2.19852 4.27183C2.51384 4.11117 2.84152 4.05174 3.17097 4.02482C3.48312 3.99932 3.86209 3.99933 4.30138 3.99935Z"
            },
            children: [
              {
                ref: "subject_variable",
                component: "SelectInput",
                componentProps: {
                  label: "Add subject into a ticket*",
                  placeholder: "--None--",
                  options: "getTicketingEmailSubjectVariables"
                },
                validators: [
                  {
                    method: "required",
                    message: "Please add a subject"
                  }
                ]
              }
            ]
          },
          {
            ref: "ticket_add_messages_group",
            showIf: "fn_selector == 'create_new_ticket'",
            component: "Group",
            componentProps: {
              label: "Add Messages",
              icon: "M3.88873 3.33268C3.74138 3.33268 3.60008 3.39121 3.49589 3.4954C3.3917 3.59959 3.33317 3.7409 3.33317 3.88824V12.9875L4.68836 11.6323C4.84464 11.476 5.0566 11.3882 5.27761 11.3882H7.49984C7.96007 11.3882 8.33317 11.7613 8.33317 12.2216C8.33317 12.6818 7.96007 13.0549 7.49984 13.0549H5.62279L3.08909 15.5886C2.85076 15.8269 2.49233 15.8982 2.18093 15.7692C1.86954 15.6403 1.6665 15.3364 1.6665 14.9993V3.88824C1.6665 3.29887 1.90063 2.73364 2.31738 2.31689C2.73413 1.90014 3.29936 1.66602 3.88873 1.66602H13.6109C14.2003 1.66602 14.7655 1.90014 15.1823 2.31689C15.599 2.73364 15.8332 3.29887 15.8332 3.88824V7.49935C15.8332 7.95959 15.4601 8.33268 14.9998 8.33268C14.5396 8.33268 14.1665 7.95959 14.1665 7.49935V3.88824C14.1665 3.7409 14.108 3.59959 14.0038 3.4954C13.8996 3.39121 13.7583 3.33268 13.6109 3.33268H3.88873ZM16.3891 8.33268C16.4627 8.33268 16.5334 8.36195 16.5855 8.41404C16.6376 8.46614 16.6668 8.53679 16.6668 8.61046V15.4875L15.8672 14.6879C15.7109 14.5316 15.499 14.4438 15.2779 14.4438H8.61127C8.5376 14.4438 8.46695 14.4145 8.41485 14.3624C8.36276 14.3103 8.3335 14.2397 8.3335 14.166V8.61046C8.3335 8.53679 8.36276 8.46613 8.41485 8.41404C8.46695 8.36195 8.5376 8.33268 8.61127 8.33268H16.3891ZM17.764 7.23553C17.3993 6.87088 16.9047 6.66602 16.3891 6.66602H8.61127C8.09557 6.66602 7.601 6.87088 7.23634 7.23553C6.87169 7.60018 6.66683 8.09476 6.66683 8.61046V14.166C6.66683 14.6817 6.87169 15.1763 7.23634 15.5409C7.601 15.9056 8.09557 16.1105 8.61127 16.1105H14.9328L16.9109 18.0886C17.1492 18.3269 17.5077 18.3982 17.8191 18.2692C18.1305 18.1403 18.3335 17.8364 18.3335 17.4994V8.61046C18.3335 8.09476 18.1286 7.60018 17.764 7.23553ZM10.8332 11.6673C10.8332 12.1276 10.4601 12.5007 9.99984 12.5007C9.5396 12.5007 9.1665 12.1276 9.1665 11.6673C9.1665 11.2071 9.5396 10.834 9.99984 10.834C10.4601 10.834 10.8332 11.2071 10.8332 11.6673ZM13.3332 11.6673C13.3332 12.1276 12.9601 12.5007 12.4998 12.5007C12.0396 12.5007 11.6665 12.1276 11.6665 11.6673C11.6665 11.2071 12.0396 10.834 12.4998 10.834C12.9601 10.834 13.3332 11.2071 13.3332 11.6673ZM15.8332 11.6673C15.8332 12.1276 15.4601 12.5007 14.9998 12.5007C14.5396 12.5007 14.1665 12.1276 14.1665 11.6673C14.1665 11.2071 14.5396 10.834 14.9998 10.834C15.4601 10.834 15.8332 11.2071 15.8332 11.6673Z"
            },
            children: [
              {
                ref: "message_variable",
                component: "SelectInput",
                componentProps: {
                  label: "Add messages into ticket's conversation thread",
                  placeholder: "--None--",
                  options: "getTextVariables"
                }
              }
            ]
          },
          {
            ref: "ticket_add_attachments_group",
            showIf: "fn_selector == 'create_new_ticket'",
            component: "Group",
            componentProps: {
              label: "Add Attachments",
              icon: "M3.0013 11.5C3.46154 11.5 3.83464 11.8731 3.83464 12.3333V15.4444C3.83464 15.636 3.91073 15.8197 4.04617 15.9551C4.18161 16.0906 4.36531 16.1667 4.55686 16.1667H15.4457C15.6373 16.1667 15.821 16.0906 15.9564 15.9551C16.0919 15.8197 16.168 15.636 16.168 15.4444V12.3333C16.168 11.8731 16.5411 11.5 17.0013 11.5C17.4615 11.5 17.8346 11.8731 17.8346 12.3333V15.4444C17.8346 16.078 17.583 16.6856 17.1349 17.1336C16.6869 17.5816 16.0793 17.8333 15.4457 17.8333H4.55686C3.92328 17.8333 3.31566 17.5816 2.86766 17.1336C2.41965 16.6856 2.16797 16.078 2.16797 15.4444V12.3333C2.16797 11.8731 2.54106 11.5 3.0013 11.5ZM9.40982 2.41009C9.73526 2.08466 10.2629 2.08466 10.5883 2.41009L14.4772 6.29898C14.8027 6.62442 14.8027 7.15206 14.4772 7.47749C14.1518 7.80293 13.6241 7.80293 13.2987 7.47749L9.99908 4.17786L6.69944 7.47749C6.37401 7.80293 5.84637 7.80293 5.52093 7.47749C5.1955 7.15206 5.1955 6.62442 5.52093 6.29898L9.40982 2.41009ZM9.99984 2.16602C10.4601 2.16602 10.8332 2.53911 10.8332 2.99935V12.3327C10.8332 12.7929 10.4601 13.166 9.99984 13.166C9.5396 13.166 9.1665 12.7929 9.1665 12.3327V2.99935C9.1665 2.53911 9.5396 2.16602 9.99984 2.16602Z"
            },
            children: [
              {
                ref: "attachments",
                component: "ListInput",
                componentProps: {
                  label: "Add attachments into a ticket",
                  inputComponent: {
                    ref: "variable",
                    component: "SelectInput",
                    componentProps: {
                      placeholder: "--None--",
                      options: "getFileVariables"
                    }
                  }
                }
              }
            ]
          },
          {
            ref: "ticket_return_id",
            component: "TextInput",
            componentProps: {
              label: "Return ID",
              showPageRef: true
            },
            validators: [
              {
                method: "isVariableUnique",
                message: "This variable already exists!"
              },
              {
                method: "matches",
                value: "^\\S*$",
                message: "Variable name cannot contain spaces"
              },
              {
                method: "max",
                value: "50",
                message: "This must be less than 50 characters"
              },
              {
                method: "required",
                message: "Must enter a variable name"
              }
            ],
            output: {
              as: "TXT"
            }
          }
        ]
      },
      runtime: (cbk) => __async(this, null, function* () {
        var _a, _b, _c;
        try {
          const fn = cbk.getElementValue("fn_selector");
          if (fn === "create_new_ticket") {
            const boardId = cbk.getElementValue("board_id");
            const ticketLayoutId = cbk.getElementValue("ticket_layout_id");
            const subjectVariable = cbk.getElementValue("subject_variable");
            const messageVariable = cbk.getElementValue("message_variable");
            const subject = cbk.getVariable(subjectVariable);
            const message = (messageVariable == null ? void 0 : messageVariable.length) ? cbk.getVariable(messageVariable) : "";
            const attachments = JSON.parse(
              (_a = cbk.getElementValue("attachments")) != null ? _a : "[]"
            );
            const checkbox = yield cbk.apiClient.checkbox();
            const ticketingMessageService = checkbox.ticketingMessageService;
            const ticketingTicketService = checkbox.ticketingTicketService;
            const keyValueMappings = JSON.parse(
              (_b = cbk.getElementValue("ticketing_layout_field_selector")) != null ? _b : "[]"
            );
            const ticketFieldsRaw = {};
            for (const mapping of keyValueMappings) {
              if (mapping.id && mapping.value) {
                ticketFieldsRaw[mapping.id] = cbk.getVariable(mapping.value);
              }
            }
            const validatedTicketFields = yield ticketingTicketService.validateTicketFieldInputs(
              ticketLayoutId,
              ticketFieldsRaw
            );
            const isPreview = cbk.getIsPreview();
            const ticket = yield ticketingTicketService.createOneTicket(boardId, {
              layoutId: ticketLayoutId,
              subject: `${isPreview ? "{TEST}" : ""} ${subject}`,
              platformType: "workflow",
              fields: validatedTicketFields
            });
            let attachmentPayload = [];
            for (const attachment of attachments) {
              const uploadedFile = JSON.parse(
                (_c = cbk.getVariable(attachment.variable)) != null ? _c : "[]"
              );
              if (uploadedFile.length) {
                attachmentPayload.push({
                  fileName: uploadedFile[0].fileName,
                  s3Id: uploadedFile[0].fileKey,
                  ticketId: ticket.id
                });
              }
            }
            const user = cbk.getUser();
            yield ticketingMessageService.createTicketMessageWithAttachments(
              {
                platformType: "workflow",
                ticketId: ticket.id,
                body: message,
                senderId: user.userNumber
              },
              attachmentPayload
            );
            const ticketReturnIdVar = cbk.getElementValue("ticket_return_id");
            cbk.setOutput(ticketReturnIdVar, ticket.id);
          }
        } catch (e) {
          cbk.log("Error in runtime", e);
        }
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateCalc,
  SetVariable,
  Sharepoint,
  Ticket,
  Triage
});
