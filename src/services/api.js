import axios from 'axios';

export const cadastrarItem = async (data) => {
    return await axios.post('http://localhost:5000/api/item/', data);
} 

export const buscarTodosItens = async () => {
    return await axios.get('http://localhost:5000/api/item/');
} 

export const buscarItemPorID = async (id) => {
    return await axios.get(`http://localhost:5000/api/item/${id}`);
} 