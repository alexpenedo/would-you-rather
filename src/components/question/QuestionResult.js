import React from "react";
import Chip from "@material-ui/core/Chip";
import LinearProgress from "@material-ui/core/LinearProgress";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
    chip: {
        float: 'right'
    }
});

class QuestionResult extends React.Component {

    render() {
        const {text, authedUser, votes, total, classes} = this.props;
        return (
            <div>
                <h4>Would you rather {text}?
                    {votes.includes(authedUser) &&
                    <Chip color="secondary" label="My vote" className={classes.chip}/>}
                </h4>
                <LinearProgress variant="determinate" value={votes.length / total * 100}/>
                <h6>{votes.length} out of {total} votes</h6>
            </div>
        );
    }
}

QuestionResult.propTypes = {
    text: PropTypes.string.isRequired,
    votes: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
};

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionResult))
