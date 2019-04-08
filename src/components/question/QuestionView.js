import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import QuestionResults from "./QuestionResults";
import QuestionAnswerForm from "./QuestionAnswerForm";
import AvatarTitleHeader from "./AvatarTitleHeader";
import {connect} from "react-redux";

class QuestionView extends React.Component {

    render() {
        const {author, answered, question} = this.props;
        const title = answered ? `Asked by ${author.name}:` : `${author.name} asks:`;

        return (
            <Card>
                <AvatarTitleHeader title={title} user={author}/>
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
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;
    const question = props.match ? questions[props.match.params.id] : props.question;
    return {
        authedUser,
        question,
        answered: Object.keys(users[authedUser].answers).includes(id),
        author: users[question.author],
    }
}

export default connect(mapStateToProps)(QuestionView)