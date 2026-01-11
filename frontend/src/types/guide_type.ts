{/** 导航门类类型定义
    ---------------
    id是唯一标识符
    label是显示的内容
    path进行页面路径识别
    暂时不做图标 */}

export interface GuideSubMenuItem {
    id: string;
    label: string;
    path: string;
}
export interface GuideItem {
    id: string;
    label: string;
    path?: string;
    children?: GuideSubMenuItem[];
}
