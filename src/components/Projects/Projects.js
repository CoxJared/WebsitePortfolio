import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import websiteThumbnail from './../../img/project/website-thumbnail.jpg';
import aerodynamicThumbnail from './../../img/aerodynamics/thumbnail.png';
import wireharnessThumbnail from './../../img/WiringHarness/wiring-harness.png';
import frontwingThumbnail from './../../img/aerodynamics/new wing.png';
import monocoqueThumbnail from './../../img/project/monocoque-thumbnail.png';
import assemblyThumbnail from './../../img/project/accumulator-thumbnail.png'

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {name:"Aerodynamic Development",
                type:"modelling",
                thumbnail:aerodynamicThumbnail,
                link:"/aerodynamics"},
                {name:"Team Website",
                type:"website",
                link:"https://macformularacing.com/",
                thumbnail:websiteThumbnail},
                {name:"Wiring Harness",
                type:"modelling",
                thumbnail:wireharnessThumbnail,
                link:"/wiringharness"},
                {name:"Front-wing Analysis",
                type:"modelling",
                thumbnail:frontwingThumbnail,
                link:"/frontwing"},
                {name:"Monocoque Analysis",
                type:"modelling",
                thumbnail:monocoqueThumbnail},
                {name:"Assembly Animaitons",
                type:"modelling",
                thumbnail:assemblyThumbnail}
            ]
        }
    }


    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                    <ProjectLink 
                    project={project}
                    />
                </div>))}   
                         
            </div>
        )
    }
}

export default Projects
