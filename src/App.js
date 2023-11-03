import './App.css';
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

  return (
    <>
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
