const base_url = `${process.env.API_BASE_URL}/services`;

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

export const fetchAllServices = async () => {
    try {
        const response = await fetch(`${base_url}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();   
        console.log(data);

        return data; 
    } catch (error) {
        console.error('Fetch Services Error:', error);
        throw error; 
    }
};