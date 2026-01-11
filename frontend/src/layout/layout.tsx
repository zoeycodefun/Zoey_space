import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from './layout_components/top_bar'
import SideGuide from './layout_components/side_guide'

export default function Layout(){
    // 控制侧边栏完全收起展开
    const [isCollapsed, setIsCollapsed] = useState(false);
    // 控制是否是移动端设备打开
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen">
            {/** 侧边栏完全收起不显示 */}
            <SideGuide 
                isCollapsed={isCollapsed} 
                isMobileOpen={isMobileMenuOpen} 
                onMobileClose={() => setIsMobileMenuOpen(false)}></SideGuide>
            {/** 顶部栏始终在顶部，占据满全屏宽度 */}
            <TopBar 
                isCollapsed={isCollapsed} 
                onToggleSidebar={() => setIsCollapsed(!isCollapsed)}
                onToggleMobileMenu={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}
                isMobileMenuOpen={isMobileMenuOpen}
                ></TopBar>
                {/** 主体内容区域，根据侧边栏导航状态调整左边距 */}
                <main className={`pt-16 transition-all duration-300
                 ${isCollapsed ? 'lg:ml-16':'lg:ml-64'}
                `}
            >
                <div className="p-6 sm:p-8 lg:p-16">
                    {/** 渲染当前路由对应的界面组件 */}
                    <Outlet />
                </div>
            </main>

        </div>
    )
}