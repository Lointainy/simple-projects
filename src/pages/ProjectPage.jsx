import React from 'react'

import { useParams } from 'react-router-dom'

/* PROJECT */
import { PasswordGenerator } from '../projects/PasswordGenerator/PasswordGenerator'
import { WordCount } from '../projects/WordCount/WordCount'

export const ProjectPage = () => {
  const { projectName } = useParams()

  const components = {
    WordCount,
    PasswordGenerator,
  }

  const ProjectComponent = components[projectName]

  return (
    <div className="container my-20">
      <ProjectComponent />
    </div>
  )
}
