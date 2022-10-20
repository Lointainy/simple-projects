/* Router */
import { Route, Routes } from 'react-router-dom'

/* Components */
import { Header } from './components'
import { MainPage, ProjectPage } from './pages'

const App = () => {
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

export default App
