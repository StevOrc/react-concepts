import React from "react";

const ListUsers = ({ users, selectUser, onUpdate, onDelete }) => {
  return (
    <div className="w-100 d-flex flex-row flex-wrap justify-content-center my-3">
      {users && users.length ? (
        users.map((u, index) => (
          <div
            key={u.id}
            onClick={() => {
              selectUser(index);
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
              <div className="d-flex mt-2">
                <button
                  className="btn btn-success mr-2"
                  onClick={() => onUpdate(u)}
                >
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(u)}>
                  Delete
                </button>
              </div>
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
