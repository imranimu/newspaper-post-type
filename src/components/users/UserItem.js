import React, { Component } from 'react'

export class UserItem extends Component {

    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        }
    }
    
    render() {
        return (
            <div>
                UserItem
            </div>
        )
    }
}

export default UserItem
