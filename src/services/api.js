import axios from 'axios';

export const cadastrarItem = async (data) => {
    return await axios.post('http://localhost:5000/api/item/', data, {
        headers: {'Content-Type': 'multipart/form-data' }
    });
}

export const atualizarItem = async (id, data) => {
    return await axios.put(`http://localhost:5000/api/item/edit/${id}`, data);
} 

export const buscarTodosItens = async () => {
    return await axios.get('http://localhost:5000/api/item/');
} 

export const buscarItemPorID = async (id) => {
    return await axios.get(`http://localhost:5000/api/item/${id}`);
} 

export const desativarItem = async (id) => {
    return await axios.put(`http://localhost:5000/api/item/deactivate/${id}`);
} 