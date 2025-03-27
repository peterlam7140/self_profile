import { useParams } from 'react-router-dom';

import { projects as projectList, Project } from '../data/projects';

import Article from '../components/Article';
import NavLinkCustom from '../components/NavLinkCustom';

function ProjectPage() {
  const { projectId } = useParams();
  const project = projectList.find((p) => p.id === projectId);

  const projectsList = <ul>
    {projectList.map((project:Project) => (
      <li key={project.id}>
          <NavLinkCustom to={`/projects/${project.id}`}>{project.title}</NavLinkCustom>
      </li>
    ))}
  </ul>

  const contextNote = (project) ? project.element : <div>Article not found</div>
  const bannerNote = (project) ? <img src={import.meta.env.BASE_URL + project.banner}/> : null

  return (
    <Article banner={ bannerNote } projectsList={ projectsList }>{ contextNote }</Article>
  );
}

export default ProjectPage;