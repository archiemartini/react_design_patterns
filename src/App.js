import './App.css';
import axios from 'axios';
import RegularList from './components/RegularList';
import SplitScreen from './components/SplitScreen';
import SmallPersonListItem from './components/people/SmallPersonListItem';
import LargePersonListItem from './components/people/LargePersonListItem';
import LargeProductListItem from './components/products/LargeProductListItem';
import SmallProductListItem from './components/products/SmallProductListItem';
import NumberedList from './components/NumberedList';
import Modal from './components/Modal';
import CurrentUserLoader from './components/containers/CurrentUserLoader';
import UserInfo from './components/people/UserInfo';
import UserLoader from './components/containers/UserLoader';
import ResourceLoader from './components/containers/ResourceLoader.js';
import ProductInfo from './components/products/ProductInfo';
import DataSource from './components/containers/DataSource';
import UncontrolledForm from './components/uncontrolled/UncontrolledForm';
import ControlledForm from './components/controlled/ControlledForm';

const LeftHandComponent = ({ message }) => {
  return (
    <div>
      <h1 style={{backgroundColor: 'green'}}>Left!</h1>
      <p>{message}</p>
    </div>
  )
}

const RightHandComponent = ({message}) => {
  return (
    <div>
      <h1 style={{backgroundColor: 'red'}}>Right!</h1>
      <p>{message}</p>
    </div>
  )
}



function App() {

  const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  }, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  }, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  }];
  
  const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  }, {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  }, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  }];

  const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;
  }

  const getLocalStorageData = (key) => () => {
    return localStorage.getItem(key)
  }

  const Text = ({ message }) => <h1>{message}</h1>;
  

  return (
    <>
      <h1 className='header'>Controlled Form Component</h1>
      <ControlledForm />
      <h1 className='header'>Uncontrolled Form Component</h1>
      <UncontrolledForm />
      <h1 className='header'>Uncontrolled and Controlled Components</h1>
      <p className='header'>Uncontrollled Components:</p>
      <p className='header'>Components that keep track of their own states and rlease data only when some event occurs (that is, the submit event for HTML forms). Controlled components are easier to test, mroe reusable, and generally preferred.</p>
      <p className='header'>Controllled Components:</p>
      <p className='header'>Components that do not keep track of their own state - all state is passed in as a prop (that is, when we use the useState Hook with text inputs)</p>
      <h1 className='header'>DataSource Container Component</h1>
      <p className='header'>Two examples:</p>
      <DataSource 
        getDataFunc={async () => {
          const response = await axios.get('/users/123')
          return response.data
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSource> 
      <DataSource 
        getDataFunc={getServerData('/users/123')}
        resourceName="user"
      >
        <UserInfo />
      </DataSource> 
      <h2 className='header'>DataSource with LocalStorage</h2>
      <p className='header'>For this you may have to open up developer tools to manually enter a key/value into Application>localstorage</p>
      <DataSource 
        getDataFunc={getLocalStorageData('message')}
        resourceName="message"
      >
        <Text />
      </DataSource> 
      <h1 className='header'>ResourceLoader Container Component</h1>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
      <h1 className='header'>UserLoader Container Component</h1>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>
      <h1 className='header'>CurrentUserLoader Container Component</h1>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <h1 className='header'>Modal Components</h1>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
      <h1 className='header'>SplitScreen Component</h1>
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={3}
      >
        <LeftHandComponent message={'Yo yo yo'}/>
        <RightHandComponent message={'Bastard'}/>
      </SplitScreen>
      <h1 className='header'>List Components</h1>
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList 
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
      <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
    </>
  );
}

export default App;
