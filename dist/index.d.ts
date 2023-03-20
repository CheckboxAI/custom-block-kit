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

declare class DateCalc extends BaseSchema {
    schema: {
        key: string;
        name: string;
        color: string;
        toggleName: string;
        icon: string;
        stencil: {
            group: string;
            fontSize: number;
        };
        editor: {
            elements: ({
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder: string;
                    options?: undefined;
                };
                showIf?: undefined;
                children?: undefined;
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder: string;
                    options: {
                        label: string;
                        value: string;
                    }[];
                };
                showIf?: undefined;
                children?: undefined;
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder?: undefined;
                    options?: undefined;
                };
                showIf: string;
                children: ({
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options?: undefined;
                        optionsFn?: undefined;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options: {
                            label: string;
                            value: string;
                        }[];
                        optionsFn?: undefined;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        optionsFn: string;
                        options?: undefined;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder?: undefined;
                        options?: undefined;
                        optionsFn?: undefined;
                    };
                    children: {
                        ref: string;
                        component: string;
                        componentProps: {
                            label: string;
                            placeholder: string;
                        };
                        validators: {
                            method: string;
                            message: string;
                        }[];
                    }[];
                })[];
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder?: undefined;
                    options?: undefined;
                };
                showIf: string;
                children: ({
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options?: undefined;
                        optionsFn?: undefined;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options: {
                            label: string;
                            value: string;
                        }[];
                        optionsFn?: undefined;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        optionsFn: string;
                        options?: undefined;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder?: undefined;
                        options?: undefined;
                        optionsFn?: undefined;
                    };
                    children: {
                        ref: string;
                        component: string;
                        componentProps: {
                            label: string;
                            placeholder: string;
                        };
                        validators: {
                            method: string;
                            message: string;
                        }[];
                        output: {
                            as: string;
                        };
                    }[];
                })[];
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder?: undefined;
                    options?: undefined;
                };
                showIf: string;
                children: ({
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        optionsFn: string;
                    };
                    children?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder?: undefined;
                        optionsFn?: undefined;
                    };
                    children: ({
                        ref: string;
                        component: string;
                        componentProps: {
                            label: string;
                            placeholder: string;
                            options: {
                                label: string;
                                value: string;
                            }[];
                        };
                        validators?: undefined;
                        output?: undefined;
                    } | {
                        ref: string;
                        component: string;
                        componentProps: {
                            label: string;
                            placeholder: string;
                            options?: undefined;
                        };
                        validators: {
                            method: string;
                            message: string;
                        }[];
                        output: {
                            as: string;
                        };
                    })[];
                })[];
            })[];
        };
        runtime: string;
    };
}

declare class SetVariable extends BaseSchema {
    schema: {
        key: string;
        name: string;
        color: string;
        toggleName: string;
        icon: string;
        stencil: {
            group: string;
            fontSize: number;
        };
        editor: {
            elements: ({
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder?: undefined;
                    options?: undefined;
                };
                showIf?: undefined;
                children?: undefined;
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder: string;
                    options: {
                        label: string;
                        value: string;
                    }[];
                };
                showIf?: undefined;
                children?: undefined;
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder?: undefined;
                    options?: undefined;
                };
                showIf: string;
                children: ({
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options: {
                            label: string;
                            value: string;
                        }[];
                    };
                    validators?: undefined;
                    showIf?: undefined;
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options?: undefined;
                    };
                    validators: {
                        method: string;
                        message: string;
                    }[];
                    showIf?: undefined;
                } | {
                    ref: string;
                    component: string;
                    showIf: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        options?: undefined;
                    };
                    validators?: undefined;
                })[];
            } | {
                ref: string;
                component: string;
                componentProps: {
                    label: string;
                    placeholder?: undefined;
                    options?: undefined;
                };
                showIf: string;
                children: ({
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        optionsFn: string;
                    };
                } | {
                    ref: string;
                    component: string;
                    componentProps: {
                        label: string;
                        placeholder: string;
                        optionsFn?: undefined;
                    };
                })[];
            })[];
        };
        runtime: string;
    };
}

export { DateCalc, SetVariable };
