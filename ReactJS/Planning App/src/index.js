import React from "react"
import ReactDOM from "react-dom"
import "./style.sass"

class Image extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "Lake Tahoe in California"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.props.caption}</p>
                <div id="image"></div>
            </div>
        )
    }
}

ReactDOM.render(<Image title="Desolation Wilderness" caption="Wildnerness area in Lake Tahoe, California"/>, document.getElementById("react-container"))