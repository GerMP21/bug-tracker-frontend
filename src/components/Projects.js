import React from 'react';
import './Projects.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            selectedProject: {},
            isLoaded: false
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:5000/api/projects')
        .then((res) => res.json())
        .then((projects) => {
            this.setState({
                projects: projects,
                isLoaded: true
            })
        })
    }

    render() {
        return (
        <div>
            <h1>Projects</h1>
            <div className='project-list'>
                {this.state.projects.map((project) => {
                    return (
                        <div className='project' key={project.id} onClick={() => this.setState({selectedProject: project})}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        );
    }
}

export default Projects;