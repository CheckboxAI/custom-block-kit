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

declare class BaseSchema {
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
    as: keyof typeof FIELD_TYPES;
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
interface ComponentProps {
    label?: string;
    placeholder?: string;
    options?: ComponentOptionProps[];
    optionsFn?: string;
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

declare class DateCalc {
    schema: BaseSchema;
}

declare class SetVariable {
    schema: BaseSchema;
}

export { DateCalc, SetVariable };
