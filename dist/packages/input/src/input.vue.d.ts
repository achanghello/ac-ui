declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleInput: (e: any) => void;
    showSuffix: import("vue").ComputedRef<boolean>;
    passwordVisible: import("vue").Ref<boolean>;
    clear: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    placeholder: string;
    type: string;
    disabled: boolean;
    clearable: boolean;
    showPassword: boolean;
}>;
export default _default;
