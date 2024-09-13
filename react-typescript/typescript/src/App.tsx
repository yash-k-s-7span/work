
import './App.css'
import Greet from './components/props/Greet'
import Heading from './components/props/advanced/Heading'
import Person from './components/props/Person'
import PersonList from './components/props/PersonList'
import Status from './components/props/advanced/Status'
import Oscar from './components/props/advanced/Oscar'
import Button from './components/props/event-props/Button'
import Input from './components/props/event-props/Input'
import Container from './components/props/style-props/Container'
import Counter from './components/use-reducer/Counter'
import { ThemeProvider } from './components/use-context/ThemeContext'
import Box from './components/use-context/Box'
import { UserContextProvider } from './components/use-context/UserContext'
import Users from './components/use-state-hook/User'
import { User } from './components/use-context/User'
import DomainRef from './components/use-ref/DomainRef'
import MutatingRef from './components/use-ref/MutatingRef'
import Profile from './component-props/Profile'
import { Private } from './component-props/Private'
import { List } from './generics-props/List'
import { RestrictingProps } from './restricting-props/RandomNumber'
import { Toast } from './template-literals/Toast'
import { CustomButton } from './html/Button'
import { CustomInput } from './html/Input'
import { Text } from './polymorphic-component/Text'

function App() {
  const person = {
    first:'Yash',
    last:'Solanki'
  }

  const nameList = [
    {
      first:'Yash',
      last:'Solanki'
    },
    {
      first:'Yesh',
      last:'Solanki'
    },
    {
      first:'Yes',
      last:'Sol'
    }
  ]

  return (
    <>
      {/* <Greet name='Yash' isLoggedIn={true}  /> */}
      {/* <Person name={person}/> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status='Error' /> */}
      {/* <Heading>SSS</Heading> */}

      {/* Passing react component as children props */}
      {/* <Oscar>
          <Heading>Oscar goes to Vacation</Heading>
      </Oscar> */}

      {/* <Button buttonClick={(event,id) => {console.log('Button click',event,id)} }/> */}
      {/* <Input value='' handleChange={(event) => console.log(event)}/> */}
      {/* <Container styles={{border:'1px solid red',padding:'1rem'}}/> */}
      {/* <Counter/>           */}
      {/* <ThemeProvider >
          <Box/>
      </ThemeProvider> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <DomainRef/>
      <MutatingRef/> */}
      {/* <Counter/> */}
      {/* Component props */}
      {/* <Private isLoggedIn={false} component={Profile}/> */}
      {/* <List items={['yash','yesh']}  onClick={(item) => console.log(item)} render={(item) => <h1>{item}</h1> } />
      <List items={[1,2,3]} onClick={(item) => console.log(item)}  render={(item) => <h1>{item}</h1>}/>
      <List items={[
                {
                 
                  name:'yash',
                  email:'yash@gmail.com'
                },
                {
               
                  name:'yesh',
                  email:'yesh@gmail.com'}
                ]
                } onClick={(item) => console.log(item)} render={(items) => (
                  <div>
                    <h2>{items.name}</h2>
                    <h2>{items.email}</h2>
                  </div>
                )}/> */}

        {/* <RestrictingProps value={10} isPositive />

        <Toast position='center'/>
        <CustomButton variant='primary' onClick={() => console.log('clicked')}>
          Hello 
        </CustomButton>
        <CustomInput inputed='yash'/> */}
        <Text as='h1' size='lg'  color='primary'>Hello</Text>
        <Text as='p' size='md' color='secondary'>There</Text>
        <Text as='pre' size='sm'>Data</Text>
    </>
  )
}

export default App
