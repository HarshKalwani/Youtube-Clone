import axios from "axios";



const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
     maxResults : '50'
    },
    headers: {
      'X-RapidAPI-Key':'884b9b21f5mshd80d4c8e7dea4dfp1df95fjsn8d56d73ab8f6' ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}