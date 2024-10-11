import axios from 'axios';

const base_url = 'http://localhost:4500/services';

export const fetchServices = async (query: string) => {
    try {
        const queryString = new URLSearchParams(query).toString();
        const response = await axios.get(`${base_url}/filter?${queryString}`);
        
        return response.data.services;
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error;
    }
};

export const fetchAllServices = async () => {
    try {
        const response = await axios.get(`${base_url}`);
        return response.data;
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error;
    }
};

export const fetchServiceById = async (serviceId:string) => {
    try {
        const response = await axios.get(`${base_url}/${serviceId}`);
        
        return response.data;
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error;
    }
};

export const createService = async () => {
    try {
        const response = await axios.post(`${base_url}`,{
            headers:{
                'Content-Type': 'application/json',
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error;
    }
};