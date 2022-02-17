import { useState, useEffect } from 'react';
import { getNotes } from '../helpers/getNotes';



export const useFetchNote = ()=>{

    const [notes, setNotes] = useState({
	notes: [],
	loading: true
    });


    useEffect(()=>{
	//call method for get notes
	getNotes().then(data =>{
	    setNotes({
		notes: data.data.notes,
		loading: false
	    })
	})
    }, [])

    return notes;
}
