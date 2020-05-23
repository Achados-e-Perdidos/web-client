import axios from 'axios';

export const cadastrarItem = async (data) => {
    return await axios.post('http://localhost:5000/api/item/', data, {
        headers: {'Content-Type': 'multipart/form-data', token: localStorage.getItem('token') }
    });
}

export const atualizarItem = async (id, data) => {
    return await axios.put(`http://localhost:5000/api/item/edit/${id}`, data, {
        headers: {'Content-Type': 'multipart/form-data', token: localStorage.getItem('token') }
    });
} 

export const buscarTodosItens = async () => {
    try {
        return await axios.get('http://localhost:5000/api/item/', {
            headers: { token: localStorage.getItem('token') }
        });
    } catch (err) {
        return (err.response)
    }
} 

export const buscarItemPorID = async (id) => {
    try {
        return await axios.get(`http://localhost:5000/api/item/${id}`, {
            headers: { token: localStorage.getItem('token') }
        });
    } catch (err) {
        return (err.response)
    }
} 

export const desativarItem = async (id) => {
    return await axios.put(`http://localhost:5000/api/item/deactivate/${id}`);
} 

export const realizarLogin = async (data) => {
    return await axios.post(`http://localhost:5000/api/login/`, data);
}

export const realizarCadastro = async (data) => {
    return await axios.post(`http://localhost:5000/api/user/`, data);
} 