import React, {Component, Fragment} from 'react';
import './App.css';
import SignIn from "./components/signin/SignIn";
import {connect} from "react-redux";
import {handleInitialData} from "./actions/shared";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {LoadingBar} from "react-redux-loading";
import QuestionTabs from "./components/question/QuestionTabs";
import NewQuestionForm from "./components/question/NewQuestionForm";
import QuestionView from "./components/question/QuestionView";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import NavBar from "./components/topbar/NavBar";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <Router>
                    {this.props.authed ?
                        <Fragment>
                            <LoadingBar/>
                            <div className='container'>
                                <NavBar/>
                                {this.props.loading === true
                                    ? null
                                    : <div className="layout">
                                        <Route path='/' exact component={QuestionTabs}/>
                                        <Route path='/question/:id' component={QuestionView}/>
                                        <Route path='/add' component={NewQuestionForm}/>
                                        <Route path='/leaderboard' component={LeaderBoard}/>
                                    </div>}
                            </div>
                        </Fragment>
                        : <SignIn/>}
                </Router>
            </div>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authed: authedUser !== null
    }
}

export default connect(mapStateToProps)(App)