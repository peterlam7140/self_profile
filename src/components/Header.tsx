import { useState } from 'react';

import { projects as projectList, Project } from '../data/projects';
import { homeworks as homeworkList, Homework } from '../data/homeworks';

import NavLinkNone from './NavLinkNone';
import NavLinkCustom from './NavLinkCustom';

function Header() {
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
                    {projectList.map((project:Project) => (
                      <li key={project.id}>
                          <NavLinkCustom to={`/projects/${project.id}`}>{project.title}</NavLinkCustom>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <NavLinkNone to="/homeworks">Homework</NavLinkNone>
                <div className="nav-lv2">
                  <ul>
                    {homeworkList.map((homework:Homework) => (
                      <li key={homework.id}>
                          <NavLinkCustom to={`/homeworks/${homework.id}`}>{homework.title}</NavLinkCustom>
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

export default Header;