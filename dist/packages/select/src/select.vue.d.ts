declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    showOptions: import("vue").Ref<boolean>;
    openSelect: (val: any, flag?: boolean, value?: string) => void;
    arr: import("vue").Ref<any[]>;
    arrAdd: (val: any) => void;
    currentValue: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    modelValue: string;
}>;
export default _default;
