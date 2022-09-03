import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'

export const App = () => {
  return (
    <div className="h-screen bg-slate-800">
      <Header></Header>
      <MainPage></MainPage>
    </div>
  )
}
