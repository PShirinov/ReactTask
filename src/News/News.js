import React, {Component} from 'react'


class News extends Component {
    constructor(props){
        super(props)

        this.state ={
            isOpen: false
        }

    }

    render(){

        const {newsData} = this.props
        const {isOpen} = this.state
        return(
                <div>
                    <h1>{newsData.title}</h1>
                    <p>{newsData.date}</p>
                    <button onClick={this.handleClick}>{isOpen ? "closed" : "open"}</button>
                    {this.getText()}
                </div>
        );
    }

    getText () {
        if(!this.state.isOpen) return null
        const {newsData} = this.props
        return <p>{newsData.text}</p>
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }


}

export default News