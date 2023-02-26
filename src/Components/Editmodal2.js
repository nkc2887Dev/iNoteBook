import React from 'react'

function Editmodal2() {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form className='container' style={{marginLeft:"60px"}}>
                            <div className="form-group" style={{width:"20rem"}}>
                                <label htmlFor="ediTtitle">Title</label>
                                <input type="text" className="form-control" id="ediTtitle"/>
                            </div>
                            <div className="form-group" style={{width:"20rem"}}>
                                <label htmlFor="editTextarea">Note</label>
                                <textarea className="form-control" id="editTextarea" rows="3"></textarea>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editmodal2
