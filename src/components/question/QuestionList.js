import React from "react";
import Question from "./Question";
import {withStyles} from "@material-ui/core";

const styles = {
    question: {
        padding: '2% 0%'
    }
};

function QuestionList(props) {
    const {questionIds, classes} = props;

    return (<ul>
        {questionIds.map((id) => (
            <div key={id} className={classes.question}>
                <Question id={id}/>
            </div>
        ))}
    </ul>)
}

export default withStyles(styles)(QuestionList);