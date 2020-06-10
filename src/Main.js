import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { StoriesContainer } from './StoriesContainer.js';

// Default / Home
function TopStories(){
    return <StoriesContainer listType={"topStories"}/>;
}

function NewStories(){
    return <StoriesContainer listType={"newStories"}/>;
}

function BestStories(){
    return <StoriesContainer listType={"bestStories"}/>;
}

function AskStories(){
    return <StoriesContainer listType={"askStories"}/>;
}

function ShowStories(){
    return <StoriesContainer listType={"showStories"}/>;
}

function JobsStories(){
    return <StoriesContainer listType={"jobStories"}/>;
}

// <Route path='/ask' component={AskStories}/>

function Main(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={TopStories}/>
                <Route path='/new' component={NewStories}/>
                <Route path='/best' component={BestStories}/>
               
                <Route path='/show' component={ShowStories}/>
                <Route path='/jobs' component={JobsStories}/>
            </Switch>
            
        </div>
    )
}

export default Main;