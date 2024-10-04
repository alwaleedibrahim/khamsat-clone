const base_url = 'http://localhost:4500/services';

export const fetchServices = async (query:string) => {
    try {
        const queryString = new URLSearchParams(query).toString(); 
        const response = await fetch(`${base_url}/filter?${queryString}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error; 
    }
};