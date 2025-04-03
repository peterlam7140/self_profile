import 'photoswipe/dist/photoswipe.css'
import './styles/index.css'
import './styles/main.css'
import './styles/Navigation.css'
import './styles/index.css'
import './styles/article.css'

import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import IndexPage from './pages/IndexPage';
import ProjectPage from './pages/ProjectPage';
import HomeworkPage from './pages/HomeworkPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <>
      <HashRouter basename="">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="/homeworks/:projectId" element={<HomeworkPage />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
