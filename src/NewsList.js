import React, {Component} from 'react'
import News from './News'
import Nav from './Nav'


 export default class NewsList extends Component {

     render() {

        const {newsData} = this.props.route

         return (
             <div>
                 <Nav />
                 <News newsData={newsData[0]}/>
                 <News newsData={newsData[1]}/>
             </div>
         );
     }
 }