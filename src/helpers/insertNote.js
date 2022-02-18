const axios = require('axios').default;



async function insertNote(note){

    const url = `http://localhost:5000/note/create`;
    const response = await axios.post(url, note);
    return response;
}


export default insertNote;

