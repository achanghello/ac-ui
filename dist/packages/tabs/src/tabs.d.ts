import { tabs } from './useTabsVMdel';
declare const _default: {
    name: string;
    props: {
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
    };
    emit: string[];
    setup: (props: any, _ref: any) => {
        tab: tabs;
    };
    render: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
export default _default;
