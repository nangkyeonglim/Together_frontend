import client from './client';

//그룹명으로 그룹 조회
export const getGroupByTitle = (title) =>
    client.get(`https://77b4d7613725.ngrok.io/api/room?title=${title}`, {withCredentials: true});

//태그로 그룹 조회
export const getGroupByTag = (tag) =>
    client.get(`https://77b4d7613725.ngrok.io/api/room/tag?tagName=${tag}`, {withCredentials: true});

//그룹팔로잉
export const followGroup = (info) =>
    client.post('https://77b4d7613725.ngrok.io/api/enroll', info, {withCredentials: true});

    
//그룹 언팔로잉
export const unFollowGroup = (groupId) =>
    client.delete(`https://77b4d7613725.ngrok.io/api/enroll/user/${groupId}`, {withCredentials: true});

//맛집 이름으로 조회
export const getPlaceByName = (placeName) =>
    client.get(`https://77b4d7613725.ngrok.io/api/place?placeName=${placeName}`, {withCredentials: true});
