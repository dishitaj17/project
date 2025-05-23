import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-0 text-center">
        Welcome <br />
        <button className="text-4xl font-bold  "><Link to="/">Click Here</Link>  </button>
        
      </div>
      <div className="d-grid gap-2">

          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>

      </div>
    </>
  );
};

export default Home;
