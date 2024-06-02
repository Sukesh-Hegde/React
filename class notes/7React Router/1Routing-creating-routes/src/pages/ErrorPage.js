import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const Navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            Navigate(-1)
        }, 3000);
    }, [])

  return (
    <>

        <h2>OOPSS!!!Something Went Wrong</h2>
    
    </>
  );
}

export default ErrorPage;
