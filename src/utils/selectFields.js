export const selectStoryFields = ({ id, by, url, time, title } = {}) => ({
    id,
    by,
    url,
    time,
    title,
});

export const selectUserFields = ({ id, delay, created, karma, about, submitted } = {}) => ({
    id,
    delay,
    created,
    karma,
    about,
    submitted,
});