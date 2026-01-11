import {useState, useEffect} from 'react';

// 定义组件的属性类型
interface TopBarProps {
    isCollapsed: boolean; // 是否折叠的状态
    onToggleSidebar: ()=> void; // 切换侧边栏的回调函数
    onToggleMobileMenu?: ()=> void; // 切换移动端菜单的回调函数
    isMobileMenuOpen?: boolean; // 移动端菜单是否打开状态
}

// 导出顶部栏组件接收isCollapsed和onToggleSidebar作为属性
export default function TopBar({
    isCollapsed, 
    onToggleSidebar,
    onToggleMobileMenu,
    isMobileMenuOpen=false
}: TopBarProps) {
    // 因为滚动的话，顶部栏上面的zoey名称会变成我的头像，定义一个追踪页面滚动的状态
    const [scrolled, setScrolled]= useState(false);
    // 追踪搜索栏是否获得焦点
    const [searchFocused, setSearchFocused]= useState(false);
    // 使用useEffect钩子来监听滚动事件
    useEffect(()=>{
        // 滚动处理函数
        const handleScroll = () => {
            // 如果滚动位置大于50像素，设置scrolled为true，否则为false
            setScrolled(window.scrollY > 50);
        };
        // 添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);
        // 组件卸载清理监听器（防止内存泄漏）
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // 空依赖数组表示只在组件挂载时运行一次

    // div网页结构
    return (
        <header className='fixed top-0 left-0 right-0 z-40 transition-all
        duration-300 backdrop-blur-lg bg-white'
        >
        {/** 顶部栏结构容器 */}
        <div className='flex items-center justify-between h-16 sm:h-20  px-2 w-full'>
            {/** 左侧区域：名字/向下晃动出现头像+菜单收缩展示按钮
             * 顶部栏移动端菜单按钮➕名字头像➕桌面端收缩按钮
             */}
            <div className='flex items-center gap-2'>
                {/** 移动端菜单按钮，小屏幕显示 */}
                <button
                        onClick={onToggleMobileMenu}
                        className='p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200 lg:hidden'
                    >
                        <svg 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                // 关闭图标 (X)
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                // 汉堡菜单图标
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                {/** 名字/头像 */}
                <div className='flex items-center'>
                    {/** 桌面端菜单收缩按钮 */}
                <button
                        onClick={onToggleSidebar}
                        className='hidden lg:flex p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 items-center justify-center'
                        title={isCollapsed ? '展开侧边栏' : '收起侧边栏'}
                    >
                        <svg
                            className="lg:w-7 lg:h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {/* 汉堡图标 */}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    {/** 根据滚动状态切换文字至头像图片并切换回来 */}
                    {scrolled ? (
                        // 滚动超过50像素显示头像
                        <img src="/photo.jpg" alt="photo" className='w-10 h-10 lg:w-12 lg:h-12 rounded-full lg:ml-5' />
                    ):(
                        // 未滚动显示名字
                        <span className='font-bold text-2xl sm:text-3xl lg:text-4xl lg:pl-5'>
                            Zoey
                        </span>
                    )}
    
                </div>
            
            </div>
            {/** 右侧区域：搜索栏，联系我与推特跟踪*/}
            <div className='flex items-center gap-1'>
                {/** 搜索栏：小屏幕隐藏，中等屏幕显示简化的，大屏幕显示完整的 */}
                <div className='relative hidden sm:block'>
                    <input 
                            type="text"
                            placeholder='搜索...'
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            className={`
                                pl-3 pr-8 py-1.5 border rounded-full outline-none 
                                transition-all duration-300 text-sm border-gray-200
                                placeholder-gray-400
                                ${searchFocused ? 'border-teal-50 shadow-[0_0_25px_rgba(33,186,172,0.9)] ring-1 ring-teal-100' : 'hover:border-gray-300'}
                                w-32 md:w-40 lg:w-48
                            `}
                    />
                    {/** 搜索图标 */}
                    <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400
                    cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                </div>
                {/** 移动端搜索按钮：小屏幕 */}
                <button className='p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200 sm:hidden'>
                        <svg 
                            className="w-5 h-5 text-gray-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                    </button>
                {/** 联系我按钮 */}
                <button className={`
                        hover:scale-105 hover:text-gray-600 transition-all duration-200 
                        rounded-lg px-2 py-1 text-sm md:px-3 md:py-1.5 md:text-[16px] lg:px-4 lg:py-2 lg:text-base
                    `}>
                        {window.innerWidth < 640 ? 'Contact' : 'Contact Me'}
                    </button>
                {/** 推特关注链接按钮
                 * target='_blank'表示在新标签页打开链接
                 * rel='noopener noreferrer'是为了安全性，防止新打开的页面获取对原页面的引用
                 */}
               <a 
                        href="https://x.com/zoeycodefun" 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className={`
                            text-white rounded-full flex items-center gap-1 md:gap-2 
                            transition-all duration-300 shadow-lg font-medium
                            px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm lg:px-4 lg:py-2 lg:text-base
                        `}
                        style={{
                            background: 'linear-gradient(135deg, rgb(33, 186, 172) 0%, rgb(45, 200, 185) 100%)'
                        }}
                        onMouseEnter={(e) => {
                            if (window.innerWidth >= 1024) { // 只在桌面端显示悬停效果
                                e.currentTarget.style.boxShadow = '0 0 25px rgba(33, 186, 172, 0.6)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (window.innerWidth >= 1024) {
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }
                        }}
                    >
                        {/* Twitter/X 图标 */}
                        <svg className='w-8 h-4 md:w-12 md:h-6 lg:hidden' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        
                        {/* 文字 - 在小屏幕隐藏 */}
                        <span className='hidden lg:inline lg:px-6 lg:rounded-full '>
                            {window.innerWidth < 1024 ? '' : 'Follow X'}
                        </span>
                    </a>
            </div>
        </div>
        </header>
    );
}