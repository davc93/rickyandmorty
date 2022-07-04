const API = 'https://rickandmortyapi.com/api/character/';
const getData = async (id) =>{
    console.log(id);
    const apiURL = id ? `${API}/${id}` : API;
    try {
        console.log(apiURL);
        const response = await fetch(apiURL);
        const data  = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch error',error);
    }
} 

export default getData;