import React from "react";

const Brokerage = () => {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Type of account</th>
            <th scope="col"> 	Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>Individual account</td>
            <td><Free/></td>
          </tr>{" "}
          <tr>
            
            <td>Minor account</td>
            <td><Free/></td>
          </tr>{" "}
          <tr>
            
            <td>NRI account</td>
            <td> 	₹ 500</td>
          </tr>{" "}
          <tr>
            
            <td>HUF account</td>
            <td>(online) / ₹ 500 (offline)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Brokerage;


export const Free = ()=>{
  return(
    <>
    
    <span class="badge badge-success">Free</span>
    </>
  )
}