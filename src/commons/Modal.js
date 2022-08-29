import React from "react";
import { toggleModal } from "../features/Home/homeSlice";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const modalVisible = useSelector((state) => state.modalVisible);

  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(toggleModal());
  };
  return (
    <>
      {modalVisible && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-container">
            <div className="modal-content">
              <button className="close" onClick={closeModal}>
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
