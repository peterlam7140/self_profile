import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';

function IndexPage() {
  return (
    <div className="web-border-space">
      <h1>Welcome to My Profile</h1>
      <h2>My Projects</h2>
      <div className="grid-list">
        <ul>
          {projects.map((project:Project) => (
            <li key={project.id}>
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;