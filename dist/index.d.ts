declare class DateCalc {
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

declare class SetVariable {
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
