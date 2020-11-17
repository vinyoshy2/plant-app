import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import AnswerOption from './AnswerOption.js';
import { TransitionGroup } from 'react-transition-group';

function QuizQuestions(props) {
    function renderAnswerOptions(key) {
        return(
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    
    return (
        
        <div key={props.questionId} className="quiz">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
            />
            <Question content={props.question} />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
        
        /*
        <TransitionGroup
            className="anyname"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppearTimeout={500}
            key={props.questionId}
        >
            <div key={props.questionId} className="quiz">
                <QuestionCount
                    counter={props.questionId}
                    total={props.questionTotal}
                />
                <Question content={props.question} />
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
        </TransitionGroup>
        */
    );
}

QuizQuestions.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default QuizQuestions;