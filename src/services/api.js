import axios from 'axios';

export const cadastrarItem = async (data) => {
    return await axios.post('http://localhost:5000/api/item/', data);
} 