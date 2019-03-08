import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';



class Quiz extends Component {

    render() {


	return (
    	  <div className="categorie" >
            
	        <Link  to={'/quizz/'+this.props.quizz._id}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon} /><h1 className="categorie_title">{this.props.quizz.name}</h1></Link>  
	    </div>
	);
    }
}

export default Quiz;