declare const _default: import("vue").DefineComponent<{
    blog: {
        type: ObjectConstructor;
        default: {
            bid: number;
            author: string;
            type: number;
            tag: string;
            state: number;
            releaseTime: string;
            suki: number;
            collection: number;
            views: number;
            title: string;
            summary: string;
            cover: string;
        };
    };
    normal: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    blog: {
        type: ObjectConstructor;
        default: {
            bid: number;
            author: string;
            type: number;
            tag: string;
            state: number;
            releaseTime: string;
            suki: number;
            collection: number;
            views: number;
            title: string;
            summary: string;
            cover: string;
        };
    };
    normal: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    blog: Record<string, any>;
    normal: boolean;
}>;
export default _default;
