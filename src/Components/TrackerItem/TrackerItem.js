import React, { useEffect, useState } from "react";
import styles from "./TrackerItem.module.css";
import moment from "moment";
import { connect } from "react-redux";
import { pauseTracker, removeTracker } from "../../redux/actions";

const TrackerItem = ({ tracker, pauseTracker, removeTracker }) => {
  const [totalTime, changeTimePassed] = useState(tracker.totalTime);

  const calculateTimePassed = () => {
    return tracker.startTime
      ? Date.now() - tracker.startTime + tracker.totalTime
      : tracker.totalTime;
  };
  useEffect(() => {
    startTimeout();
  });

  const startTimeout = () => {
    setTimeout(() => {
      changeTimePassed(calculateTimePassed());
    }, 1000);
  };

  const stopTimeout = () => {
    changeTimePassed(totalTime - 1);
    clearTimeout();
  };

  const handlePauseTracker = (e) => {
    const { id } = e.currentTarget;

    tracker.startTime ? stopTimeout() : startTimeout();

    pauseTracker({ id, totalTime });
  };

  const handleRemoveTracker = (e) => {
    const { id } = e.currentTarget;
    removeTracker({ id });
  };

  return (
    <li
      className={styles.item}
      style={
        tracker.startTime
          ? { backgroundColor: "#ffee99" }
          : { backgroundColor: "#fff9d6" }
      }
    >
      <div
        className={styles.name}
        style={tracker.startTime ? { color: "green" } : { color: "black" }}
      >
        {tracker.name}
      </div>
      <div className={styles.wrap}>
        <div
          className={styles.time}
          style={tracker.startTime ? { color: "green" } : { color: "black" }}
        >{`${Math.trunc(moment.duration(totalTime).asHours())}:${moment
          .utc(totalTime)
          .format("mm:ss")}`}</div>
        <button
          className={styles.buttonStart}
          id={tracker.id}
          onClick={handlePauseTracker}
        >
          {tracker.startTime ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'
              fill='green'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
            </svg>
          )}
        </button>
        <button
          className={styles.buttonDelete}
          id={tracker.id}
          onClick={handleRemoveTracker}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 0 24 24'
            width='24'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M7 12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm5-10C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
          </svg>
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  pauseTracker: (id, totalTime) => dispatch(pauseTracker(id, totalTime)),
  removeTracker: (id) => dispatch(removeTracker(id)),
});

export default connect(null, mapDispatchToProps)(TrackerItem);
