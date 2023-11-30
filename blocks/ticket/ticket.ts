import type { BaseSchema, KeyValueOptionProp } from "../../base/base";

export class Ticket {
  schema: BaseSchema = {
    key: "TICKET",
    name: "ticket",
    color: "#857EC9",
    blockType: "functional",
    toggleName: "feature.cbk.ticket",
    icon: "M10.86,6.37L5.63,1.14h0c-.31-.31-.81-.32-1.13,0,0,0,0,0,0,0L1.14,4.49c-.15,.14-.24,.34-.24,.55,0,.22,.08,.43,.24,.59l5.22,5.22c.14,.15,.34,.24,.55,.24h.02c.21,0,.42-.09,.57-.24l.72-.72c.16-.16,.18-.41,.04-.59-.27-.37-.23-.88,.09-1.2,.32-.32,.83-.36,1.2-.08,.18,.13,.43,.11,.59-.04l.71-.71c.15-.14,.24-.34,.24-.55,0-.22-.08-.43-.24-.59Zm-7.96,.46l-.5-.5,.92-.91,.5,.5-.92,.91Zm1.5-1.5l-.5-.5,.92-.92,.5,.5-.92,.92Zm1.51-1.5l-.5-.5,.91-.92,.5,.5-.91,.92Z",
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
                  {
                    label: "Create new ticket",
                    value: "create_new_ticket",
                  },
                ],
              },
              validators: [
                {
                  method: "required",
                  message: "Please select a function",
                },
              ],
            },
            {
              ref: "ticket_layout_id",
              component: "SelectInput",
              componentProps: {
                label: "Ticket layout",
                placeholder: "Select ticket layout",
                isSearchable: true,
                options: async (cbk) => {
                  const response = await cbk.api.get<any>(
                    "/ticketing/ticket-layouts?offset=0&limit=100000&status=live"
                  );
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
                  cbk.setElementValue("ticketing_layout_field_selector", "");
                },
              },
              validators: [
                {
                  method: "required",
                  message: "Please select a ticket layout",
                },
              ],
            },
          ],
        },
        {
          ref: "create_new_ticket_group",
          showIf: "fn_selector == 'create_new_ticket'",
          component: "Group",
          componentProps: {
            label: "Create new ticket",
          },
          children: [
            {
              ref: "ticketing_layout_field_selector",
              component: "KeyValueListInput",
              showIf: "!!ticket_layout_id",
              componentProps: {
                label: "Select Field",
                placeholder: "--None--",
                keyValueComponents: async (cbk) => {
                  const layoutId = cbk.getElementValue("ticket_layout_id");
                  const allWorkflowVars = cbk.getAllVars();
                  const response = await cbk.api.get<any>(
                    `/ticketing/ticket-layouts/${layoutId}`
                  );

                  const ticketingWorkflowVarMapping: Record<string, string[]> =
                    {
                      USER: ["USER"],
                      SHORT_TXT: ["TXT", "PARA"],
                      LONG_TXT: ["TXT", "PARA"],
                      NUM: ["NUM", "SLDR"],
                      SEL: ["SEL", "RAD", "CBX", "ACT"],
                      MULTI_SEL: ["LIST", "LP_SIZE", "LP_IND"],
                      UPLOAD: ["FILE", "DOC"],
                      DATE_TIME: ["DATE"],
                    };

                  return response
                    ? response?.result?.fields?.map((v: any) => {
                        const mapping =
                          ticketingWorkflowVarMapping[v.fieldType];

                        let filteredVars = allWorkflowVars.filter(
                          (workflowVar) =>
                            !mapping ||
                            mapping?.includes(workflowVar.type) ||
                            // for single select field, we allow COMP variable
                            (v.fieldType === "SEL" &&
                              /^COMP\d+/.test(workflowVar.label))
                        );

                        return {
                          left: {
                            ref: "value",
                            component: "SelectInput",
                            componentProps: {
                              options: filteredVars,
                              allowUnselect: !v.metadata?.isReadOnly,
                            },
                          },
                          right: {
                            ref: "id",
                            component: "TextValueDisplay",
                            componentProps: {
                              readOnly: true,
                              value: v.id,
                              displayText: v.name,
                              type: v.fieldType,
                            },
                          },
                        } as KeyValueOptionProp;
                      })
                    : [];
                },
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
            icon: "M11.2502 1.49935C11.2502 1.03911 11.6233 0.666015 12.0835 0.666016L14.1644 0.666019C14.1652 0.666017 14.166 0.666016 14.1668 0.666016C14.1676 0.666016 14.1685 0.666017 14.1693 0.666019L16.2502 0.666023C16.7104 0.666023 17.0835 1.03912 17.0835 1.49936C17.0835 1.95959 16.7104 2.33269 16.2502 2.33269L15.0002 2.33269V3.99935L15.6989 3.99935C16.1382 3.99933 16.5172 3.99932 16.8294 4.02482C17.1588 4.05174 17.4865 4.11117 17.8018 4.27183C18.2722 4.51152 18.6547 4.89397 18.8943 5.36437C19.055 5.67969 19.1144 6.00737 19.1414 6.33683C19.1669 6.64896 19.1668 7.02793 19.1668 7.46721V10.5315C19.1668 10.9708 19.1669 11.3497 19.1414 11.6619C19.1144 11.9913 19.055 12.319 18.8943 12.6343C18.6547 13.1047 18.2722 13.4872 17.8018 13.7269C17.4865 13.8875 17.1588 13.947 16.8294 13.9739C16.5172 13.9994 16.1382 13.9994 15.6989 13.9993H15.0002V15.666L16.2502 15.666C16.7104 15.666 17.0835 16.0391 17.0835 16.4994C17.0835 16.9596 16.7104 17.3327 16.2502 17.3327L12.0835 17.3327C11.6233 17.3327 11.2502 16.9596 11.2502 16.4993C11.2502 16.0391 11.6233 15.666 12.0835 15.666L13.3335 15.666V13.167C13.3335 13.1667 13.3335 13.1664 13.3335 13.166C13.3335 13.1657 13.3335 13.1653 13.3335 13.165L13.3335 4.83323C13.3335 4.83305 13.3335 4.83341 13.3335 4.83323C13.3335 4.83305 13.3335 4.83232 13.3335 4.83213V2.33268L12.0835 2.33268C11.6233 2.33268 11.2502 1.95958 11.2502 1.49935ZM15.0002 5.66602V12.3327H15.6668C16.1473 12.3327 16.4575 12.332 16.6936 12.3127C16.92 12.2942 17.004 12.2628 17.0452 12.2419C17.202 12.162 17.3294 12.0345 17.4093 11.8777C17.4303 11.8365 17.4617 11.7525 17.4802 11.5262C17.4995 11.29 17.5002 10.9798 17.5002 10.4993V7.49935C17.5002 7.01889 17.4995 6.70866 17.4802 6.47255C17.4617 6.24616 17.4303 6.16223 17.4093 6.12102C17.3294 5.96422 17.202 5.83674 17.0452 5.75684C17.004 5.73585 16.92 5.70445 16.6936 5.68596C16.4575 5.66666 16.1473 5.66602 15.6668 5.66602H15.0002ZM4.30138 3.99935L10.8335 3.99935C11.2937 3.99935 11.6668 4.37245 11.6668 4.83268C11.6668 5.29292 11.2937 5.66602 10.8335 5.66602H4.3335C3.85304 5.66602 3.54281 5.66666 3.30669 5.68596C3.08031 5.70445 2.99638 5.73585 2.95517 5.75684C2.79837 5.83674 2.67089 5.96422 2.59099 6.12102C2.57 6.16223 2.5386 6.24616 2.5201 6.47255C2.50081 6.70866 2.50016 7.01889 2.50016 7.49935V10.4993C2.50016 10.9798 2.50081 11.29 2.5201 11.5262C2.5386 11.7525 2.57 11.8365 2.59099 11.8777C2.67089 12.0345 2.79837 12.162 2.95517 12.2419C2.99638 12.2628 3.08031 12.2942 3.30669 12.3127C3.54281 12.332 3.85304 12.3327 4.3335 12.3327H10.8335C11.2937 12.3327 11.6668 12.7058 11.6668 13.166C11.6668 13.6263 11.2937 13.9993 10.8335 13.9993H4.30139C3.8621 13.9994 3.48312 13.9994 3.17097 13.9739C2.84152 13.947 2.51384 13.8875 2.19852 13.7269C1.72812 13.4872 1.34566 13.1047 1.10598 12.6343C0.94532 12.319 0.88589 11.9913 0.858972 11.6619C0.833469 11.3497 0.833482 10.9708 0.833497 10.5315V7.46723C0.833482 7.02794 0.833469 6.64897 0.858972 6.33683C0.88589 6.00737 0.94532 5.67969 1.10598 5.36437C1.34566 4.89397 1.72812 4.51152 2.19852 4.27183C2.51384 4.11117 2.84152 4.05174 3.17097 4.02482C3.48312 3.99932 3.86209 3.99933 4.30138 3.99935Z",
          },
          children: [
            {
              ref: "subject_variable",
              component: "SelectInput",
              componentProps: {
                label: "Add subject into a ticket*",
                placeholder: "--None--",
                options: "getTicketingEmailSubjectVariables",
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
            icon: "M3.88873 3.33268C3.74138 3.33268 3.60008 3.39121 3.49589 3.4954C3.3917 3.59959 3.33317 3.7409 3.33317 3.88824V12.9875L4.68836 11.6323C4.84464 11.476 5.0566 11.3882 5.27761 11.3882H7.49984C7.96007 11.3882 8.33317 11.7613 8.33317 12.2216C8.33317 12.6818 7.96007 13.0549 7.49984 13.0549H5.62279L3.08909 15.5886C2.85076 15.8269 2.49233 15.8982 2.18093 15.7692C1.86954 15.6403 1.6665 15.3364 1.6665 14.9993V3.88824C1.6665 3.29887 1.90063 2.73364 2.31738 2.31689C2.73413 1.90014 3.29936 1.66602 3.88873 1.66602H13.6109C14.2003 1.66602 14.7655 1.90014 15.1823 2.31689C15.599 2.73364 15.8332 3.29887 15.8332 3.88824V7.49935C15.8332 7.95959 15.4601 8.33268 14.9998 8.33268C14.5396 8.33268 14.1665 7.95959 14.1665 7.49935V3.88824C14.1665 3.7409 14.108 3.59959 14.0038 3.4954C13.8996 3.39121 13.7583 3.33268 13.6109 3.33268H3.88873ZM16.3891 8.33268C16.4627 8.33268 16.5334 8.36195 16.5855 8.41404C16.6376 8.46614 16.6668 8.53679 16.6668 8.61046V15.4875L15.8672 14.6879C15.7109 14.5316 15.499 14.4438 15.2779 14.4438H8.61127C8.5376 14.4438 8.46695 14.4145 8.41485 14.3624C8.36276 14.3103 8.3335 14.2397 8.3335 14.166V8.61046C8.3335 8.53679 8.36276 8.46613 8.41485 8.41404C8.46695 8.36195 8.5376 8.33268 8.61127 8.33268H16.3891ZM17.764 7.23553C17.3993 6.87088 16.9047 6.66602 16.3891 6.66602H8.61127C8.09557 6.66602 7.601 6.87088 7.23634 7.23553C6.87169 7.60018 6.66683 8.09476 6.66683 8.61046V14.166C6.66683 14.6817 6.87169 15.1763 7.23634 15.5409C7.601 15.9056 8.09557 16.1105 8.61127 16.1105H14.9328L16.9109 18.0886C17.1492 18.3269 17.5077 18.3982 17.8191 18.2692C18.1305 18.1403 18.3335 17.8364 18.3335 17.4994V8.61046C18.3335 8.09476 18.1286 7.60018 17.764 7.23553ZM10.8332 11.6673C10.8332 12.1276 10.4601 12.5007 9.99984 12.5007C9.5396 12.5007 9.1665 12.1276 9.1665 11.6673C9.1665 11.2071 9.5396 10.834 9.99984 10.834C10.4601 10.834 10.8332 11.2071 10.8332 11.6673ZM13.3332 11.6673C13.3332 12.1276 12.9601 12.5007 12.4998 12.5007C12.0396 12.5007 11.6665 12.1276 11.6665 11.6673C11.6665 11.2071 12.0396 10.834 12.4998 10.834C12.9601 10.834 13.3332 11.2071 13.3332 11.6673ZM15.8332 11.6673C15.8332 12.1276 15.4601 12.5007 14.9998 12.5007C14.5396 12.5007 14.1665 12.1276 14.1665 11.6673C14.1665 11.2071 14.5396 10.834 14.9998 10.834C15.4601 10.834 15.8332 11.2071 15.8332 11.6673Z",
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
            icon: "M3.0013 11.5C3.46154 11.5 3.83464 11.8731 3.83464 12.3333V15.4444C3.83464 15.636 3.91073 15.8197 4.04617 15.9551C4.18161 16.0906 4.36531 16.1667 4.55686 16.1667H15.4457C15.6373 16.1667 15.821 16.0906 15.9564 15.9551C16.0919 15.8197 16.168 15.636 16.168 15.4444V12.3333C16.168 11.8731 16.5411 11.5 17.0013 11.5C17.4615 11.5 17.8346 11.8731 17.8346 12.3333V15.4444C17.8346 16.078 17.583 16.6856 17.1349 17.1336C16.6869 17.5816 16.0793 17.8333 15.4457 17.8333H4.55686C3.92328 17.8333 3.31566 17.5816 2.86766 17.1336C2.41965 16.6856 2.16797 16.078 2.16797 15.4444V12.3333C2.16797 11.8731 2.54106 11.5 3.0013 11.5ZM9.40982 2.41009C9.73526 2.08466 10.2629 2.08466 10.5883 2.41009L14.4772 6.29898C14.8027 6.62442 14.8027 7.15206 14.4772 7.47749C14.1518 7.80293 13.6241 7.80293 13.2987 7.47749L9.99908 4.17786L6.69944 7.47749C6.37401 7.80293 5.84637 7.80293 5.52093 7.47749C5.1955 7.15206 5.1955 6.62442 5.52093 6.29898L9.40982 2.41009ZM9.99984 2.16602C10.4601 2.16602 10.8332 2.53911 10.8332 2.99935V12.3327C10.8332 12.7929 10.4601 13.166 9.99984 13.166C9.5396 13.166 9.1665 12.7929 9.1665 12.3327V2.99935C9.1665 2.53911 9.5396 2.16602 9.99984 2.16602Z",
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
                    options: "getFileVariables",
                  },
                },
              },
            },
          ],
        },
        {
          ref: "ticket_return_id",
          component: "TextInput",
          componentProps: {
            label: "Return ID",
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
    runtime: async (cbk) => {
      try {
        const fn = cbk.getElementValue("fn_selector");

        if (fn === "create_new_ticket") {
          const boardId = cbk.getElementValue("board_id");
          const ticketLayoutId = cbk.getElementValue("ticket_layout_id");
          const subjectVariable = cbk.getElementValue("subject_variable");
          const messageVariable = cbk.getElementValue("message_variable");
          const subject = cbk.getVariable(subjectVariable);
          const message = messageVariable?.length
            ? cbk.getVariable(messageVariable)
            : "";
          const attachments = JSON.parse(
            cbk.getElementValue("attachments") ?? "[]"
          );

          const checkbox = await cbk.apiClient.checkbox();
          const ticketingMessageService = checkbox.ticketingMessageService;
          const ticketingTicketService = checkbox.ticketingTicketService;

          // build ticket fields
          const keyValueMappings = JSON.parse(
            cbk.getElementValue("ticketing_layout_field_selector") ?? "[]"
          );
          const ticketFieldsRaw: Record<string, string> = {};
          for (const mapping of keyValueMappings) {
            if (mapping.id && mapping.value) {
              ticketFieldsRaw[mapping.id] = cbk.getVariable(mapping.value);
            }
          }
          const validatedTicketFields =
            await ticketingTicketService.validateTicketFieldInputs(
              ticketLayoutId,
              ticketFieldsRaw
            );

          // create ticket
          const isPreview = cbk.getIsPreview();
          const ticket = await ticketingTicketService.createOneTicket(boardId, {
            layoutId: ticketLayoutId,
            subject: `${isPreview ? "{TEST}" : ""} ${subject}`,
            platformType: "workflow",
            fields: validatedTicketFields,
          });

          // build attachment payload
          let attachmentPayload = [];
          for (const attachment of attachments) {
            const uploadedFile = JSON.parse(
              cbk.getVariable(attachment.variable) ?? "[]"
            );
            if (uploadedFile.length) {
              attachmentPayload.push({
                fileName: uploadedFile[0].fileName,
                s3Id: uploadedFile[0].fileKey,
                ticketId: ticket.id,
              });
            }
          }

          // create ticket message with attachments
          const user = cbk.getUser();
          await ticketingMessageService.createTicketMessageWithAttachments(
            {
              platformType: "workflow",
              ticketId: ticket.id,
              body: message,
              senderId: user.userNumber,
            },
            attachmentPayload
          );

          // return ticket id
          const ticketReturnIdVar = cbk.getElementValue("ticket_return_id");
          cbk.setOutput(ticketReturnIdVar, ticket.id);
        }
      } catch (e) {
        cbk.log("Error in runtime", e);
      }
    },
  };
}
