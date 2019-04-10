import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import QuestionResults from "./QuestionResults";
import QuestionAnswerForm from "./QuestionAnswerForm";
import AvatarTitleHeader from "./AvatarTitleHeader";
import {connect} from 'react-redux';

function QuestionView(props) {
    const {author, answered, question} = props;

    return (
        !question
            ? <p>Question not found!</p>
            : <Card>
                <AvatarTitleHeader title={answered ? `Asked by ${author.name}:` : `${author.name} asks:`}
                                   user={author}/>
                {answered ?
                    <CardContent>
                        <QuestionResults question={question}/>
                    </CardContent>
                    :
                    <CardContent>
                        <QuestionAnswerForm question={question}/>
                    </CardContent>
                }
            </Card>
    );
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;
    const question = props.match ? questions[props.match.params.id] : props.question;

    return question ? {
        authedUser,
        question,
        answered: Object.keys(users[authedUser].answers).includes(id),
        author: users[question.author],
    } : null
}

export default connect(mapStateToProps)(QuestionView)