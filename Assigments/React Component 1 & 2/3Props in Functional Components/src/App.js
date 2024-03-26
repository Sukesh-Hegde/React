
import "./styles.css";

// Refactored Card component to accept props
export const Card = (props) => (
  <div className="card">
    <h3>{props.name}</h3>
    <span>{props.about}</span>
  </div>
);

export default function App() {
  return <Card name="sukesh." about="Hi my name is sukesh Hegde" />;
}
