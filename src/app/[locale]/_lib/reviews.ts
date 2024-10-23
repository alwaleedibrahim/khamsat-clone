import axios from 'axios';

const base_url = `http://localhost:4500/reviews`;

export const fetchServiceReviews = async (serviceId:string) => {
    try {
        const response = await axios.get(`${base_url}/${serviceId}`);
        
        return response.data;
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error;
    }
};

export function formatTimeAgo(createdAt: string | Date): string {
    const now: Date = new Date();
    const createdAtDate: Date = new Date(createdAt); // Convert to Date if it's a string

    const diff: number = Math.abs(now.getTime() - createdAtDate.getTime());

    const diffHours: number = Math.floor(diff / (1000 * 60 * 60));
    const days: number = Math.floor(diffHours / 24);
    const hours: number = diffHours % 24;

    let result = '';

    if (days > 0) {
        result += `منذ ${days} ${days === 1 ? 'يوم' : 'يومين'}`;
    }

    if (hours < 1) {
        result += `${result ? ' و' : ''}اقل من ساعة`; 
    } else {
        result += `${result ? ' و' : ''}${hours} ${hours === 1 ? 'ساعة' : 'ساعات'}`;
    }

    return result.trim();
}
