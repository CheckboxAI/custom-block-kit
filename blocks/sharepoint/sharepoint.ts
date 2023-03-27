import type { BaseSchema } from "../../base/base";
import type { SharepointData } from "./types";
import { sortOptions } from "./utils";

export class Sharepoint {
  schema: BaseSchema = {
    key: "SHAREPOINT",
    name: "Sharepoint",
    color: "#753491",
    toggleName: "feature.cbk.sharepoint",
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
              { label: "Create Folder", value: "create" },
              {
                label: "Upload file to folder",
                value: "upload",
              },
            ],
          },
        },
        {
          ref: "siteId",
          component: "SelectInput",
          componentProps: {
            label: "Select Site",
            placeholder: "Select site",
            isSearchable: true,
            options: async (cbk) => {
              const response = await cbk.api.get<SharepointData[]>(
                "/public/integrations/msgraph/sharepoint/sites"
              );
              return response
                ? response
                    .map(({ id, name }) => ({ value: id, label: name }))
                    .sort(sortOptions)
                : [];
            },
          },
        },
        {
          ref: "driveId",
          showIf: "!!siteId",
          component: "SelectInput",
          componentProps: {
            label: "Select Drive",
            placeholder: "Select drive",
            isSearchable: true,
            options: async (cbk) => {
              const response = await cbk.api.get<SharepointData[]>(
                "/public/integrations/msgraph/sharepoint/drives",
                {
                  siteId: cbk.getElementValue("siteId"),
                }
              );
              return response
                ? response
                    .map(({ id, name }) => ({ value: id, label: name }))
                    .sort(sortOptions)
                : [];
            },
          },
        },
        {
          ref: "folderId",
          showIf: "!!siteId && !!driveId",
          component: "SelectInput",
          componentProps: {
            label: "Select Folder",
            placeholder: "Select folder",
            isSearchable: true,
            options: async (cbk) => {
              const response = await cbk.api.get<SharepointData[]>(
                "/public/integrations/msgraph/sharepoint/folders",
                {
                  siteId: cbk.getElementValue("siteId"),
                  driveId: cbk.getElementValue("driveId"),
                }
              );
              return response
                ? response
                    .map(({ id, name }) => ({ value: id, label: name }))
                    .sort(sortOptions)
                : [];
            },
          },
        },
      ],
    },
    runtime: `
        console.log('lalala')
    `,
  };
}
