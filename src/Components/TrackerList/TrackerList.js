import React from "react";
import TrackerItem from "../TrackerItem/TrackerItem";
import styles from "./TrackerList.module.css";

const TrackerList = () => {
  return (
    <ul className={styles.list}>
      <TrackerItem />
    </ul>
  );
};

export default TrackerList;
