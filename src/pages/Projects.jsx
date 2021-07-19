
import React from "react"
import Thumbnail from '../components/Thumbnail';
import '../App.css';
import logo from '../logo.svg';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>

      <Thumbnail
        link="./projects"
        image={logo}
        title=""
        category=""
      />
    </div>
  )
}
 
export default Projects;