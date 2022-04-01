import { useFetchNote } from './../hooks/useFetchNote';
import Loading from './Loading.jsx';
import Note from './Note';


function NoteList(){


    const {notes, remove, loading} = useFetchNote();

    const handleSubmit = (id)=>{
	remove(id);
    }

    return(
	<>
	    <div className="container">
		{loading && <Loading />} 
		{
		    notes.map(item => {
			return(
			    <Note
				note={item}
				handleClick={handleSubmit} 
				key={item._id}
			    />
			)	
		    }) 
		}
	    </div>
	</>
    );
}

export default NoteList;
