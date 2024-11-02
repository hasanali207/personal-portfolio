import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function PortfolioDetails() {

    const projects = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const project = projects.find(item => item.id === idInt);
    console.log(projects, id)
    console.log(project)

  return (
    <div>
        
    <h1>{project.title}</h1>

        
  </div>
  
  )
}
