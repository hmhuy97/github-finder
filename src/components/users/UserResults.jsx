import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 mì:grid-cols-2">
        {users.map((user, index) => (
          <>
            <h3 id={index}>{user.login}</h3>
            <p>{index}</p>
          </>
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default UserResults;