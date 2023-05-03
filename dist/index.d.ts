import { Client } from '@microsoft/microsoft-graph-client';

declare const FIELD_TYPES: {
    BUTTON: string;
    DROPDOWN: string;
    LIST: string;
    NUMBER: string;
    PARA: string;
    TEXT: string;
    RAD: string;
    DATE: string;
    SLDR: string;
    CBX: string;
    COMP: string;
    LOOP_SET: string;
    LOOP_VALUE: string;
    LOOP_INDEX: string;
    LOOP_SIZE: string;
    FILE: string;
    DOC: string;
    USERPICKER: string;
    DOCUSIGN_STATUS: string;
};

interface BaseSchema {
    key?: string;
    name?: string;
    color?: string;
    toggleName?: string;
    blockType: blockType;
    icon?: string;
    stencil?: Stencil;
    studioShape?: StudioShape;
    editor?: Editor;
    runtime?: (cbk: BackendCBK) => Promise<void>;
}
interface Stencil {
    group: string;
    fontSize: number;
}
interface StudioShape {
    fontSize: number;
}
interface Editor {
    elements: EditorField[];
}
interface OutputProps {
    as?: keyof typeof FIELD_TYPES;
    ref?: string;
}
interface EditorField {
    ref: string;
    label?: string;
    component: string;
    componentProps: ComponentProps;
    showIf?: string;
    validators?: ValidatorProps[];
    children?: EditorField[];
    output?: OutputProps;
}
interface FrontendCBK {
    api: {
        get: <T extends object>(url: string, params?: Record<string, unknown>) => Promise<T>;
    };
    getElementValue(ref: string): string;
    setElementValue(ref: string, value: string | undefined): void;
}
interface BackendCBK {
    library: any;
    apiClient: {
        msgraph: Client;
        openai: any;
    };
    getElementValue(ref: string): string;
    getVariable(name: string): any;
    setOutput(name: string, value: any): void;
    downloadFile(fileKey: string): Promise<any>;
    log(...message: any[]): void;
    getVariableType(name: string): string;
}
type CustomOptionString = "getDateVariables" | "getExistingVariables" | "getFileVariables";
interface ComponentProps {
    label?: string;
    placeholder?: string;
    options?: ComponentOptionProps[] | ((cbk: FrontendCBK, searchTerm?: string) => Promise<ComponentOptionProps[]>) | CustomOptionString;
    isSearchable?: boolean;
    format?: string;
    whenChanged?: ((cbk: FrontendCBK, value?: any) => void | string);
}
interface ComponentOptionProps {
    label: string;
    value: string;
}
interface ValidatorProps {
    method: string;
    value?: string;
    message: string;
}
type blockType = "functional" | "frontend";

declare class DateCalc {
    schema: BaseSchema;
}

declare class SetVariable {
    schema: BaseSchema;
}

declare class Sharepoint {
    schema: BaseSchema;
}

declare class Triage {
    schema: BaseSchema;
}

export { DateCalc, SetVariable, Sharepoint, Triage };
