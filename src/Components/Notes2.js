import React from 'react';

function Notes2({ element, savenote, setsavenote, seteditId }) {

    const removeHandle = (id) => {
        seteditId(id);
        const newNote = savenote.filter((elm) => {
            if (elm.id !== id) {
                return elm;
            }
        })
        setsavenote(newNote);
        // console.log(savenote,"hello world");
  
    }

    const editHandle = (id) => {
        seteditId(id);
        savenote.filter((elem) => {
            if (elem.id == id) {
                document.getElementById("ediTtitle").value = elem.title
                document.getElementById("editTextarea").value = elem.note
            }
        })
        console.log(savenote)

    }

    return (
        <>
            <div className='container d-flex m-5 row'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <h1>Your Notes</h1>
                    <div className="card mt-3" style={{ width: "18rem" }}>
                        <div className="card-body text-capitalize">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.note}</p>
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={editHandle}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger mx-2" onClick={removeHandle}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes2
