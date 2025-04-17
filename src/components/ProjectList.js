import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;


