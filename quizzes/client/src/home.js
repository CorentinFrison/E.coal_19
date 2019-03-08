import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import Quiz from "./QuizzThumbnail.js";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {quizzes : []};
    }



	componentDidMount(){
        this.loadData();            
              
  }



  async loadData() {
      const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizzes')).data;  // We need to wait for the response.
      this.setState({quizzes: quizzes});
      console.log(axios,'axios');
  }; 


    render() {
        // transform/map objects in quizzes into <Quizz q=> elemnts
        let quizze= this.state.quizzes.map((q,i)=> <Quiz key={i} quizz={q}/>);
	return (
    	  <div>
              <header id="header">
                    <div id="visible_header">
                        <div class="header-toogle">
                            <a href="#header" id="header-toogle-open"> &#9776; </a>
                            <a href="#" id="header-toogle-close"> &#9747; </a>
                        </div>
                        <h2> the e.miners quiz</h2>
                     </div>
        
                    <nav id= "burger_menu">
                    <ul>
                        <li><strong>Menu</strong></li>
                        <li class="menu_categorie"><Link  to={'/'}>Home</Link></li>
                        <li class="menu_categorie"> <Link  to={'/'}>Find a Quiz</Link></li>
                        <li class="menu_categorie"> <Link  to={'/createquiz'}>Create a Quiz</Link></li>
                        <li class="menu_categorie"> <Link  to={'/'}>Login</Link></li>
                        <li class="menu_categorie"> <Link  to={'/'}>Register</Link></li>
                        <li class="menu_categorie"> <Link  to={'/about'}>About</Link></li>
                    </ul>
    </nav>
	</header>
    <div className="categories_box">
        {quizze}
        </div>
	  </div>
	);
    }
}

export default Home;