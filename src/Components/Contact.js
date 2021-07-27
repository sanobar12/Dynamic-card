import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import img1 from "./../Images/2.PNG";

export const Contact = () => {
  let getData = localStorage.getItem("user-info");
  console.log(getData);
  const data = JSON.parse(getData);
  console.log(data, "datatattaa");
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="onee col-md-4 text-center">
            <h4 >Profile</h4>
            <img
              src={img1}
              alt="2"
              className="rounded-circle h-15 customImg mt-20"
            />
            <div className="head mt-20">
              <h3 className="rec">React Packges</h3>
              <p>React Module For Us</p>
            </div>
            <div className="row">
              <div className="col-md-8 offset-2 ">
                <div className="row mt-40">
                  <div className="col-md-4 ">
                    <h6>$1</h6>
                    <p>Posts</p>
                  </div>
                  <div className="col-md-4 border-left">
                    <h6>$2</h6>
                    <p>Messges</p>
                  </div>
                  <div className="col-md-4 border-left">
                    <h6>$3</h6>
                    <p>Members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-md-8 offset-2 ">
                <button className="btn btn-primary w-100 ">Upload</button>
              </div>

              <div className="col-md-8 offset-2">
                <button className="btn btn-light w-100">Delete</button>
              </div>
            </div>
            <div className="head-para mt-30">
              <h4 className="mt-10">BioGraphy</h4>
              <p className="col text-center w-200 ">
                Search for the keywords to learn more about <br></br> each warning. Float
                right on small screens <br></br> or wider Float right on medium <br></br> screens or
                wider
              </p>
            </div>
          </div>
          <div className="twoo col-md-8">
            {/* <label for="inputEmail4">Company &nbsp;Name</label> */}
            <form>
              <div className="head-img">
                <div className="head col-md 4">
                  <h4 className="h-2">Basic Information</h4>
                </div>
                <div className="btns col-md-4">
                  <button className="btn btn-light ">Save</button>
                  <button className="btn btn-primary ">Cancel</button>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    // placeholder="First Name"
                    value={data.fname}
                  />
                </div>
                <div className="form-group col-md-6">
                <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    // placeholder="Last Name"
                    value={data.lname}
                  />
                </div>
              </div>
              <div className="form-group ">
              <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputCity"
                  // placeholder="Email"
                  value={data.email}
                />
              </div>
              <div className="form-group">
              <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  // placeholder="Address"
                  value={data.address}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                <label>Contact Number</label>
                  <input
                    type="intiger"
                    className="form-control"
                    id="inputAddress2"
                    // placeholder="Contact Number"
                    value={data.number}
                  />
                </div>
                <div className="form-group col-md-4">
                <label>Zip-Code </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputPassword4"
                    // placeholder="Zip-code"
                    value={data.code}
                  />
                </div>
              </div>
              <div className="form-group">
              <label>Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  // placeholder="Company"
                  value={data.company}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    // placeholder="Enter country name"
                    value={data.country}
                  />
                </div>
                <div className="form-group col-md-6">
                <label>Age</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    // placeholder="Age"
                    value={data.age}
                  />
                </div>
              </div>
              <div className="form-group ">
              <label>Street</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  // placeholder="Street name"
                  value={data.street}
                />
              </div>
              <div className="form-group">
              <label>Current Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  // placeholder="Current Address"
                  value={data.current}
                />
              </div>

              <div className="form-group">
              <label>Perminent Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  // placeholder="Perminent Address"
                  value={data.perminent}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    // placeholder="Phone Number"
                    value={data.phone}
                  />
                </div>
                <div className="form-group col-md-4">
                <label>Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    // placeholder="Gender"
                    value={data.gender}
                  />
                </div>
                <div className="form-group col-md-3">
                <label>Area Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    // placeholder="Area code"
                    value={data.a_code}
                  />
                </div>
              </div>
              {/* <button className= "btn btn-light" onClick={handleSubmit}>Sign In</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
