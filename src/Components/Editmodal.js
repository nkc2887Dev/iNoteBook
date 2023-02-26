import React from 'react'

function Editmodal({ editId, saveNotes, setSaveNotes }) {
    const updateHandler = () => {
        const updateNote = saveNotes.map((elem) => {
            if (editId === elem.id) {
                return ({
                    ...elem, title: document.getElementById("editTitle").value,
                    note: document.getElementById("editTextarea").value
                })
            }
            else{
                return elem;
            }
        })
        // console.log(updateNote);
        setSaveNotes(updateNote);
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body container d-flex justify-content-center">
                            <form>
                                <div className="form-group" style={{ width: "20rem" }}>
                                    <label htmlFor="editTitle">Title</label>
                                    <input type="text" className="form-control" id="editTitle" />
                                </div>
                                <div className="form-group" style={{ width: "20rem" }}>
                                    <label htmlFor="editTextarea">Notes</label>
                                    <textarea className="form-control" id="editTextarea" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={updateHandler}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editmodal
