import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../index.css";

const Form = () => {
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    number: "",
    company: "",
    code: "",
    country: "",
    phone: "",
    age: "",
    street: "",
    current: "",
    perminent: "",
    gender: "",
    a_code: "",
  });

  const {
    fname,
    lname,
    email,
    address,
    number,
    company,
    code,
    country,
    phone,
    age,
    street,
    current,
    perminent,
    gender,
    a_code,
  } = formValues;
  // const values =formValues.setFormValues("input");

  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [number, setNumber] = useState("");
  // const [area, setArea] = useState("");
  // const [code, setCode] = useState("");
  // const [country, setCountry] = useState("");
  // const [company, setCompany] = useState("");
  // const [phone, setPhone] = useState("");
  // const [place, setPlace] = useState("");
  // const [street, setStreet] = useState("");
  // const [current, setCurrent] = useState("");
  // const [perminent, setPerminent] = useState("");
  // const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // const submit = {
    //   fname,
    //   lname,
    //   email,
    //   address,
    //   number,
    //   company,
    //   code,
    //   country,
    //   phone,
    //   place,
    //   street,
    //   current,
    //   perminent,
    //   gender,
    // };
    // localStorage.setItem("user-info", JSON.stringify(submit));
    localStorage.setItem("user-info", JSON.stringify(formValues));
    // console.log( , "Checking")
    const submt =       fname &&
    lname &&
    email &&
    address &&
    number &&
    company &&
    code &&
    country &&
    phone &&
    a_code &&
    street &&
    current &&
    gender? true : false
    if (
      submt
    ) {
      history.push("/Contact");
    } else {
      alert("Need to fill all inputs");
    }

    // setFname("");
    // setLname("");
    // setArea("");
    // setCode("");
    // setEmail("");
    // setCountry("");
    // setNumber("");
    // setAddress("");
    // setStreet("");
    // setPlace("");
    // setPhone("");
    // setCurrent("");
    // setPerminent("");
    // setGender("");
  };

React.useEffect(()=>{
 console.log("okdasdasdk")
},[lname])
  console.log(lname, fname, "testss");
  return (
    <>
      <div className="container">
        <div className="row">
          <form className="one col-md-6">
            <h2 className="h-2">General Information</h2>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) =>
                    setFormValues({ ...formValues, fname: e.target.value })
                  }
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Last Name"
                  value={lname}
                  // onChange={(e) => setLname(e.target.value)}
                  onChange={(e) =>
                    setFormValues({ ...formValues, lname: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group ">
              <input
                type="email"
                className="form-control"
                id="inputCity"
                placeholder="Email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Address"
                value={address}
                // onChange={(e) => setAddress(e.target.value)}
                onChange={(e) =>
                  setFormValues({ ...formValues, address: e.target.value })
                }
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="intiger"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Contact Number"
                  value={number}
                  // onChange={(e) => setNumber(e.target.value)}
                  onChange={(e) =>
                    setFormValues({ ...formValues, number: e.target.value })
                  }
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Zip-code"
                  value={code}
                  // onChange={(e) => setCode(e.target.value)}
                  onChange={(e) =>
                    setFormValues({ ...formValues, code: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Company"
                value={company}
                // onChange={(e) => setArea(e.target.value)}
                onChange={(e) =>
                  setFormValues({ ...formValues, company: e.target.value })
                }
              />
            </div>
          </form>
          <div className="two col-md-6">
            <h2 className="h2">Contact Details</h2>
            {/* <label for="inputEmail4">Company &nbsp;Name</label> */}
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter country name"
                    value={country}
                    // onChange={(e) => setCountry(e.target.value)}
                    onChange={(e) =>
                      setFormValues({ ...formValues, country: e.target.value })
                    }
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Age"
                    value={age}
                    // onChange={(e) => setPlace(e.target.value)}
                    onChange={(e) =>
                      setFormValues({ ...formValues, age: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Street name"
                  value={street}
                  // onChange={(e) => setStreet(e.target.value)}
                  onChange={(e) =>
                    setFormValues({ ...formValues, street: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Gender"
                  value={gender}
                  // onChange={(e) => setAddress(e.target.value)}
                  onChange={(e) =>
                    setFormValues({ ...formValues, gender: e.target.value })
                  }
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Current address"
                    value={current}
                    // onChange={(e) => setNumber(e.target.value)}
                    onChange={(e) =>
                      setFormValues({ ...formValues, current: e.target.value })
                    }
                  />
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Perminent address "
                    value={perminent}
                    // onChange={(e) => setCode(e.target.value)}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        perminent: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Area code"
                    value={a_code}
                    // onChange={(e) => setArea(e.target.value)}
                    onChange={(e) =>
                      setFormValues({ ...formValues, a_code: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Phone number"
                  value={phone}
                  // onChange={(e) => setArea(e.target.value)}
                  onChange={(e) =>
                    setFormValues({ ...formValues, phone: e.target.value })
                  }
                />
              </div>
              <button className="btn btn-light p-30" onClick={handleSubmit}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
