import React from "react";
import "./Ticket.css"

const CreateTicket = () => {
  return (
    <>
      <div className=" container head">
        <div className="headSect">
          <p>Support Portal </p>
          <button >My ticket</button>
        </div>
        <div className="searchSect">
          <div className="search ">
            <form className="form-inline ">
              <input
              className="form-control mr-sm-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
