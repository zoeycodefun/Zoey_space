// 导航配置：主导航和其子菜单配置

import type { GuideItem } from '../types/guide_type';

export const guideConfig: GuideItem[] = [
    {
        id: 'about_me_and_new',
        label:'About',
        path:'/',
    },

    {
        id:'projects',
        label:'Projects',
        children:[
            {
                id:'alpha_hub',
                label:'Alpha Hub',
                path:'/projects/alpha_hub'
            },

        ]
    },

    {
        id:'web3',
        label:'Web3',
        children:[
            {
                id:'data_analysis',
                label:'Data Analysis',
                path:'/web3/data_analysis'
            },
            {
                id:'defi_annual_report',
                label:'DeFi Annual Report',
                path:'/web3/defi_annual_report'
            },
            {
                id:'personal_post',
                label:'Personal Post',
                path:'/web3/personal_post'
            },
            {
                id:'projects_research',
                label:'Projects Research',
                path:'/web3/projects_research'
            },
            {
                id:'laws_regulations',
                label:'Laws & Regulations',
                path:'/web3/laws_regulations'
            },
            
        ]
    },

    {
        id:'interests',
        label:'Interests',
        children:[
            {
                id:'3d_modeling',
                label:'3D Modeling',
                path:'/interests/3d_modeling'
            },
            {
                id:'literary',
                label:'Literary',
                path:'/interests/literary'
            },
            {
                id:'podcast',
                label:'Podcast',
                path:'/interests/podcast'
            },
            {
                id:'anime',
                label:'Anime',
                path:'/interests/anime'
            },
            {
                id:'film',
                label:'Film',
                path:'/interests/film'
            },
            {
                id:'craft_paint',
                label:'Craft & Paint',
                path:'/interests/craft_paint'
            },
            {
                id:'photography',
                label:'Photography',
                path:'/interests/photography'
            },
            {
                id:'psychology',
                label:'Psychology',
                path:'/interests/psychology'
            },
            {
                id:'music',
                label:'Music',
                path:'/interests/music'
            },
            {
                id:'cloth_design',
                label:'Cloth Design',
                path:'/interests/cloth_design'
            },
            {
                id:'game',
                label:'Game',
                path:'/interests/game'
            },
    
        ]
    },

    {
        id:'academic_research',
        label:'Academic & Research',
        children:[
            {
                id:'publications',
                label:'Publications',
                path:'/academic_research/publications'
            },
            {
                id:'ai',
                label:'AI',
                path:'/academic_research/ai'
            },
            {
                id:'economy',
                label:'Economy',
                path:'/academic_research/economy'
            },
            {
                id:'finance',
                label:'Finance',
                path:'/academic_research/finance'
            },
            {
                id:'math',
                label:'Math',
                path:'/academic_research/math'
            },
            {
                id:'laws',
                label:'Laws',
                path:'/academic_research/laws'
            }

        ]
    }


]