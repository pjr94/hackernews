// import React, { Fragment, useState, useEffect, useReducer } from 'react';
import axios from 'axios'

import { selectStoryFields, selectUserFields } from './utils/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl =  `${baseUrl}user/`
export const topStoriesUrl = `${baseUrl}topstories.json`
export const bestStoriesUrl = `${baseUrl}beststories.json`
export const askStoriesUrl = `${baseUrl}askstories.json`
export const showStoriesUrl = `${baseUrl}showstories.json`
export const jobStoriesUrl = `${baseUrl}jobstories.json`

export const getStory = async storyId => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    // && return: returns first fasly (something which evaluates to false) value or the last value if no falsy values are found
    .then(({ data }) => data && selectStoryFields(data));

  return result;
}

export const getStoryIds = async (listType) => {
  let result = '';

  switch (listType) {
    case "bestStories":
      result = await axios.get(bestStoriesUrl).then(({ data }) => data);
      break;
    case "newStories":
      result = await axios.get(newStoriesUrl).then(({ data }) => data);
      break;
    case "askStories":
      result = await axios.get(askStoriesUrl).then(({ data }) => data);
      break;
    case "showStories":
      result = await axios.get(showStoriesUrl).then(({ data }) => data);
      break;
    case "jobStories":
      result = await axios.get(jobStoriesUrl).then(({ data }) => data);
      break;
    default:
      // newStories
      result = await axios.get(topStoriesUrl).then(({ data }) => data);
  }


  return result;
}


export const getUser = async userId => {
  const result = await axios
  .get(`${userUrl + userId}.json`)
  // && return: returns first fasly (something which evaluates to false) value or the last value if no falsy values are found
  .then(({ data }) => data && selectUserFields(data));

return result;
}