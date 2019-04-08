import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import AvatarTitleHeader from "./AvatarTitleHeader";

const styles = () => ({
    actions: {
        display: 'flex',
    },
    viewPoll: {
        margin: 'auto',
        width: '60%'
    }
});

class Question extends React.Component {
    handleViewPoll = () => {
        this.props.history.push(`/question/${this.props.id}`)
    };

    render() {
        const {classes, author, text} = this.props;
        const title = `${author.name} asks:`;
        return (
            <Card>
                <AvatarTitleHeader title={title} user={author}/>
                <CardContent>
                    <Typography component="p">
                        Would you rather {text}...
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Button variant="contained" onClick={this.handleViewPoll} color='primary'
                            className={classes.viewPoll}>
                        View poll
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id];
    return {
        authedUser,
        question,
        author: users[question.author],
        text: question.optionOne.text
    }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Question)))