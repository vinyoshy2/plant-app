import './Quiz.css';
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


function Quiz() {
  return (
    <div className="Quiz">
        <Navbar />
        <QuizWrapper />
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
                        <div className="choose">
                            <div className="noiwantsom">
                                No, I want some recommendations.
                            </div>
                        </div>
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

class QuizWrapper extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answerCount: [],
            result: '',
        };
        
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
    
    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (false) {
        //while (0 !== currentIndex) {
            
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = -1;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    
    componentDidMount() {
        const shuffledAnswerOptions = QuestionsData.map((question) => this.shuffleArray(question.answers));
        
        this.setState({
            question: QuestionsData[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }
    
    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: QuestionsData[counter].question,
            answerOptions: QuestionsData[counter].answers,
            answer: ''
        });
    }
    
    setUserAnswer(answer) {
        this.setState((state) => ({
            answerCount: [
                ...state.answerCount,
                answer
            ],
            answer: answer
        }));
        console.log(this.state.answerCount);
    }
    
    getResults() {
        return this.state.answerCount;
    }
    
    setResults(result) {
        this.setState({result: result});
    }
    
    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < QuestionsData.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
            //setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }
    
    renderQuiz() {
        return (
            <QuizQuestions
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={QuestionsData.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }
    
    renderResult() {
        return (
            <Result quizResult={this.state.result} />
        );
    }
    
    render() {
        return (
            <div className="QuizQuestionsWrapper">
                
                <div className="container">
                    {this.state.result ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        )
    }
}
                /*
                <div className="StartQuizWrapper">
                    <div className="startthequ">
                        Start the quiz
                    </div>
                </div>
                */

                /*
                <Quiz
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    questionId={this.state.questionId}
                    question={this.state.question}
                    questionTotal={QuestionsData.length}
                    onAnswerSelected={this.handleAnswerSelected}
                />
                */

export default Quiz;