import React from "react"
import { Task } from "./task"

export class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            height: {height: 225 + "px"}
        }
    }

    addTasks = (title) => {
        let tasks = []
        for (let i = 0; i < title.length; i++) {
            tasks.push (
                <Task id="head" key={i} name={title[i]}></Task>
            )   
        }
        return tasks
    }

    componentDidMount() {
        this.setState({height: {height:
            ((document.getElementById(this.props.id).childNodes.length - 2) * 75) + 255 + "px"   
        }})
    }

    render() {
        return (
            <div className="board-container" id={this.props.id} style={this.state.height}>
                <span id="title">{this.props.title}</span>
                <p id="desc">{this.props.desc}</p>
                {this.addTasks(this.props.tasks)}
            </div>
        )
    }
}