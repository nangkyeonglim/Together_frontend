import client from './client';

//모든 그룹 조회(토큰 필요 x)
export const getAllGroup = () =>
    client.get('https://77b4d7613725.ngrok.io/api/all/room', {withCredentials: true});


//GroupId로 그룹 조회
export const getGroupByGroupId = (groupId) =>
    client.get(`https://77b4d7613725.ngrok.io/api/room/${groupId}`, {withCredentials: true});

//유저가 속한 모든 그룹 조회
export const getGroupByUserId = (userId) =>
    client.get(`https://77b4d7613725.ngrok.io/api/enroll/all/room/${userId}`, {withCredentials: true});

//그룹 생성
export const addGroup = (group) =>
    client.post('https://77b4d7613725.ngrok.io/api/room', group, {withCredentials: true});

//그룹 수정
export const editGroup = (info) =>
    client.put(`https://77b4d7613725.ngrok.io/api/room/${info.roomId}`, info.formData, {withCredentials: true});

//그룹 삭제
export const deleteGroup = (groupId) =>
    client.delete(`https://77b4d7613725.ngrok.io/api/room/${groupId}`, {withCredentials: true});

//그룹에 속한 모든 유저 조회
export const getAllGroupUser = (groupId) =>
    client.get(`https://77b4d7613725.ngrok.io/api/enroll/all/user/${groupId}`, {withCredentials: true});



    
    
    