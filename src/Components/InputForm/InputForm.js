import React, { useState } from "react";
import { connect } from "react-redux";
import { addTracker } from "../../redux/actions";
import styles from "./InputForm.module.css";
import shortid from "shortid";
import moment from "moment";

const InputForm = ({ addTracker }) => {
  const [name, changeName] = useState("");

  const trackerNameToAdd = (name) =>
    name
      ? name
      : `Tracker created ${moment(Date.now()).format("YYYY-MM-DD, HH:mm:ss")}`;

  const handleChange = ({ target }) => {
    changeName(target.value);
  };

  const handleAddTracker = (e) => {
    e.preventDefault();
    addTracker({
      id: shortid.generate(),
      name: trackerNameToAdd(name),
      startTime: Date.now(),
    });
    changeName("");
  };

  return (
    <form className={styles.form} onSubmit={handleAddTracker}>
      <input
        className={styles.input}
        placeholder='Enter tracker name'
        onChange={handleChange}
        value={name}
      />
      <button className={styles.button}>
        <svg
          className={styles.buttonSvg}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='1 1 22 22'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' />
        </svg>
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTracker: (name, startTime) => dispatch(addTracker(name, startTime)),
});

export default connect(null, mapDispatchToProps)(InputForm);
