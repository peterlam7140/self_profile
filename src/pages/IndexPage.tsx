import { Link } from 'react-router-dom';

import { projects as projectList, Project } from '../data/projects';
import { homeworks as homeworkList, Homework } from '../data/homeworks';

function IndexPage() {
  return (
    <div className="web-border-space">
      {/* <h1>Welcome to My Profile</h1> */}
      <h1>Work in progress</h1>
      <h2>Selected Projects</h2>
      <div className="grid-list">
        <ul>
          {projectList.map((project:Project) => (
            <li key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  <img src={import.meta.env.BASE_URL + project.thumbnail}/>
                  <h3>{project.title}</h3>
                </Link>
            </li>
          ))}
        </ul>
      </div>

      <h2>School Projects</h2>
      <div className="grid-list">
        <ul>
          {homeworkList.map((homework:Homework) => (
            <li key={homework.id}>
                <Link to={`/homeworks/${homework.id}`}>
                  <img src={import.meta.env.BASE_URL + homework.thumbnail}/>
                  <h3>{homework.title}</h3>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;