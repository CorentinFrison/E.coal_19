import React, {Component} from 'react';
import Home from "./home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from "./constants";
import {Link} from 'react-router-dom';



class CreateAnswer extends Component{
    render(){
        let answers = [];
        console.log("img",this.props.value)
        console.log("",this.props.nbanswer)
        if(this.props.value!=="sentences"){
            for (let i=0;i<4;i++){
                answers.push(<div><input type="file" id={"answer"+i} name="answer"  accept="image/png, image/jpeg" required></input><br></br></div>);
            }

        }
        else{
            for (let i=0;i<4;i++){
               answers.push(<div><input type="text" id={"answer"+i} name="answer" required></input><br></br></div>);
            }
        }

       return(
        <div>
            <label htmlFor="answer">Answers :</label>
            {answers}
        </div>
        )
    }
}



class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:"images",
            nbanswer:2
        };
        this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(event) {
        console.log("value",event.target.value);
        console.log("type",event.target.type);
        if(event.target.type=="number"){this.setState({nbanswer:event.target.value})}
        else if(event.target.type=="radio"){
            this.setState({value:event.target.value})
        }
        }
        
        
      
    
      

  render() {
    console.log("render",this.state.nbanswer)
    let myForm;
    if(this.state.value !=="sentences"){
       myForm = (

        <div>
        <label htmlFor="question">Question :</label>
        <input type="text" id="question" name="question" required></input>
        <br></br>
        <label htmlFor="video">Video (Optionnal) :</label>
        <input type="file" id="video" name="video" accept="video/mp4,video/x-m4v,video/*"></input>
        <br></br>
        <label htmlFor="answertype">Answer type</label>
        <input type="radio" name="answertype" value="images" onChange={this.handleChange} checked></input>Images
        <input type="radio" name="answertype" value="sentences" onChange={this.handleChange}></input>Sentences
        <br></br>
        <label htmlFor="anumber">Answers numbers (2-4) :</label>
        <input type="number" id="anumber" name="anumber"  min="2" max="4" onChange={this.handleChange} required ></input>
        <br></br>
        <p>images</p>
        <CreateAnswer />
        <input type="submit" value="Submit Question" />
        </div>

       )
    }
    else{
        myForm = (
            <div>
            <label htmlFor="question">Question :</label>
            <input type="text" id="question" name="question" required></input>
            <br></br>
            <label htmlFor="video">Video (Optionnal) :</label>
            <input type="file" id="video" name="video" accept="video/mp4,video/x-m4v,video/*"></input>
            <br></br>
            <label htmlFor="answertype">Answer type</label>
            <input type="radio" name="answertype" value="images" onChange={this.handleChange}></input>Images
            <input type="radio" name="answertype" value="sentences" onChange={this.handleChange}></input>Sentences
            <br></br>
            <label htmlFor="anumber">Answers numbers (2-4) :</label>
            <input type="number" id="anumber" name="anumber"  min="2" max="4" required onChange={this.handleChange}></input>
            <br></br>
            <p>sentences</p>
            <CreateAnswer />
            <input type="submit" value="Submit Question" />
            </div>
        )
    }

    return (<div>
        {myForm}
    </div>)
  }
}

export default CreateQuestion;
