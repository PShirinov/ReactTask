import React, {Component} from 'react'


class News extends Component {

    render(){

        const {newsData} = this.props

        return(
                <div>
                    <h1>{newsData.title}</h1>
                    <p>{newsData.text}</p>
                    <p>{newsData.date}</p>
                </div>
        );
    }
}

export default News