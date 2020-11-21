import styled from 'styled-components';
import {
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AddWordPage from './pages/AddWordPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const StyledWrapper = styled.div`
        
`;



function App() {


  return (
    <StyledWrapper>
  
      <div>
        <div><Link to="/">Home page</Link></div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/register">Register</Link></div>
        <div><Link to="/add-word">Add word</Link></div>
        
      </div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/add-word">
          <AddWordPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    
    </StyledWrapper>
  );
}

export default App;
