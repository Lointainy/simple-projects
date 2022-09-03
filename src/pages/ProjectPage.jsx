import { useParams } from 'react-router-dom'

/* PROJECT */
import { WordCount } from '../projects/WordCount/WordCount'

export const ProjectPage = () => {
  const { projectName } = useParams()

  return (<div className="container my-20">
    {projectName == 'WordCount' ? <WordCount></WordCount> : ''}
  </div>)
}
