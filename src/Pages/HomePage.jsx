import React, { Component } from "react";
import BottomNav from "../Components/Footer/BottomNav";
import Nav from "../Components/Header/Nav";
import LoginPage from "./LoginPage";

export default class HomePage extends Component {
  render() {
    return (
      <div class="row">
        <div className="HomePage">
          <Nav />
          <LoginPage />
        </div>
        <BottomNav />
      </div>
    );
  }
}
