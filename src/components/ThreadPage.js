import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {context} from '../dataContext';


export default class ThreadPage extends Component
{

    render()
    {
        return (<section>
            <context.Consumer>
                {
                    (value)=>
                    {
                        return (<h1>Welcome to thread!</h1>);
                    }
                }
            </context.Consumer>
            <Link to={'/'}>Return</Link>
        </section>);
    }
}