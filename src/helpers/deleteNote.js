const axios = require("axios").default;


export default async function deleteNote(id){
    // '/delete:noteID'
    const url = `http://localhost:5000/note/${id}`;
    const response = await axios.delete(url);
    return response.data.json; 
}



