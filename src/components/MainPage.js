import React, {Component} from 'react';
import {context} from '../dataContext';
import Comment from './Comment';
import "../style/comment.css";
import {Link} from 'react-router-dom';




export default class MainPage extends Component
{
    constructor(props)
    {
        super(props);

        this.renderThreads = this.renderThreads.bind(this);
    }

    renderThreads(arrayOfThreads)
    {
        let comments = [];
        for( let i = 0; i < arrayOfThreads.length; i++)
        {
            comments.push(<li key={i}><Comment entry = {arrayOfThreads[i]}></Comment>
            <Link to={`/thread/${arrayOfThreads[i].id}`}>View Thread</Link></li>);
        }
        return comments;
    }

    render()
    {
        return (
            <section>
                <context.Consumer>
                    {
                        (value)=>
                        {
                            if(value !== null)
                            {
                                return <ul className="Comment">{this.renderThreads(value.getThreads())}</ul>

                            }
                        }
                    }
                </context.Consumer>
            </section>
        );
    }
}