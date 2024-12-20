import axios from 'axios';

const base_url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/services` ; 

export const fetchServices = async (query: string) => {
    try {
        const queryString = new URLSearchParams(query).toString();
        const response = await axios.get(`${base_url}?${queryString}`);                
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

export const createService = async (formData: FormData ,token:string) => {
    try {
        const response = await axios.post(`${base_url}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',  Authorization: token  ,
            },
        });        
        return response.data;
    } catch (error) {
        console.error('Post Services Error:', error);
        throw error;
    }
};

