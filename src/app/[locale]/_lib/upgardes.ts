import axios from 'axios';

const base_url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/upgrades`;

export const fetchUpgradesById = async (serviceId:string) => {
    try {
        const response = await axios.get(`${base_url}/${serviceId}`);
        
        return response.data;
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error;
    }
};