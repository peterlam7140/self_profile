import { useState } from 'react';

import { projects, Project } from '../data/projects';

import NavLinkNone from '../components/NavLinkNone';
import NavLinkCustom from '../components/NavLinkCustom';

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header>
      <div className="web-border-space">
        <div id="header-wrapper">
          <div id="nav-overlay" className={toggleMenu ? "active" : ""} onClick={()=>{setToggleMenu(!toggleMenu)}}></div>
          <nav className={toggleMenu ? "active" : ""}>
            <ul>
              <li><NavLinkCustom to="/">Home</NavLinkCustom></li>
              <li>
                <NavLinkNone to="/projects">Project</NavLinkNone>
                <div className="nav-lv2">
                  <ul>
                    {projects.map((project:Project) => (
                      <li key={project.id}>
                          <NavLinkCustom to={`/projects/${project.id}`}>{project.title}</NavLinkCustom>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li><NavLinkCustom to="/tasks">Task Manager</NavLinkCustom></li>
            </ul>
          </nav>

          <div className={toggleMenu ? "hamburger checked" : "hamburger"} onClick={() => { setToggleMenu(!toggleMenu) }}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </header>

  );
}

export default Navigation;