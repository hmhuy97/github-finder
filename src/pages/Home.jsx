import React from "react";
import UserResults from "../components/users/UserResults";
function Home() {
  return (
    <>
      {/* <h1 className="text-6xl">Welcome</h1> */}
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}

      {/* SEARCH COMPONENT */}
      <UserResults />
    </>
  );
}

export default Home;
