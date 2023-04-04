import { PropType } from "vue";
type buttonType = "primary" | "danger" | "info" | "success" | "warning";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<buttonType>;
        vaildator: (val: string) => boolean;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<buttonType>;
        vaildator: (val: string) => boolean;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    type: buttonType;
    icon: string;
    disabled: boolean;
    round: boolean;
    loading: boolean;
    plain: boolean;
    circle: boolean;
}>;
export default _default;
