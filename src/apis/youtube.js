import axios from 'axios';

const KEY = 'AIzaSyDlRKaZloLQl-q1q6XJ7XyDxkzT0qpf53w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})