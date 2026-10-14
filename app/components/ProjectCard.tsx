import type { Project } from "~/types";
import {Link} from 'react-router'


const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link className='block transform transition duration-300 hover:scale-[1.02]' to={`/projects/${project.id}`}>
             <div
           
            className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 overflow-hidden transition hover:shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-5">
              <p className="text-3xl font-semibold text-blue-400 mb-1">
                {project.title}
              </p>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className='flex justify-between text-sm text-gray-400 items-center'>
                <span>{project.category}</span>
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div> 
        </Link>
    );
}
 
export default ProjectCard;