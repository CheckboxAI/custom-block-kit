import type { BaseSchema } from "../../base/base";

export class Ticket {
  schema: BaseSchema = {
    key: "TICKET",
    name: "ticket",
    color: "#857EC9",
    blockType: "functional",
    toggleName: "feature.cbk.ticket",
    icon: "M 5.566406 0.28125 C 5.191406 -0.09375 4.605469 -0.09375 4.230469 0.28125 L 0.289062 4.222656 C 0.105469 4.394531 0.00390625 4.625 0 4.871094 C -0.00390625 5.128906 0.0976562 5.382812 0.28125 5.566406 L 6.425781 11.710938 C 6.597656 11.890625 6.828125 11.996094 7.074219 12 L 7.097656 12 C 7.347656 12 7.589844 11.898438 7.769531 11.71875 L 8.613281 10.875 C 8.804688 10.683594 8.824219 10.386719 8.664062 10.175781 C 8.347656 9.757812 8.394531 9.152344 8.773438 8.761719 C 9.136719 8.386719 9.742188 8.34375 10.179688 8.667969 C 10.390625 8.824219 10.6875 8.800781 10.875 8.613281 L 11.710938 7.777344 C 11.890625 7.605469 11.996094 7.375 12 7.128906 C 12.003906 6.871094 11.902344 6.617188 11.71875 6.433594 Z M 6.953125 2.363281 L 6.363281 1.78125 L 5.296875 2.859375 L 5.886719 3.445312 Z M 2.847656 5.308594 L 3.429688 5.902344 L 2.347656 6.96875 L 1.765625 6.375 Z M 5.191406 4.125 L 4.605469 3.539062 L 3.523438 4.617188 L 4.113281 5.207031 Z M 5.191406 4.125",
    stencil: {
      group: "CONNECTORS",
      fontSize: 12,
    },
    editor: {
      elements: [
        {
          ref: "ticket_general_group",
          component: "Group",
          componentProps: {
            label: "General",
          },
          children: [
            {
              ref: "block_description",
              component: "BlockDescription",
              componentProps: {
                label: "Block Description",
                placeholder: "Enter a description for this block",
              },
            },
            {
              ref: "board_id",
              component: "SelectInput",
              componentProps: {
                label: "Select board*",
                placeholder: "Select a board",
                isSearchable: true,
                options: async (cbk) => {
                  const response = await cbk.api.get<any>("/ticketing/boards");
                  return response?.result
                    ? response.result.map(
                        ({ id, name }: { id: string; name: string }) => ({
                          value: id,
                          label: `${name}`,
                        })
                      )
                    : [];
                },
                whenChanged: (cbk) => {
                  cbk.setElementValue("fn_selector", "");
                  cbk.setElementValue("ticket_layout_id", "");
                },
              },
              validators: [
                {
                  method: "required",
                  message: "Please select a board",
                },
              ],
            },
          ],
        },
        {
          ref: "ticket_board_connector_group",
          showIf: "!!board_id",
          component: "Group",
          componentProps: {
            label: "Board connector",
          },
          children: [
            {
              ref: "fn_selector",
              component: "SelectInput",
              componentProps: {
                label: "Function",
                placeholder: "Select a function",
                options: [
                  { label: "Create new ticket", value: "create_new_ticket", defaultChecked: true },
                ],
              },
            },
            {
              ref: "ticket_layout_id",
              component: "SelectInput",
              componentProps: {
                label: "Ticket layout",
                placeholder: "Select ticket layout",
                isSearchable: true,
                options: async (cbk) => {
                  const response = await cbk.api.get<any>("/ticketing/ticket-layouts?offset=0&limit=100000&status=live");
                  return response?.result?.payload?.data
                    ? response.result.payload.data.map(
                        ({ id, name }: { id: string; name: string }) => ({
                          value: id,
                          label: `${name}`,
                        })
                      )
                    : [];
                },
                whenChanged: (cbk) => {
                  // TODO: reset variable to ticket field mapping
                  // cbk.setElementValue("var_to_ticket_field_mapping", "");
                },
              },
            },
          ]
        },
        {
          ref: "create_new_ticket_group",
          showIf: "fn_selector == 'create_new_ticket'",
          component: "Group",
          componentProps: {
            label: "Create new ticket",
          },
          children: [
            // TODO: DEV-11941 key value mapping component
            {
              ref: "var_to_ticket_field_mapping",
              component: "SelectInput",
              componentProps: {
                label: "Select one or more variable(s) you want to populate in the new ticket.",
                options: [],
              },
            },
          ],
        },
        {
          ref: "ticket_add_subject_group",
          showIf: "fn_selector == 'create_new_ticket'",
          component: "Group",
          componentProps: {
            label: "Add Subject",
            // TODO: need to have icon
          },
          children: [
            {
              ref: "subject_variable",
              component: "SelectInput",
              componentProps: {
                label: "Add subject into a ticket*",
                placeholder: "--None--",
                options: "getTextVariables",
              },
              validators: [
                {
                  method: "required",
                  message: "Please add a subject",
                },
              ],
            },
          ],
        },
        {
          ref: "ticket_add_messages_group",
          showIf: "fn_selector == 'create_new_ticket'",
          component: "Group",
          componentProps: {
            label: "Add Messages",
            // TODO: need to have icon
          },
          children: [
            {
              ref: "message_variable",
              component: "SelectInput",
              componentProps: {
                label: "Add messages into ticket's conversation thread",
                placeholder: "--None--",
                options: "getTextVariables",
              },
            },
          ],
        },
        {
          ref: "ticket_add_attachments_group",
          showIf: "fn_selector == 'create_new_ticket'",
          component: "Group",
          componentProps: {
            label: "Add Attachments",
            // TODO: need to have icon
          },
          children: [
            //TODO: DEV-11949 add list component
            {
              ref: "attachments_variable",
              component: "SelectInput",
              componentProps: {
                label: "Add attachments into a ticket",
                placeholder: "--None--",
                options: [],
              },
            },
          ],
        },
        {
          ref: "return_id",
          component: "TextInput",
          componentProps: {
            label: "Return ID", // TODO: tooltip icon?
          },
          validators: [
            {
              method: "isVariableUnique",
              message: "This variable already exists!",
            },
            {
              method: "matches",
              value: "^\\S*$",
              message: "Variable name cannot contain spaces",
            },
            {
              method: "max",
              value: "50",
              message: "This must be less than 50 characters",
            },
            {
              method: "required",
              message: "Must enter a variable name",
            },
          ],
          output: {
            as: "TXT",
          },
        },
      ],
    },
    runtime: async (cbk) => {},
  };
}
