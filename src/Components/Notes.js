import React from 'react';

function Notes({ element , setSaveNotes, saveNotes, seteditId}) {

    const removeHandler = (id) => {
        seteditId(id);
        const newNote = saveNotes.filter((elm) => {
            if (elm.id !== id) {
                return elm;
            }
        })
        setSaveNotes(newNote);
    }

    const editHandler=(id)=>{
        seteditId(id);
        saveNotes.filter((elem) => {
            if (elem.id == id) {
                document.getElementById("editTitle").value=elem.title
                document.getElementById("editTextarea").value=elem.note
            }
        })
    }

    return (
        <>
            <div className='container row my-5'>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className="card">
                        <div className="card-body text-capitalize">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.note}</p>
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() =>
                                editHandler(element.id)}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger mx-2" onClick={() =>
                                removeHandler(element.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
