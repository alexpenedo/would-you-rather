import React from "react";
import QuestionResult from "./QuestionResult";


class QuestionResults extends React.Component {
    render() {
        const {question} = this.props;
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        return (<div>
            <h3>Results</h3>
            <QuestionResult text={question.optionOne.text} votes={question.optionOne.votes} total={totalVotes}/>
            <QuestionResult text={question.optionTwo.text} votes={question.optionTwo.votes} total={totalVotes}/>
        </div>)
    }
}

export default QuestionResults
