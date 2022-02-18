import {useFetchNote} from './../hooks/useFetchNote';
import Note from './Note';

function NoteList(){

    const {notes, loading} = useFetchNote();  

    return(
	<>
	    <div className="container">
		{loading && <p>Loading...</p>}
		{
		    notes.map(item => {
			return(
			    <Note
				key={item._id}
				id={item._id}
				name={item.name}  
				description={item.description}  
				status={item.status}
			    />
			)	
		    }) 
		}
	    </div>
	</>
    );
}

export default NoteList;
