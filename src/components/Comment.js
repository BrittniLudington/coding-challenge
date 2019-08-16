import React, {Component} from 'react';

export default class Comment extends Component
{

    render()
    {   
        let entry = this.props.entry;
        // comment format will be: Subject, name, body
        return (<div>
            <h2>{entry.subject}</h2>
            <h3>{entry.name}</h3>
            <p>{entry.body}</p>
        </div>);
    }
}