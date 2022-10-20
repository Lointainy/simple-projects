/* Router */
import { useParams } from 'react-router-dom'

/* PROJECT */
import { EnglishWord, PasswordGenerator, WordCount } from '../projects'

const ProjectPage: React.FC = () => {
  const { projectName } = useParams()

  const components = {
    WordCount,
    PasswordGenerator,
    EnglishWord,
  }

  const ProjectComponent = components[projectName]

  return (
    <div className="container my-20">
      <ProjectComponent />
    </div>
  )
}

export default ProjectPage
