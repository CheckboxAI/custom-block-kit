import type { FIELD_TYPES } from "../blocks/constants/constant";
import type { Client } from '@microsoft/microsoft-graph-client';

export interface BaseSchema {
    key?: string;
    name?: string;
    color?: string;
    toggleName?: string;
    icon?: string;
    stencil?: Stencil;
    studioShape?: StudioShape;
    editor?: Editor;
    runtime?: (cbk: BackendCBK) => Promise<void>;
}

export interface Stencil {
    group: string;
    fontSize: number;
}

export interface StudioShape {
    fontSize: number;
}

export interface Editor {
    elements: EditorField[];
}

export interface OutputProps {
    as: keyof typeof FIELD_TYPES;
}

export interface EditorField {
    ref: string;
    label?: string;
    component: string;
    componentProps: ComponentProps;
    showIf?: string;
    validators?: ValidatorProps[];
    children?: EditorField[];
    output?: OutputProps;
}

export interface FrontendCBK {
    api: {
        get: <T extends object>(url: string, params?: Record<string, unknown>) => Promise<T>;
    },
    getElementValue(ref: string): string;
}

export interface BackendCBK {
    library: any; // TODO: proper type using CheckboxAI/CheckboxAPI
    apiClient: {
        msgraph: Client;
    };
    getElementValue(ref: string): string;
    getVariable(name: string): any;
    setOutput(name: string, value: any): void;
    downloadFile(fileKey: string): Promise<any>;
    log(...message: any[]): void;
}

type CustomOptionString = "getDateVariables" | "getExistingVariables" | "getFileVariables"

export interface ComponentProps {
    label?: string;
    placeholder?: string;
    options?: ComponentOptionProps[] | ((cbk: FrontendCBK) => Promise<ComponentOptionProps[]>) | CustomOptionString;
    isSearchable?: boolean;
}

export interface ComponentOptionProps {
    label: string;
    value: string;
}

export interface ValidatorProps {
    method: string;
    value?: string;
    message: string;
}
