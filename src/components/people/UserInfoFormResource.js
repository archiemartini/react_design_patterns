import React from 'react'
import withEditableResource from '../higherOrderComponents/withEditableResource';

const UserInfoFormResource = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser}) => {
  const { name, age, hairColor } = user || {}

  return user ? (
    <>
      <label>
        Name:
        <input value={name} onChange={e => onChangeUser({ name: e.target.value })}></input>
      </label>
      <label>
        Age:
        <input value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })}></input>
      </label>
      <label>
        Hair Color:
        <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })}></input>
      </label>
      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save changes</button>
    </>
  ) : <p>Loading...</p>
}, '/users/123', 'user');

export default UserInfoFormResource;