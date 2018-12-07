import React from "react"

export class Task extends React.Component {
    render() {
        return (
            <span id="head">{this.props.name}</span>
        )
    }
}