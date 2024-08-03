import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
// import { incrementTimer } from "../redux/actions/timerActions";
import { actions } from "../redux/reducers/timerReducer";
import { timeSelector } from "../redux/reducers/timerReducer";


export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector(timeSelector);


  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(actions.incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
