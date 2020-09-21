import axios from 'axios';

// axios.defaults.headers.common['X-Naver-Client-Id'] = 'FF3KvsyKdcgcEwb4pY2U';
// axios.defaults.headers.common['X-Naver-Client-Secret'] = 'oBLAjmrrCh';

  
const client = axios.create({
    withCredentials: true
});

export default client;