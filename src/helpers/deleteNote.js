const axios = require("axios").default;


export const deleteNotes = async(id)=>{
    // '/delete:noteID'
    const url = `http://localhost:5000/note/${id}`;
    const response = await axios.delete(url);
    return response.data.json; 
}



