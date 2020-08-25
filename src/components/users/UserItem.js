import React, { Component } from 'react';

class UserItem extends Component {
    constructor(){
        super();
        this.state={
            id:'id',
            login:'mojombo',
            avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url:'https://github.com/mojombo'
        }

    }
    render() {
        return (
            <div className='card'>
                <img src={this.state.avatar_url} alt=''className='circle'></img>
        <h3>{this.state.login}</h3>
        <div>
                <a href={this.state.html_url}>click me</a>
            </div>
            </div>
        )
    }
}

export default UserItem
