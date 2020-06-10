import React, { Fragment, useState, useEffect, useReducer } from 'react';

import { getStoryIds } from './APIGet.js';
import { Story } from './Story';

export const StoriesContainer = ({ listType }) => {
    const [storyIds, setStoryIds] = useState([]);
  //  const [story, setStory] = useState();

  // Once component is loaded, then run ([] is variables to watch to trigger rerender)
    useEffect(() => {
        getStoryIds(listType).then(data => setStoryIds(data));

    }, []);

    storyIds.splice(50);
    return storyIds.map((storyId, index) => (
        <Story key={storyId} index={index} storyId={storyId} />
    ));
};