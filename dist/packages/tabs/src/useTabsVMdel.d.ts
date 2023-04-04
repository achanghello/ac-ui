declare var props: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
};
declare var emits: string[];
declare var tabs: (props: any, emit: any, slots: any) => void;
export { props, emits, tabs };
