import React from "react"
import { Task } from "./task"
import { Board } from "./board";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            boardData: [
                {
                    title: "Board",
                    desc: "Description",
                    tasks: [
                        "Make coffee",
                        "Listen Music"
                    ]
                },
                {
                    title: "A cooler Board",
                    desc: "A cooler description",
                    tasks: [
                        "Make cool coffee",
                        "Listen to cooler music",
                        "Have another cool task"
                    ]
                },
                {
                    title: "An even cooler Board",
                    desc: "Swag xD",
                    tasks: [
                        "Flex on your bro's",
                        "Flex on React",
                        "Eat quick noodles",
                        "Drink leftover boiled water"
                    ]
                }
            ]
        }
    }

    renderBoards = () => {
        let boards = []
        for (let i = 0; i < this.state.boardData.length; i++) {
            boards.push (
                <Board 
                key={i} 
                title={this.state.boardData[i].title} 
                desc={this.state.boardData[i].desc} id={i} 
                tasks={this.state.boardData[i].tasks}
                />
            )
        }
        return boards
    }

    addBoard = (titleVal, descVal) => {
        this.state.boardData.push({title: titleVal, desc: descVal})
    }

    addTasks = (title) => {
        let tasks = []
        for (let i = 0; i < title.length; i++) {
            tasks.push (
                <Task 
                id="head" 
                key={i} 
                name={title[i]}>
                </Task>
            )   
        }
        return tasks
    }

    render() {
        return (
            <div id="app-container">              
                {this.renderBoards()}
            </div>
            
        )
    }
}




