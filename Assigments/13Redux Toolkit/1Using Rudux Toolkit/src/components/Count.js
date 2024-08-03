import { useSelector } from "react-redux";
import { countSelector } from "../redux/reducers/counterReducer";


export const Count = () => {
  // change as per the store implementation
  const { count } = useSelector(countSelector);

  return <b>{count}</b>;
};
