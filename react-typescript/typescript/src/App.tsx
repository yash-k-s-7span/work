
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
      <ThemeProvider >
          <Box/>
      </ThemeProvider>
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
    </>
  )
}

export default App
