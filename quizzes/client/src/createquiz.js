import React, {Component} from 'react';
import Home from "./home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from "./constants";
import {Link} from 'react-router-dom';
import CreateQuestion from "./createQuestion";


import axios from 'axios';

class CreateQuiz extends Component {
 

    sendQuiz(e){
             e.preventDefault();
        let qname=document.getElementById('quizname').value;
        let qkey=document.getElementById('quizkey').value.split(";");
             const selectedFile = e.target.image.files[0];
             const data = new FormData();
             data.append('file', selectedFile, selectedFile.name);
             console.log(selectedFile.name);
             console.log(data);
             axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res", res));
            axios.post(HTTP_SERVER_PORT + 'createquiz', {  // The json object to add in the collection
            name:qname,
            published:true,
            keywords:qkey,
            icon:selectedFile.name,

            scores:[]
         }).then(res => {
           if (res.status === 200)
           console.log("test");
     //        this.loadData();                     // If everything is ok, reload data in order to upadate the component
           else
             console.log("Failed to add quiz");
         }).catch(err => console.log("Error =>", err));
    }



    render() {
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
        <div className="quiz-creation">
        <form className="quiz-form">

        <h3 className="quiz-form-title">Create a new Quiz !</h3>
        <div className="formfirstline">
        <label htmlFor="name">Quiz name :</label>
        <input type="text" id="quizname" name="name" required></input>
        </div>
        <br></br>
        <label className="label-file" htmlFor="image">Quiz picture :</label>
        <input className="input-file" type="file" id="quizimage" name="image" accept="image/png, image/jpeg" required></input>
   
        <br></br>
        <label htmlFor="keywords">Keywords (separated by semicolons) :</label>
        <input type="text" id="quizkey" name="keywords" required></input>
        <br></br>
        <CreateQuestion />
        <br></br>
        <input type="submit"  value="Send"/>
        </form>
        </div>
        </div>
        
        
      )
   }
 }
 
 export default CreateQuiz;