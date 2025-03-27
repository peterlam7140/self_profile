import { useParams } from 'react-router-dom';

import { homeworks as homeworkList, Homework } from '../data/homeworks';

import Article from '../components/Article';
import NavLinkCustom from '../components/NavLinkCustom';

function HomeworkPage() {
  const { projectId } = useParams();
  const homework = homeworkList.find((p) => p.id === projectId);

  const projectsList = <ul>
    {homeworkList.map((homework:Homework) => (
      <li key={homework.id}>
          <NavLinkCustom to={`/homeworks/${homework.id}`}>{homework.title}</NavLinkCustom>
      </li>
    ))}
  </ul>

  const contextNote = (homework) ? homework.element : <div>Article not found</div>
  const bannerNote = (homework) ? <img src={ import.meta.env.BASE_URL + homework.banner }/> : null

  return (
    <Article banner={ bannerNote } projectsList={ projectsList }>{ contextNote }</Article>
  );
}

export default HomeworkPage;