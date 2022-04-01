import { useState, useEffect } from 'react';
import { getNotes } from '../helpers/getNotes';
import { deleteNotes } from '../helpers/deleteNote';



export const useFetchNote = ()=>{

    const [notes, setNotes] = useState({
	notes: []
    });

    const [loading, setLoading] = useState(true);

    const remove = (id)=>{
	const new_notes = notes.notes.filter(el => el._id !== id);
	deleteNotes(id);
	setNotes({notes: new_notes});
    }

    useEffect(()=>{
	//call method for get notes
	const timer = setTimeout(()=>{
	    getNotes().then(data =>{
		setNotes({notes: data.data.notes});
		setLoading(false);
	    })
	}, 2000);

	return ()=> clearTimeout(timer);
    }, [])


    return {notes: notes.notes, remove, loading};
}

