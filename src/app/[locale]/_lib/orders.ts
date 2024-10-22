import axios from 'axios';

const base_url = 'http://localhost:4500/orders';

interface OrderItem {
    service_id: string;
    quantity: number;
    upgrades?: string[];
}

export interface Order {
    _id: string;
    user_id: string;
    items: OrderItem[];
    order_number: number;
    total: number;
}

export const createOrder = async (orderData: Order) => {
    try {
        const response = await axios.post(`${base_url}`, orderData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });        
        return response.data;
    } catch (error: any) {
        console.error('Post Services Error:', error);
        throw error;
    }
};