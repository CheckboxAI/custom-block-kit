import type { FIELD_TYPES } from "../blocks/constants/constant";

export interface BaseSchema {
    key?: string;
    name?: string;
    color?: string;
    toggleName?: string;
    icon?: string;
    stencil?: Stencil;
    studioShape?: StudioShape;
    editor?: Editor;
    runtime?: string;
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

export interface CBK {
    api: {
        get: <T extends object>(url: string, params?: Record<string, unknown>) => Promise<T>;
    },
    getElementValue(ref: string): string;
}

export interface ComponentProps {
    label?: string;
    placeholder?: string;
    options?: ComponentOptionProps[] | ((cbk: CBK) => Promise<ComponentOptionProps[]>) | string;
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
