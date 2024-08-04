import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Timer = () => {
  // get alert message here
  const dispatch = useDispatch();
  const { message } = useSelector(alertSelector);
  // create effect to reset alert message here

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
    }
  },[message]);


  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div className="alert">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
