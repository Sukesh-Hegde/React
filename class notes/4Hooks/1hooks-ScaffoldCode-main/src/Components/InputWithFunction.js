import { useState,useEffect} from "react";


export default function InputF() {
  const [name, setName] = useState("Harry");
  const [lastname, setLastName] = useState("hegde");

  useEffect(() =>{
    document.title = name+ " " + lastname;
  })

  return (
    <>
      <div className="section">
        <Row label="Name">
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </Row>
        <Row label="Last Name">
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Row>
      </div>

      <h2>Hello,{name +" "+lastname} </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
