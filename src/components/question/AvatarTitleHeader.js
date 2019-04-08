import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
    avatar: {
        width: '80px',
        height: '80px',
    },
    title: {
        fontSize: '20px',
        textAlign: 'left'
    }
});

class AvatarTitleHeader extends React.Component {

    render() {
        const {user, title, classes} = this.props;
        return (<CardHeader
            classes={{
                title: classes.title,
            }}
            avatar={
                <Avatar aria-label="Recipe" className={classes.avatar} src={user.avatarURL}>
                </Avatar>
            }
            title={title}
        />)
    }
}

AvatarTitleHeader.propTypes = {
    user: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(AvatarTitleHeader)