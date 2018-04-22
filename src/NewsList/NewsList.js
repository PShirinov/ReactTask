import React, {Component} from 'react'
import News from '../News/News'
import Nav from '../Nav/Nav'


 export default class NewsList extends Component {

     render() {

         const {newsData} = this.props.route
         const NewsElements = newsData.map((newsData) => <li key={newsData.id}> <News newsData={newsData}/> </li>)

         return (
             <div>
                 <Nav />
                 {NewsElements}
             </div>
         );
     }
 }