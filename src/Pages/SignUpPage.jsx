import React, { useState } from "react";
import Nav from "../Components/Header/Nav";

function SignUpPage() {
  const [data, setData] = useState({});//empty object data:state & setdata is to update state
  const onChangeDetails = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const onsubmitDetails = (e) => {
    e.preventDefault();
    localStorage.setItem("submitteddata", JSON.stringify(data));
  };

  return (
    <div>
      <Nav />
      <div className="HomePage row  ">
        <div className="col"></div>
        <div className="width200 col mt-5 ">
          <form className="border  formcolor border-4 transalte-middle ">
            <div class="mb-3">
              <h2 class="text-white">Sign Up</h2>
              <label for="exampleInputEmail1" class="form-label text-white">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={onChangeDetails}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputFname" class="form-label text-white">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputFname"
                name="name"
                onChange={onChangeDetails}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-white">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={onChangeDetails}
              />
            </div>
            <a href="/">SignIn </a>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              onClick={onsubmitDetails}
            >
              Sign up
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default SignUpPage;
