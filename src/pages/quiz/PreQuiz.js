import './PreQuiz.css';
import { Navbar } from '../home/Home.js'
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from "react-router-dom";
import Result from './Result.js';   
import QuestionsData from './QuestionsData.js';
import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import AnswerOption from './AnswerOption.js';
import QuizQuestions from './QuizQuestions.js';


function PreQuizPage() {
  return (
    <div className="Quiz">
        <Navbar />
        <PreQuiz />
    </div>
  );
}

class PreQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: true,
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        this.setState({
            skip: !this.state.skip
        });
    }
    
    render() {
        return (
            <div className="PreQuizWrapper">
                <div className="PreQuizText">
                    <h1 className="howdowemat">How do we find the perfect project for you?</h1>
                    <p className="quizReason">By taking a short quiz, we can learn about the conditions in your space. We will analyze the results from the quiz and match you with projects that satisfy your constraints! This process gives your plants the greatest chance of thriving in their new environment.</p>
                    <h2 className="alreadyhav">Would you like to take the quiz?</h2>
                    <div className="buttonWrapper">
                        <NavLink className="choose" to="quiz">
                            <div className="yesiwantto">
                                Yes, I want to be matched with projects
                            </div>
                        </NavLink>
                        <NavLink className="choose" to="project-list" id="yes">
                            <div className="noiwantsom">
                                No, I want to search for projects on my own
                            </div>
                        </NavLink>
                    </div>
                    <div className="checkSkipWrapper">
                        <input
                            className="inputBox"
                            type="checkbox"
                            checked = {this.state.skip}
                            onChange={this.handleInputChange} />
                        <div className="skipWrapper">
                            <div className="skipthistu">
                                Skip this tutorial next time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreQuizPage;