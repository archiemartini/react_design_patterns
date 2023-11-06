import useDataSource from "../../hooks/useDataSource";
import axios from "axios";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl)
  return response.data
}

const localStorageResource = key => {
  return localStorage.getItem(key)
}

const UserInfoDataSourced = ({userId}) => {
  const user = useDataSource(serverResource(`/users/${userId}`))
  // const message = useDataSource(localStorageResource('message'))
  // Above is how we'd access a local storage for example

	const { name, age, hairColor, hobbies } = user || {};

	return user ? (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	) : <p>Loading...</p>;
}

export default UserInfoDataSourced;