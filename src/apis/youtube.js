import react from 'react';
import axios from "axios";

const KEY = "AIzaSyBKO4wDlmsDFGqnXhHrH3T-QpjJPkp6-Uc"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});