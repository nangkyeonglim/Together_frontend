import client from './client';

//모든 그룹 조회(토큰 필요 x)
export const getAllGroup = () =>
    client.get('https://ddd9a8ac9768.ngrok.io/api/room/all', {withCredentials: true});

//그룹명으로 그룹 조회
export const getGroupByTitle = ({ title }) =>
    client.get(`https://ddd9a8ac9768.ngrok.io/api/room?title=${title}`, {withCredentials: true});

//태그로 그룹 조회
export const getGroupByTag = ({ tag }) =>
    client.get(`https://ddd9a8ac9768.ngrok.io/api/room/tag?tagName=${tag}`, {withCredentials: true});

//유저가 속한 모든 그룹 조회
export const getGroupByUserId = ({ userId }) =>
    client.get(`https://ddd9a8ac9768.ngrok.io/api/enroll/all/room/${userId}`, {withCredentials: true});