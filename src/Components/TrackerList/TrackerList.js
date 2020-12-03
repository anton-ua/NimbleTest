import React from "react";
import { connect } from "react-redux";
import TrackerItem from "../TrackerItem/TrackerItem";
import styles from "./TrackerList.module.css";

const TrackerList = ({ trackers }) => {
  return (
    <ul className={styles.list}>
      {trackers.length > 0 &&
        trackers.map((tracker) => (
          <TrackerItem tracker={tracker} key={tracker.id} />
        ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  trackers: state.trackers,
});

export default connect(mapStateToProps)(TrackerList);
