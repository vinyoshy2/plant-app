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
                    <div className="howdowemat">
                        How do we match the most exciting projects for you?
                    </div>
                    <div className="alreadyhav">
                        Already have ideas of what plants for you project?
                    </div>
                    <div className="buttonWrapper">
                        <NavLink className="choose" to="project-list" id="yes">
                            <div className="yesiwantto">
                                Yes, I want to search for certain plants.
                            </div>
                        </NavLink>
                        <NavLink className="choose" to="quiz">
                            <div className="noiwantsom">
                                No, I prefer taking a quiz.
                            </div>
                        </NavLink>
                    </div>
                    <div className="quizReason">
                        <div className="aquizmayhe">
                            A quiz may help us know more about your preferences.
                        </div>
                        <div className="projectrec">
                            Project recommendation will then be made based on your conditions.
                        </div>
                        <div className="aprojectwi">
                            A project will consist of one or two suggested plants and several add-on plants for you to choose.
                        </div>
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