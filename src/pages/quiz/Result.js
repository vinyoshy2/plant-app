import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';
/*
function Result(props) {
    console.log(props.quizResult);
    return (
        <div className="result">
            Your result :<strong>{props.quizResult}</strong>! (change later)
        </div>
    );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};
*/

class Result extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="displayCenter">
                <div className="SeeResultWrapper">
                    <div className="SeeResult">
                        See Result
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Result;