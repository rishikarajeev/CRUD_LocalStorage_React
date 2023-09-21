import React from "react";
import Button from 'react-bootstrap/Button';
import "./LoginPage.css";


function LoginPage() {
  return (
    <div>
      <div class="row ">
        <div class="col  "></div>
        <div className="width200  mt-5 col">
          <form className="border formcolor border-4">
            <h2 class="text-white">Login</h2>
            <div class="form-outline mb-4 ">
              <input type="email" id="form1Example1" class="form-control-sm" />
              <label class="light form-label text-white " for="form1Example1">
                Email address
              </label>
            </div>
            <div class="light form-outline mb-4">
              <input
                type="password"
                id="form1Example2"
                class="form-control-sm"
              />
              <label class="form-label text-white" for="form1Example2">
                Password
              </label>
            </div>
            <div class="row mb-2">
              <div class="col d-flex text-start">
                <div class="form-check ">
                  <input
                    class="form-check-input text-start"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label
                    class="form-check-label text-start text-white"
                    for="form1Example3"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="text-start">
                <a href="#!">Forgot password?</a>
              </div>
              <div class="text-start">
                <a href="/signup">Sign Up</a>
              </div>
            </div>
            <Button type="submit" variant="danger">
              Sign in
            </Button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default LoginPage;
