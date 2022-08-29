import React from "react";
import Modal from "../../commons/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./homeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.home.modalVisible);

  return (
    <h1>
      HOME PAGE
      <button onClick={() => dispatch(toggleModal())}>Modal</button>
      {modalVisible && <Modal />}
    </h1>
  );
};

export default Home;
