// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [userchUser, setuserchUser] = useState("");
//   const [userDetail, setuserDetail] = useState(false);

//   const users = [
//     { username: "john_doe", email: "john@example.com", mobile: "123-456-7890" },
//     {
//       username: "jane_smith",
//       email: "jane@example.com",
//       mobile: "987-654-3210",
//     },
//   ];

//   let btnCliked = (e) => {
//     e.preventDefault();
//     let user = users.find((u) => u.username === userchUser);
//     if (user) {
//       setuserDetail(user);
//     } else {
//       setuserDetail("not found");
//     }
//   };

//   return (
//     <div className="App">
//       <h2>Find user details</h2>
//       <input
//         type="text"
//         placeholder="search user"
//         value={userchUser}
//         onChange={(e) => setuserchUser(e.target.value)}
//       />
//       <button onClick={btnCliked}>search</button>
//       {userDetail && typeof(userDetail) === "object" ? (
//         <div>
//           <p>user name: {userDetail.username} </p>
//           <p>user email:{userDetail.email} </p>
//           <p>user number: {userDetail.mobile}</p>
//         </div>
//       ) : (
//         userDetail && <p>user not found</p>
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
    console.log(count);
    
  }, []);

    useEffect(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    }, []);

  return (
    <div className="App">
      <p>{count}</p>
    </div>
  );
}

export default App;
