import React from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../features/Home/homeSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setScreen("home"))}>Home</button>
      <button onClick={() => dispatch(setScreen("profile"))}>Profile</button>
    </div>
  );
};

export default Header;
