import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import validator from 'validator';

function Employees() {

  const dbUrl = 'https://reqres.in/api/users';
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    fetch(dbUrl)
        .then(res => res.json())
        .then(data => {
            setUsers(data.data || [])
        });
  }, []);

  function checkID(ref, msgIncorrectID, msgFieldEmpty) {
    if (ref.current.value === '') {
      setMessage(msgFieldEmpty);
      return true;
    } else if (!validator.isInt(ref.current.value)) {
      setMessage(msgIncorrectID);
      return true;
    }
  }

  function checkEmail(ref, msgIncorrectID, msgFieldEmpty) {
    if (ref.current.value === '') {
      setMessage(msgFieldEmpty);
      return true;
    } else if (!validator.isInt(ref.current.value)) {
      setMessage(msgIncorrectID);
      return true;
    }
  }

  const addEmployee = () => {
    // TODO: Add validations
    const idError = checkID(idRef, 'ID can only be a number', 'ID required')
    const emailError = checkEmail(emailRef, 'ID can only be a number', 'ID required')
    // TODO: Add an employee to the table
  }

  const deleteEmployee = (employee) => {
    users.splice(employee,1);
    setUsers(users.slice());
    // fetch(dbUrl, {
    //         method: 'PUT',
    //         body: JSON.stringify(users)
    // });
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          {users.map((element, index) => 
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.first_name} {element.last_name}</td>
              <td>{element.email}</td>
              <img src={element.avatar} alt="" />
              <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
            </tr>
          )}

        <tr className="input-row">
          <td><input type="text" placeholder="ID" className="form-control" ref={idRef}/>{message}</td>
          <td><input type="text" placeholder="Name" className="form-control" ref={nameRef}/></td>
          <td><input type="text" placeholder="Email" className="form-control" ref={emailRef}/></td>
          <td><input type="text" placeholder="Avatar" className="form-control" ref={avatarRef}/></td>
          <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;