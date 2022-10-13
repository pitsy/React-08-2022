import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import validator from 'validator';

function Employees() {

  const dbUrl = 'https://reqres.in/api/users';
  const [users, setUsers] = useState([]);
  const [idMessage, setIdMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [avatarMessage, setAvatarMessage] = useState('');

  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    fetch(dbUrl)
        .then(res => res.json())
        .then(json => {
            setUsers(json.data || [])
        });
  }, []);

  console.log('aaaa');

  function checkID(ref, msgIncorrect, msgFieldEmpty) {
    if (ref.current.value === '') {
      setIdMessage(msgFieldEmpty);
      return true;
    } else if (!validator.isInt(ref.current.value)) {
      setIdMessage(msgIncorrect);
      return true;
    }
  }

  function checkEmail(ref, msgIncorrect, msgFieldEmpty) {
    if (ref.current.value === '') {
      setEmailMessage(msgFieldEmpty);
      return true;
    } else if (!validator.isEmail(ref.current.value)) {
      setEmailMessage(msgIncorrect);
      return true;
    }
  }

  function checkName(ref, msgIncorrect, msgFieldEmpty) {
    if (ref.current.value === '') {
      setNameMessage(msgFieldEmpty);
      return true;
    } else if (!validator.isAlpha(ref.current.value.replaceAll(' ', '').replaceAll('-', ''))) {
      setNameMessage(msgIncorrect);
      return true;
    }
  }

  function checkAvatar(ref, msgFieldEmpty) {
    if (ref.current.value === '') {
      setAvatarMessage(msgFieldEmpty);
      return true;
    } 
  }

  const addEmployee = () => {
    const name = nameRef.current.value.split(' ');
    const firstName = name[0];
    const lastName = name.slice(1).join(' ');
    // TODO: Add validations
    const idError = checkID(idRef, 'ID can only be a number', 'ID required');
    const emailError = checkEmail(emailRef, 'Invalid email', 'Email required');
    const nameError = checkName(nameRef, 'Name should contain only letters', 'Name required');
    const avatarError = checkAvatar(nameRef, 'Avatar required');
    // TODO: Add an employee to the table
    if (idError || emailError || nameError || avatarError) {
      return;
    }

    const newUser = {
      id: Number(idRef.current.value),
      first_name: firstName,
      last_name: lastName,
      email: emailRef.current.value,
      avatar: avatarRef.current.value
    }
    users.push(newUser);
    setUsers(users.slice());

    setEmailMessage('');
    setIdMessage('');
    setNameMessage('');
    setAvatarMessage('');
  }

  const deleteEmployee = (employee) => {
    users.splice(employee,1);
    setUsers(users.slice());
    // const index may be better option
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
              <td>{element.id}</td> {/* label first column as header to set the font weight to bold */}
              <td>{element.first_name} {element.last_name}</td> 
              {/* ^^ can add {element.name} */}
              <td>{element.email}</td>
              <td><img src={element.avatar} alt="" /></td>
              <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
            </tr>
          )}

        <tr className="input-row">
          <td><input type="text" placeholder="ID" className="form-control" ref={idRef}/>{idMessage}</td>
          <td><input type="text" placeholder="Name" className="form-control" ref={nameRef}/>{nameMessage}</td>
          <td><input type="text" placeholder="Email" className="form-control" ref={emailRef}/>{emailMessage}</td>
          <td><input type="text" placeholder="Avatar" className="form-control" ref={avatarRef}/>{avatarMessage}</td>
          <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;