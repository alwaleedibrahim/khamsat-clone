import axios from 'axios';

const base_url = 'http://localhost:4500/services' ; 

export const fetchServices = async (query: string) => {
    try {
        const queryString = new URLSearchParams(query).toString();
        const response = await axios.get(`${base_url}/filter?${queryString}`);
        return response.data;
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

export interface Keyword {
    title: {
        ar: string;
        en: string;
    };
}

export interface FormDataProp {
    userId: string;
    title: {
        ar: string;
        en: string;
    };
    categoryId: string;
    subcategoryId: string;
    description: {
        ar: string;
        en: string;
    };
    BuyerRules: string;
    price: number;
    deliveryTime: number;
    keywords: Keyword[];
}

export const createService = async (formData: FormData) => {
    try {
        const response = await axios.post(`${base_url}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });        
        return response.data;
    } catch (error) {
        console.error('Post Services Error:', error);
        throw error;
    }
};

