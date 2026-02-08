import { BrowserRouter, Routes, Route } from 'react-router-dom'
// layout界面
import Layout from './layout/layout'
// about界面
import AboutPage from './pages/about'
//projects界面
import AlphaHub from './pages/projects/alpha_hub'
import AgentsClusterPage from './pages/projects/agents_cluster'

// web3界面
import DataAnalysis from './pages/web3/data_analysis'
import ProjectsReserch from './pages/web3/projects_research'
import LawsRegulations from './pages/web3/laws_regulations'

// interests界面
import Modeling from './pages/interests/3D_modeling'
import Literary from './pages/interests/literary'
import Podcast from './pages/interests/podcast'
import Anime from './pages/interests/anime'
import ClothDesign from './pages/interests/cloth_design'
import CraftPaint from './pages/interests/craft_paint'
import Film from './pages/interests/film'
import Game from './pages/interests/game'
import Music from './pages/interests/music'
import Photography from './pages/interests/photography'
import Psychology from './pages/interests/psychology'

// academic research界面
import Publications from './pages/academic_research/publications'
import AIResearch from './pages/academic_research/ai'
import EconomyResearch from './pages/academic_research/economy'
import MathResearch from './pages/academic_research/math'
import FinanceResearch from './pages/academic_research/finance'
import Laws from './pages/academic_research/laws'







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        {/** 关于界面的路由 */}
          <Route index element={<AboutPage/>}></Route>
          {/** 项目界面路由 */}
          <Route path='/projects/alpha_hub' element={<AlphaHub/>}></Route>
          <Route path='/projects/agents_cluster' element={<AgentsClusterPage/>}></Route>

          {/** web3界面路由 */}
          <Route path='/web3/data_analysis' element={<DataAnalysis/>}></Route>
          <Route path='/web3/projects_research' element={<ProjectsReserch/>}></Route>
          <Route path='/web3/laws_regulations' element={<LawsRegulations/>}></Route>

          {/** interests界面路由 */}
          <Route path='/interests/3d_modeling' element={<Modeling/>}></Route>
          <Route path='/interests/literary' element={<Literary/>}></Route>
          <Route path='/interests/podcast' element={<Podcast/>}></Route>
          <Route path='/interests/anime' element={<Anime/>}></Route>
          <Route path='/interests/cloth_design' element={<ClothDesign/>}></Route>
          <Route path='/interests/craft_paint' element={<CraftPaint/>}></Route>
          <Route path='/interests/film' element={<Film/>}></Route>
          <Route path='/interests/game' element={<Game/>}></Route>
          <Route path='/interests/music' element={<Music/>}></Route>
          <Route path='/interests/photography' element={<Photography/>}></Route>
          <Route path='/interests/psychology' element={<Psychology/>}></Route>

          {/** academic research界面路由 */}
          <Route path='/academic_research/publications' element={<Publications/>}></Route>
          <Route path='/academic_research/ai' element={<AIResearch/>}></Route>
          <Route path='/academic_research/economy' element={<EconomyResearch/>}></Route>
          <Route path='/academic_research/math' element={<MathResearch/>}></Route>
          <Route path='/academic_research/finance' element={<FinanceResearch/>}></Route>
          <Route path='/academic_research/laws' element={<Laws/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
