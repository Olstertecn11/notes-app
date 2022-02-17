const axios = require('axios').default;



export const getNotes = async()=>{

    try{
	const url = `http://localhost:5000/note`;
	const response = await axios.get(url);
	return response;
    }catch(error){
	console.error(error);
	return;
    }
}

