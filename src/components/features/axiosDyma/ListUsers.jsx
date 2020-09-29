import React from "react";

const ListUsers = (props) => {
  const users = props.users;
  return (
    <div className="w-100 d-flex flex-row flex-wrap justify-content-center my-3">
      {users && users.length ? (
        users.map((u, index) => (
          <div
            key={u.id}
            onClick={() => {
              props.selectUser(index);
            }}
            className="card m-2"
            style={{ width: "200px" }}
          >
            <div className="card-header">{u.name}</div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{u.username}</li>
                <li className="list-group-item">{u.email}</li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-center"> No user ... </h1>
      )}
    </div>
  );
};

export default ListUsers;
