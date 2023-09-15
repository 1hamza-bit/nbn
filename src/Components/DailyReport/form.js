import "./index.scss"

const Form = () => {



    return (
        <div style={{display: "block"}}>
        <div className="heading tu"><h1>New Entry</h1></div> 

        <div className="entry">
            <div className="labelform">
                <h5>Username</h5>
                <input className="date" type="date" />
            </div>

            <div className="labelform">
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
            <div className="labelform">
                <h5>Password</h5>
                <input  />
            </div>
            <div className="labelform">
                <h5>Username</h5>
                <input  />
            </div>

            <div className="labelform">
                <h5>Password</h5>
                <input  />
            </div>  <div className="labelform">
                <h5>Username</h5>
                <input  />
            </div>

            <div className="labelform">
                <h5>Password</h5>
                <input  />
            </div>

         
         </div>
        </div>
    )
}

export default Form;