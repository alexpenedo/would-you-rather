import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withRouter} from "react-router-dom";
import ProfileBar from "./ProfileBar";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    question: {
        padding: '2% 25%'
    }
};

class NavBar extends React.Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };
    handleNew = () => {
        this.handleClose();
        this.props.history.push(`/add`)
    };
    handleHome = () => {
        this.handleClose();
        this.props.history.push(`/`)
    };
    handleLeader = () => {
        this.handleClose();
        this.props.history.push(`/leaderboard`)
    };

    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} aria-owns={open ? 'menu-appbar' : undefined}
                                        aria-haspopup="true" onClick={this.handleMenu} color="inherit"
                                        aria-label="Menu">
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleHome}>Home</MenuItem>
                                <MenuItem onClick={this.handleNew}>New question</MenuItem>
                                <MenuItem onClick={this.handleLeader}>Leader board</MenuItem>
                            </Menu>

                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Would you rather?
                            </Typography>
                            <ProfileBar/>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles)(NavBar));