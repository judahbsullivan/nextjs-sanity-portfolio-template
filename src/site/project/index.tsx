import { ProjectProps } from "@/src/types/types"
import ProjectPageLayout from "./ProjectLayout"



export interface ProjectPageProps{
    project: ProjectProps
}




export default function ProjectPage({project}: ProjectPageProps){
    return <ProjectPageLayout project={project}/>
}