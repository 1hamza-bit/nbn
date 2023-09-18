import { Button } from "@mui/material";
import "./index.scss"

const EditForm = (edit) => {



    return (
        <div style={{display: "block"}}>
        <div className="heading tu"><h1>Edit Entry Details</h1></div> 

        <div className="edit">
            <div className="editform">
                <h5>Username</h5>
                <input className="date" type="date" />
            </div>

            <div className="editform">
                <h5>Password</h5>
                <select
                // value={this.state.restock.toString()}
                onChange={() => {}}
                // disabled
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="editform">
                <h5>Password</h5>
                <input  />
            </div>
            <div className="editform">
                <h5>Username</h5>
                <input  />
            </div>

            <div className="editform">
                <h5>Password</h5>
                <input  />
            </div>  <div className="editform">
                <h5>Username</h5>
                <input  />
            </div>

            <div className="editform">
                <h5>Password</h5>
                <input  />
            </div>
            <Button variant="contained" className="submit">Submit</Button>
         
         </div>
        </div>
    )
}

export default EditForm;