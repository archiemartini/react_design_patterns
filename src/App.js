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
import ControlledModal from './components/controlled/ControlledModal';
import { useState } from 'react';
import UncontrolledOnboardingFlow from './components/uncontrolled/UncontrolledOnboardingFlow';
import ControlledOnboardingFlow from './components/controlled/ControlledOnboardingFlow';
import printProps from './components/higherOrderComponents/printProps';
import withUser from './components/higherOrderComponents/withUser';
import UserInfoForm from './components/people/UserInfoForm';
import UserInfoFormResource from './components/people/UserInfoFormResource';
import useCurrentUser from './hooks/useCurrentUser';
import UserInfoHooked from './components/people/UserInfoHooked';
import ProductInfoHooked from './components/products/ProductInfoHooked';
import UserInfoDataSourced from './components/people/UserInfoDataSourced';
import RecursiveComponent from './components/functionalComponents/RecursiveComponent'
import { BigSuccessButton, DangerButton } from './components/functionalComponents/Composition';
import { BigSuccessButtonPartial, DangerButtonPartial } from './components/higherOrderComponents/partiallyApply';

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
  const [shouldShowModal, setShouldShowModal] = useState(false);

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

  const StepOne = ({goToNext}) => (
    <>
      <h1>Step 1</h1>
      <button onClick={() => goToNext({ name: 'John Doe'})}>Next</button>
    </>
  )
  const StepTwo = ({goToNext}) => (
    <>
      <h1>Step 2</h1>
      <button onClick={() => goToNext({ age: 100})}>Next</button>
    </>
  )
  const StepThree = ({goToNext}) => (
    <>
      <h1>Step 3</h1>
      <p>Congrats, you qualify for a senior discount!</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  )

  const StepFour = ({goToNext}) => (
    <>
      <h1>Step 4</h1>
      <button onClick={() => goToNext({ hairColor: 'brown'})}>Next</button>
    </>
  )

  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = (stepData) => {
    setOnboardingData({...onboardingData, ...stepData})
    setCurrentIndex(currentIndex + 1)
  }

  // Higher Order Component Setup

  const UserInfoWrapped = printProps(UserInfo)

  const UserInfoWithLoader = withUser(UserInfo, '234')

  // FOr the Functional programming section

  const nestedObject = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: 'Hello',
      },
      b3: {
        b31: {
          message: 'Hi',
        },
        b32: {
          message: 'Hi',
        }
      }
    },
    c: {
      c1: 2,
      c2: 3,
    }
  }

  return (
    <>
      <h1 className='header'>Partially Applied Components</h1>
      <p>For this I've created a HigherOrder Component called partiallyApply.js</p>
      <BigSuccessButtonPartial text="YES" />
      <DangerButtonPartial text="Dont do it!" />
      <h1 className='header'>Composition Component</h1>
      <BigSuccessButton text="YES"/>
      <DangerButton text="Dont do it!"/>
      <h1 className='header'>Recursive Component</h1>
      <RecursiveComponent data={nestedObject} />
      <h1 className='header'>^^Functional Programming^^</h1>
      <p>A method of organising code in a way that</p>
      <ol>
        <li>Minimises mutation and stat change</li>
        <li>keeps functions independent of external data</li>
        <li>Treats functions as first-class citizens</li>
      </ol>
      <h3>Applications of FP in React</h3>
      <ul>
        <li>Controlled compoentns - as we've seen before</li>
        <li>Function components - an example being usage of functional React components, in itself is functional</li>
        <li>Higher Order components - functions that return functions, making them first class functions</li>
        <li>Recursive Components - use recursion in order to achieve a desired effect</li>
        <li>Partially applied components - we can begin with more general components and then with passing in more props, create more specific versions of the same component</li>
        <li>Component composition</li>
      </ul>
      <p className='header'></p>
      <h1 className='header'>useDataSource</h1>
      <p className='header'>Usage found in UserInfoDataSourced.js</p>
      <UserInfoDataSourced userId={'123'}/>
      <h1 className='header'>useResource</h1>
      <ProductInfoHooked productId={'2345'}/>
      <h1 className='header'>useCurrentUser // useUser</h1>
      <h3>Returns a user object:</h3>
      <h3>{JSON.stringify(useCurrentUser())}</h3>
      <UserInfoHooked userId={'123'} />
      <UserInfoHooked userId={'234'} />
      <UserInfoHooked userId={'345'} />
      <p className='header'>The tutorial wanted me to edit UserInfo.js but again for posterity's sake, I'm using UserInfoHooked.js</p>
      <h1 className='header'>^^Custom Hooks^^</h1>
      <h1 className='header'>A Editable Wrapped General Resource Loader HO-Component</h1>
      <p className='header'>The tutorial actually wanted me to edit the UserInfoForm.js below but I'm just going to use a new UserInfoFormResource.js for posterity's sake. Take a look at the interesting way the props are built out using the resourceName prop.</p>
      <UserInfoFormResource />
      <h1 className='header'>A Editable Wrapped Loader HO-Component</h1>
      <UserInfoForm />
      <p className='header'>In every example before now we've  initialised the higher order component within the APp.js and the passed it throught there. What you're also allowed to do is simply use this HOC when you define a Component in the first place, see UserInfoForm.js</p>
      <h1 className='header'>A Wrapped Loader HO-Component</h1>
      <UserInfoWithLoader />
      <h1 className='header'>A Wrapped HO-Component</h1>
      <p className='header'>See we only return 'Loading...' because we don't supply a user object to UserInfo, do check the console logs coming from within printProps.</p>
      <UserInfoWrapped a={1} b={"Hiya"} c={{name: 'Shaun'}} />
      <h1 className='header'>^^Higher Order Components^^</h1>
      <p className='header'>A component that returns another component instead of JSX. They do not follow conventions like components, so no Pascal case.</p>
      <h1 className='header'>Controlled Onboarding Flow Component</h1>
      <p className='header'>This gives us way more flexibility within our onboarding flow</p>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
      >
        <StepOne />
        <StepTwo />
       {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
      <h1 className='header'>Uncontrolled Onboarding Flow Component</h1>
      <p className='header'>The problem with this, although it will work, is it only displays Step 1. But the components themselves, 2, and 3, don't have any way to go to the next step</p>
      <UncontrolledOnboardingFlow onFinish={data => {
        console.log(data)
        alert('Onboarding Complete')
        }}>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
      </UncontrolledOnboardingFlow>
      <h1 className='header'>Controlled Modal Component</h1>
      <p className='header'>We already have an example of a uncontrolled modal further down the page. This modal controls whether or not its shown and whether it's hidden. The main problem is none of the other components, the parent component, really has no control over what this Modal is doing. Let's say we had an outer button we wanted to control the previous Modal, now we do...</p>
      <ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide Modal' : 'Show Modal' }
      </button>
      <h1 className='header'>Controlled Form Component</h1>
      <ControlledForm />
      <h1 className='header'>Uncontrolled Form Component</h1>
      <UncontrolledForm />
      <h1 className='header'>^^Uncontrolled and Controlled Components^^</h1>
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
      <p className='header'>For this you may have to open up developer tools to manually enter a key/value into Application.localstorage</p>
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
