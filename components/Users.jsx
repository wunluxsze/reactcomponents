import { useState } from 'react';
import uuid from 'react-uuid';
import User from './User';

function Users() {
  let initUsers = [
    { id: id(), name: 'Kostya', surname: 'Ruzhkov', age: 1 },
    { id: id(), name: 'Sasha', surname: 'Zekrin', age: 42 },
    { id: id(), name: 'Azat', surname: 'NePonimaetVprogrammirovanii', age: 101 },
    { id: id(), name: 'Azat', surname: 'NePonimaetVprogrammirovanii', age: 101 },
    { id: id(), name: 'Azat', surname: 'NePonimaetVprogrammirovanii', age: 101 },
    { id: id(), name: 'Azat', surname: 'NePonimaetVprogrammirovanii', age: 101 },
  ];
  let [users, setUsers] = useState(initUsers);

  let result = users.map((user, index) => {
    return (
      <>
        <User
          key={index}
          id={user.id}
          name={user.name}
          surname={user.surname}
          age={user.age}
          ChangeItem={ChangeItem}
        />
        <button onClick={() => BanUser(index)}>Забанить</button> <br />
      </>
    );
  });

  function BanUser(index) {
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
  }

  function ChangeItem(id, prop, event) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user[prop] = event.target.value;
        }
        return user;
      }),
    );
  }
  return <ul>{result}</ul>;

  function id() {
    return uuid();
  }
}
export default Users;
