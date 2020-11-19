import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
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
	var size_val = this.props.quizResult[0];
	var light_val = this.props.quizResult[1];
	var humid_val = this.props.quizResult[2];
	var toxic_val = this.props.quizResult[3];
	var air_val = this.props.quizResult[4];
	var link_params =  {pathname: "/project-list", state: {size: size_val, light: light_val, humid: humid_val, toxic: toxic_val, air: air_val }};
        return (
            <div className="displayCenter">
                <div className="SeeResultWrapper">
                    <div className="SeeResult">
                        <Link to={link_params}>See Result</Link>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Result;
