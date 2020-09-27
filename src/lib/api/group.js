import client from './client';

//모든 그룹 조회(토큰 필요 x)
export const getAllGroup = () =>
    client.get('https://cddf7de2026a.ngrok.io/api/all/room', {withCredentials: true});

//그룹명으로 그룹 조회
export const getGroupByTitle = (title) =>
    client.get(`https://cddf7de2026a.ngrok.io/api/room?title=${title}`, {withCredentials: true});

//태그로 그룹 조회
export const getGroupByTag = (tag) =>
    client.get(`https://cddf7de2026a.ngrok.io/api/room/tag?tagName=${tag}`, {withCredentials: true});

//GroupId로 그룹 조회
export const getGroupByGroupId = (groupId) =>
    client.get(`https://cddf7de2026a.ngrok.io/api/room/${groupId}`, {withCredentials: true});

//유저가 속한 모든 그룹 조회
export const getGroupByUserId = (userId) =>
    client.get(`https://cddf7de2026a.ngrok.io/api/enroll/all/room/${userId}`, {withCredentials: true});

//그룹 생성
export const addGroup = (group) =>
    client.post('https://cddf7de2026a.ngrok.io/api/room', group, {withCredentials: true});

//그룹에 속한 모든 유저 조회
export const getAllGroupUser = (groupId) =>
    client.get(`https://cddf7de2026a.ngrok.io/api/enroll/all/user/${groupId}`, {withCredentials: true});



    
    
    