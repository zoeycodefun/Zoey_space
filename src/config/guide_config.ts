/**
 * Navigation configuration management
 * type safety, consistency, extensibility
 */
import type { GuideItem, GuideSubMenuItem } from '../types/guide_type';

// Navigation item ID constants for main menu
const NAVIGATION_IDS = {
    ABOUT: 'about_me_and_new',
    TRADE: 'trade_market_analysis',
    PROJECTS: 'projects',
    WEB3: 'web3',
    INTERESTS: 'interests',
    ACADEMIC_RESEARCH: 'academic_research',
    SOCIAL_MEDIA: 'social_media',
} as const;
// Sub-navigation item ID constants
const SUB__NAVIGATION_IDS = {
    // Trade
    CRYPTO_MARKET_ANALYSIS: 'crypto_market_analysis',

    // Projects
    ALPHA_HUB: 'alpha_hub',
    AGENTS_CLUSTER: 'agents_cluster',

    // Web3
    DATA_ANALYSIS: 'data_analysis',
    DEFI_ANNUAL_REPORT: 'defi_annual_report',
    PERSONAL_POST: 'personal_post',
    PROJECTS_RESEARCH: 'projects_research',
    LAWS_REGULATIONS: 'laws_regulations',

    // Interests
    MODELING_3D: '3d_modeling',
    LITERARY: 'literary',
    PODCAST: 'podcast',
    ANIME: 'anime',
    FILM: 'film',
    CRAFT_PAINT: 'craft_paint',
    PHOTOGRAPHY: 'photography',
    PSYCHOLOGY: 'psychology',
    MUSIC: 'music',
    CLOTH_DESIGN: 'cloth_design',
    GAME: 'game',

    // Academic & Research
    PUBLICATIONS: 'publications',
    AI: 'ai',
    ECONOMY: 'economy',
    FINANCE: 'finance',
    MATH: 'math',
    LAWS: 'laws',

    // Social Media
    X: 'X',
    GITHUB: 'github',
    LINKEDIN: 'linkedin',
    MEDIUM: 'medium',
    SUBSTACK: 'substack',
    TRUTH_SOCIAL: 'truth_social',
    YOUTUBE: 'youtube',
    REDDIT: 'reddit',
    DEV_COMMUNITY: 'dev_community',
    HACKER_NEWS: 'hacker_news',
} as const;

// Type safe navigation configuration
export const guideConfig = [

    {
        id: NAVIGATION_IDS.ABOUT,
        label:'About',
        path:'/',
    },

    {
        id:NAVIGATION_IDS.TRADE,
        label:'Trade & Market Analysis',
        children: [
            {
                id: SUB__NAVIGATION_IDS.CRYPTO_MARKET_ANALYSIS,
                label: 'Crypto Market Analysis',
                path: '/trade/crypto_market_analysis'
            }
        ]
    },

    {
        id:NAVIGATION_IDS.PROJECTS,
        label:'Projects',
        children:[
            {
                id: SUB__NAVIGATION_IDS.ALPHA_HUB,
                label:'Alpha Hub',
                path:'/projects/alpha_hub'
            },
            {
                id: SUB__NAVIGATION_IDS.AGENTS_CLUSTER,
                label:'Agents Cluster',
                path:'/projects/agents_cluster'
            }
        ],
    },

    {
        id:NAVIGATION_IDS.WEB3,
        label:'Web3',
        children:[
            {
                id:SUB__NAVIGATION_IDS.DATA_ANALYSIS,
                label:'Data Analysis',
                path:'/web3/data_analysis'
            },
            {
                id:SUB__NAVIGATION_IDS.DEFI_ANNUAL_REPORT,
                label:'DeFi Annual Report',
                path:'/web3/defi_annual_report'
            },
            {
                id:SUB__NAVIGATION_IDS.PERSONAL_POST,
                label:'Personal Post',
                path:'/web3/personal_post'
            },
            {
                id:SUB__NAVIGATION_IDS.PROJECTS_RESEARCH,
                label:'Projects Research',
                path:'/web3/projects_research'
            },
            {
                id:SUB__NAVIGATION_IDS.LAWS_REGULATIONS,
                label:'Laws & Regulations',
                path:'/web3/laws_regulations'
            },  
        ]
    },

    {
        id:NAVIGATION_IDS.INTERESTS,
        label:'Interests',
        children:[
            {
                id:SUB__NAVIGATION_IDS.MODELING_3D,
                label:'3D Modeling',
                path:'/interests/3d_modeling'
            },
            {
                id:SUB__NAVIGATION_IDS.LITERARY,
                label:'Literary',
                path:'/interests/literary'
            },
            {
                id:SUB__NAVIGATION_IDS.PODCAST,
                label:'Podcast',
                path:'/interests/podcast'
            },
            {
                id:SUB__NAVIGATION_IDS.ANIME,
                label:'Anime',
                path:'/interests/anime'
            },
            {
                id:SUB__NAVIGATION_IDS.FILM,
                label:'Film',
                path:'/interests/film'
            },
            {
                id:SUB__NAVIGATION_IDS.CRAFT_PAINT,
                label:'Craft & Paint',
                path:'/interests/craft_paint'
            },
            {
                id:SUB__NAVIGATION_IDS.PHOTOGRAPHY,
                label:'Photography',
                path:'/interests/photography'
            },
            {
                id:SUB__NAVIGATION_IDS.PSYCHOLOGY,
                label:'Psychology',
                path:'/interests/psychology'
            },
            {
                id:SUB__NAVIGATION_IDS.MUSIC,
                label:'Music',
                path:'/interests/music'
            },
            {
                id:SUB__NAVIGATION_IDS.CLOTH_DESIGN,
                label:'Cloth Design',
                path:'/interests/cloth_design'
            },
            {
                id:SUB__NAVIGATION_IDS.GAME,
                label:'Game',
                path:'/interests/game'
            },
    
        ],
    },

    {
        id:NAVIGATION_IDS.ACADEMIC_RESEARCH,
        label:'Academic & Research',
        children:[
            {
                id:SUB__NAVIGATION_IDS.PUBLICATIONS,
                label:'Publications',
                path:'/academic_research/publications'
            },
            {
                id:SUB__NAVIGATION_IDS.AI,
                label:'AI',
                path:'/academic_research/ai'
            },
            {
                id:SUB__NAVIGATION_IDS.ECONOMY,
                label:'Economy',
                path:'/academic_research/economy'
            },
            {
                id:SUB__NAVIGATION_IDS.FINANCE,
                label:'Finance',
                path:'/academic_research/finance'
            },
            {
                id:SUB__NAVIGATION_IDS.MATH,
                label:'Math',
                path:'/academic_research/math'
            },
            {
                id:SUB__NAVIGATION_IDS.LAWS,
                label:'Laws',
                path:'/academic_research/laws'
            },
        ],
    },
    {
        id:NAVIGATION_IDS.SOCIAL_MEDIA,
        label:'Social Media',
        children:[
            {
                id:SUB__NAVIGATION_IDS.X,
                label:'X',
                path:'/social_media/X'
            },
            {
                id:SUB__NAVIGATION_IDS.GITHUB,
                label:'GitHub',
                path:'/social_media/github'
            },
            {
                id:SUB__NAVIGATION_IDS.LINKEDIN,
                label:'LinkedIn',
                path:'/social_media/linkedin'
            },
            {
                id:SUB__NAVIGATION_IDS.MEDIUM,
                label:'Medium',
                path:'/social_media/medium'
            },
            {
                id:SUB__NAVIGATION_IDS.SUBSTACK,
                label:'Substack',
                path:'/social_media/substack'
            },
            {
                id:SUB__NAVIGATION_IDS.TRUTH_SOCIAL,
                label:'Truth Social',
                path:'/social_media/truth_social'
            },
            {
                id:SUB__NAVIGATION_IDS.YOUTUBE,
                label:'YouTube',
                path:'/social_media/youtube'
            },
            {
                id:SUB__NAVIGATION_IDS.REDDIT,
                label:'Reddit',
                path:'/social_media/reddit'
            },
            {
                id:SUB__NAVIGATION_IDS.DEV_COMMUNITY,
                label:'Dev Community',
                path:'/social_media/dev_community'
            },
            {
                id:SUB__NAVIGATION_IDS.HACKER_NEWS,
                label:'Hacker News',
                path:'/social_media/hacker_news'
            },
        ],
    },
] as const satisfies readonly GuideItem[];

// type guard
export function isValidGuideItem(item: unknown): item is GuideItem {
    if (typeof item !== 'object' || item === null) {
        return false;
    }
    const guideItem = item as Partial<GuideItem>;
    if (typeof guideItem.id !== 'string' || typeof guideItem.label !== 'string') {
        return false;
    }
    const haspath = typeof guideItem.path === 'string';
    const hasChildren = Array.isArray(guideItem.children) && 
    guideItem.children.every((child: unknown): child is GuideSubMenuItem => 
    typeof child === 'object' &&
    child !== null &&
    typeof (child as GuideSubMenuItem).id === 'string' &&
    typeof (child as GuideSubMenuItem).label === 'string' &&
    typeof (child as GuideSubMenuItem).path === 'string'
    );
    return haspath || hasChildren;
}
// utility function to get navigation item by ID
export function getNavigationItemByID(id: string): GuideItem | undefined {
    return guideConfig.find(item => item.id === id);
}
// utility function to get sub navigation item by ID
export function getSubNavigationItemByID(parentId: string, childId: string): GuideSubMenuItem | undefined {
    const parentItem = getNavigationItemByID(parentId);
    return parentItem?.children?.find(child => child.id === childId);
}