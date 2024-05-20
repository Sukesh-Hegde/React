import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={{
          width: "60%",
          margin: "50px auto",
          display: "flex",
          flexDirection: "column",
          gap: 20
        }}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={{ fontSize: "2rem", letterSpacing: 2 }}>Sign Up</h3>
        <input style={{ padding: 10 }} placeholder="Username" />
        <input style={{ padding: 10 }} placeholder="Email" />
        <input style={{ padding: 10 }} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20
          }}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={{
              outline: "none",
              paddingBlock: 5,
              width: 100,
              backgroundColor: "red",
              color: "white",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={{
              outline: "none",
              paddingBlock: 5,
              width: 100,
              backgroundColor: "red",
              color: "white",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

 const styles = {
   "*": {
     margin: 0,
     padding: 0,
     fontFamily: "Arial, Helvetica, sans-serif",
   },
   App: {
     display: "flex",
     flexDirection: "column",
   },
   navbar: {
     height: "60px",
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
   },
   navbarH2: {
     marginLeft: "20px",
   },
   navbarUl: {
     listStyle: "none",
     margin: 0,
     padding: 0,
     width: "60%",
     display: "flex",
     justifyContent: "space-around",
   },
   navbarLi: {
     fontSize: "1.1rem",
     fontWeight: 600,
   },
   hero: {
     marginBlock: "30px",
   },
   heroImg: {
     marginTop: "10px",
     width: "100%",
     height: "300px",
     objectFit: "cover",
   },
   about: {
     marginBottom: "30px",
   },
   aboutP: {
     marginTop: "10px",
   },
 };
