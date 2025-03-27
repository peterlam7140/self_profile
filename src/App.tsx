import './styles/index.css'
import './styles/main.css'
import './styles/Navigation.css'
import './styles/index.css'
import './styles/article.css'

import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import IndexPage from './pages/IndexPage';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <>
      <HashRouter basename="">
        <Navigation />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
