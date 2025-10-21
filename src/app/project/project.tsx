'use client'

interface Project {
  id: number
  title: string
  description: string
  url: string
}

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: {
  project: Project
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}) {
  return (
    <article>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.url}
      </a>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button onClick={() => onEdit(project.id)}>Edit</button>
        <button
          onClick={() => onDelete(project.id)}
          style={{ backgroundColor: '#B22222' }}
        >
          Delete
        </button>
      </div>
    </article>
  )
}
