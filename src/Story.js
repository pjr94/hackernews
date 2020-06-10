import React, { useState, useEffect, Fragment } from 'react';
import { getStory, getUser } from './APIGet';
import { Switch, Route, Link } from 'react-router-dom';

import './styles/styles.css'

import {mapTime}  from './utils/mapTime';

export const Story = ({ storyId, index }) => {

    
    const [story, setStory] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
        getUser(storyId.userId).then(data => data && setUser(data));
    }, []);

    return story && story.url ? (
        <div className="story raisedbox">
            <div className="index">
                {index}.
            </div>
            <div>
                <p><a href={story.url}>{story.title}</a></p>
                <p><span className="bold">By: </span><span className="italic">{story.by}</span>
                <span className="timestamp"><span className="bold">Posted: </span><span className="italic">{mapTime(story.time)}</span></span></p>
               
            </div>

        </div>
    ) : null;
}

