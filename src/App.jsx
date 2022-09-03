import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'
import { ProjectPage } from './pages/ProjectPage'

export const App = () => {
  return (
    <div className="h-screen bg-slate-800">
      <Header></Header>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="project/:projectName" element={<ProjectPage />}></Route>
      </Routes>
    </div>
  )
}
