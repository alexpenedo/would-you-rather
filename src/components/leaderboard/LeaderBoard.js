import React from "react";
import {connect} from "react-redux";
import UserStats from "./UserStats";

class LeaderBoard extends React.Component {
    render() {
        const {users, leadersIds} = this.props;
        return (<ul>
            {leadersIds.map((id) => (
                <div key={id} style={{padding: '10px'}}>
                    <UserStats user={users[id]}/>
                </div>
            ))}
        </ul>)
    }

}

function mapStateToProps({users}) {
    const leadersIds = Object.keys(users)
        .sort((a, b) => (users[b].questions.length + Object.keys(users[b].answers).length)
            - (users[a].questions.length + Object.keys(users[a].answers).length)).slice(0, 3);
    return {
        users,
        leadersIds
    }
}

export default connect(mapStateToProps)(LeaderBoard)