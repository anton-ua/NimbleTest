export const addTracker = ({ name, startTime, id }) => ({
  type: "ADD_TRACKER",
  payload: {
    id,
    name,
    startTime,
    totalTime: 0,
  },
});

export const pauseTracker = (id) => ({
  type: "PAUSE_TRACKER",
  payload: id,
});
