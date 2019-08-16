import React, {Component} from 'react';

export const context = React.createContext(null);

export default class DataContext extends Component
{
    constructor(props)
    {
        super(props);
        this.getThreads = this.getThreads.bind(this);
        this.getName = this.getName.bind(this);
        this.getThread = this.getThread.bind(this);
    }

    getThread(id,array)
    {


    }

    getName(author)
    {
        for(let i = 0; i < this.state.users.length; i++)
        {
            if(this.state.users[i].id === author)
                return this.state.users[i].name;
        }
    }

    getThreads()
    {
        let threads = [];
        let comments = this.state.comments;
        for(let i = 0; i < comments.length; i++)
        {
            if(comments[i].parent === null)
            {
                threads.push({
                    subject: comments[i].subject,
                    body: comments[i].body,
                    id:comments[i].id,
                    parent: null,
                    name : this.getName(comments[i].author)
                });
            }   
        }
        return threads;
    }

    componentDidMount()
    {

        fetch('./information.json')
        .then((res) => 
        {
            return res;
        })
        .then((data) =>
        {
            this.setState({users:
                [
                    {
                       "id": "1",
                       "name": "Alice"
                    },
                    {
                       "id": "2",
                       "name": "Bob"
                    },
                    {
                       "id": "3",
                       "name": "Carol"
                    }
                 ],
                comments:
                [
                {
                    "id": "1",
                    "author": "1",
                    "subject": "My public key",
                    "body": "`eWFoTTNBZVBlZWw5aG9pdGg4ZWVuOXRob2U3b29qNHUK`",
                    "parent": null
                 },
                 {
                    "id": "2",
                    "author": "2",
                    "subject": "We should verify over another channel",
                    "body": "",
                    "parent": "1"
                 },
                 {
                    "id": "3",
                    "author": "1",
                    "subject": "",
                    "body": "Agreed, call me",
                    "parent": "2"
                 },
                 {
                    "id": "4",
                    "author": "3",
                    "subject": "Sneakernet ftw",
                    "body": "I dropped off a USB drive with my key!",
                    "parent": null
                 },
                 {
                    "id": "5",
                    "author": "2",
                    "subject": "Okay",
                    "body": "I have it now.",
                    "parent": "3"
                 },
                 {
                    "id": "6",
                    "author": "1",
                    "subject": "Test comment",
                    "body": "Please ignore",
                    "parent": "4"
                 },
                 {
                    "id": "7",
                    "author": "3",
                    "subject": "",
                    "body": "I'll do this too",
                    "parent": "2"
                 }
              ]
            , favoriteComments:
            [
                "1"
             ], getThreads:this.getThreads});
        })
    }

    render()
    {
        return(<context.Provider getThreads={this.getThreads} value={this.state}>{this.props.children}</context.Provider>);
    }
}