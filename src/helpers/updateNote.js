const axios = require('axios').default;



export const updateNote = async (id, note) => {

    const url = `http://localhost:5000/note/update/${id}`;
    const response = await axios.put(url, note);
    return response.data.json; 

}



