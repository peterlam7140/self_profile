import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { projects, Project } from '../data/projects';

import NavLinkCustom from '../components/NavLinkCustom';

function ProjectPage() {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);

  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  return (
    <article>
      <div className="article-banner"></div>
      <div className="web-border-space">
        <div className="article-wrapper">
          <aside>
            <button className="submenu-btn" onClick={()=>{ setIsOpenSubmenu(!isOpenSubmenu) }}>Sub Menu</button>
            <nav className={(isOpenSubmenu) ? "active" : ""}>
              <ul>
                {projects.map((project:Project) => (
                  <li key={project.id}>
                      <NavLinkCustom to={`/projects/${project.id}`}>{project.title}</NavLinkCustom>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="article-content">
            {project ? project.element : <div>Project not found</div>}
          </main>
        </div>
      </div>
    </article>
  );
}

export default ProjectPage;