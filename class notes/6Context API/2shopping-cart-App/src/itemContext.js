import { useContext, useState, createContext } from "react";

const itemContext = createContext();

//creatingcustom hook
function useValue() {
  const value = useContext(itemContext);
  return value;
}
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    // setTotal(total-price)
    setTotal((prevState) => prevState - price);
    setItem((prevState) => prevState - 1);
  };
  
  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };

  return (
    <itemContext.Provider
      value={{ item, total, handleAdd, handleRemove, handleReset }}
    >
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };
export default CustomItemContext;
