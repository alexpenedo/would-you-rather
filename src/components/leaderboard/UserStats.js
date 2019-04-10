import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AvatarTitleHeader from "../question/AvatarTitleHeader";

const styles = () => ({
    paper: {
        padding: '5px 10px 20px 10px',
        marginTop: '-80px'

    },
    resume: {
        padding: '10px',
        marginTop: '-40px'

    },
    score: {
        margin: 'auto',
        color: 'white',
        borderRadius: '50%',
        background: '#3f51b5',
        width: '65px',
        height: '65px',
        fontSize: '40px',
    }
});

function UserStats(props) {
    const {classes, user} = props;
    const questions = user.questions.length;
    const answers = Object.keys(user.answers).length;
    return (
        <Card>
            <AvatarTitleHeader user={user} title={user.name}/>
            <CardContent>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Paper className={classes.resume}>
                            <p>Answered Questions: {answers}</p>
                            <p> Created Questions: {questions}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <h3>Score</h3>
                            <div className={classes.score}>{answers + questions}</div>
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

UserStats.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};


export default withStyles(styles)(UserStats)