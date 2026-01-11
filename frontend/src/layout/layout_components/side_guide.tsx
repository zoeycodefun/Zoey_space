import { useState } from "react";
import {Link, useLocation} from "react-router-dom";
// 导入导航配置可变动数据
import { guideConfig } from "../../config/guide_config";
// 导入导航栏菜单项类型定义
import type { GuideItem } from "../../types/guide_type";

// 定义组件属性类型
interface SideGuideProps {
    isCollapsed: boolean; // 是否折叠侧边导航栏
    // 定义移动端的导航抽屉
    isMobileOpen? : boolean;
    // 移动端的关闭回调函数
    onMobileClose? : ()=> void;
}
// 侧边导航栏组件   
export default function SideGuide({
    isCollapsed,
    isMobileOpen,
    onMobileClose
}:SideGuideProps){
    // 获取哪个主菜单项是展开的，追踪当前展开的主菜单项，只有一个
    const [activeParentGuideItem, setActiveParentGuideItem] = useState<string | null>(null);
    // 追踪是否在子菜单视图(加返回选项用)
    const [inSubMenu, setInSubMenu] = useState(false);
    // 获取当前的路由位置
    const location = useLocation();

    // 点击主菜单项
    const handleParentGuideClick = (item: GuideItem) => {
        if (item.children && item.children.length > 0) {
            // 如果有子菜单就进入子菜单视图，不关闭抽屉
            setActiveParentGuideItem(item.id);
            setInSubMenu(true);
            // 有子菜单时，点击主菜单的项目不弹回，继续让用户操作子菜单
        } else {
            // 没有子菜单就导航到对应路径然后关闭抽屉
        if (onMobileClose) {
            onMobileClose();
        }
    }
    };
    // 返回到主菜单(点击返回return也回到主菜单about)
    // 点击返回返回主菜单视图，不导航页面
    const handleBackToMainMenu = () => {
        setInSubMenu(false);
        setActiveParentGuideItem(null);
        // 返回主菜单视图，不导航到about界面
        // 导航到about界面
        // navigate('/');
        // 关闭抽屉
        // if (onMobileClose){
           // onMobileClose();
        //}
    }
    // 子菜单项点击处理
    const handleChildClick = () => {
        // 移动端：点击菜单项之后自动自动关闭抽屉
        // 已经选择了子菜单项就可以关闭了
        if (onMobileClose) {
            onMobileClose();
        }
    }
    // 渲染主菜单列表
    const renderMainMenu = () => {
        return guideConfig.map(item => {
            const guideHasChildrenMenu = item.children && item.children.length >0;
            const isActive =location.pathname === item.path;
            return (
                // 选中的加重背景，鼠标悬浮特效就不显示了，没被选中的才显示鼠标悬浮特效
                <div key={item.id} className="mt-3">
                    <div className={`
                        flex items-center justify-between py-1.5 px-7 cursor-pointer
                         rounded-full transition-colors duration-200 text-sm
                         sm:text-[16px]
                        ${isActive ? 'bg-gray-200':'hover:bg-gray-100'}
                        `}
                        onClick={()=>handleParentGuideClick(item)}
                        >
                            {guideHasChildrenMenu ? (
                                // 有子菜单就点击主菜单项进入子菜单
                                <div className="flex items-center gap-3 flex-1">
                                    <span>{item.label}</span>
                                </div>
                            ):(
                                // 没有子菜单就直接跳转
                                // 或者关闭抽屉
                                <Link to={item.path || "#"} 
                                className="flex items-center gap-3 flex-1"
                                onClick={(event)=>{
                                    event.stopPropagation();
                                    if (onMobileClose) onMobileClose();
                                }}
                                >
                                    <span>{item.label}</span>
                                </Link>
                            )}
                            {/** 有子菜单显示右箭头进入 */}
                            {guideHasChildrenMenu && (
                                <svg 
                                className="w-4 h-4 text-gray-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            )}
                        </div>
                </div>
            );
        });
    };
    // 渲染子菜单列表
    const renderSubMenu = () => {
        const subMenuParentItem = guideConfig.find(item=> item.id === activeParentGuideItem);
        if (!subMenuParentItem || !subMenuParentItem.children) return null;
        return (
            <div className="space-y-2">
                {/** 返回主菜单按钮在子菜单进入后被唤醒 */}
                <div 
                onClick={handleBackToMainMenu}
                className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-full
                 mb-6 transition-colors duration-200 text-sm
                "
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Return</span>
                </div>
               
                {/** 子菜单项列表项名称 */}
                {subMenuParentItem.children.map(child => {
                    const isActive = location.pathname === child.path;
                    return (
                        <Link 
                        key={child.id}
                        to={child.path}
                        className={`block py-1.5 px-7 rounded-full transition-colors duration-200
                            ${isActive ? 'bg-gray-200':'hover:bg-gray-100'} text-sm
                            `}
                        onClick={handleChildClick}
                        >
                            <div className="flex items-center gap-3">
                                <span>{child.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    };
    return (
        <>
        {/** 移动端全屏抽屉，小屏幕显示 */}
        <div className="lg:hidden">
            {/** 抽屉遮蔽罩 */}
            <div
            className={`fixed inset-0 bg-black bg-opacity-60 z-40 
            transition-opacity duration-300
            ${isMobileOpen ? 'opacity-100':'opacity-0 pointer-events-none'}
            `}
            onClick={onMobileClose}
            ></div>
            {/** 全屏抽屉导航 */}
            <aside className={`
                fixed left-0 top-0 h-full w-full bg-white z-50
                transition-transform duration-300 ease-in-out
                ${isMobileOpen ? 'translate-x-0':'-translate-x-full'}
                `}>
                    {/** 抽屉头部 */}
                    <div className="flex items-center justify-between p-6
                     ">
                        <span className="sm:text-xl">Guide</span>
                        <button 
                        onClick={onMobileClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/** 导航菜单区域 */}
                    <nav className="flex-1 p-4 overflow-y-auto">
                        {inSubMenu ? renderSubMenu() : renderMainMenu()}
                    </nav>
                </aside>
        </div>
        {/** 桌面端固定侧边栏，大屏幕显示,lg以上显示，完全收起隐藏 */}
        <aside 
        className="hidden lg:block fixed left-0 bg-white transition-all duration-300 
        z-30 w-64 h-full"
        style={{
            top:'64px',
            height:'calc(100vh-64px)',
            transform: isCollapsed ? 'translateX(-100%)' : 'translateX(0)'  // 这行必须有
        }}
        >
        <nav className="p-4 h-full overflow-y-auto hide-scrollbar" 
        style={{ paddingBottom:'100px',paddingTop:'100px'}}>
            {inSubMenu ? renderSubMenu() : renderMainMenu()}
        </nav>
        </aside>
        
       
        </>   
    );
}
