import client from './client';

//네이버에서 이미지 찾기
export const findPlaceImageFromExternal = (data) =>
    client.get(`https://openapi.naver.com/v1/search/image?query=${data.query}&filter=${data.filter}`,{headers: {'X-Naver-Client-Id': 'FF3KvsyKdcgcEwb4pY2U',  'X-Naver-Client-Secret': 'oBLAjmrrCh'}});

//네이버에서 플레이스찾기
export const findPlaceFromExternal = (data) =>
    client.post(`https://openapi.naver.com/v1/search/local.json?query=${data}`, {headers: {'X-Naver-Client-Id': 'FF3KvsyKdcgcEwb4pY2U',  'X-Naver-Client-Secret': 'oBLAjmrrCh'}});