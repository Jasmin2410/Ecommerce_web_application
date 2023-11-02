import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: green;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 10px;
  position: fixed;
  width:100%;
  

 

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    position: fixed;
  }
`;
const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
    position: sticky;
  }
`;
const NavLink = styled(Link)`
color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 10px;
    position: sticky;
  }
`;

function App() {
  return (
    
    
    <div className="App">
      <NavbarContainer>
      <h1>
        <NavLink to="/logo">Home</NavLink>
      </h1>
     <NavLinks>
      <NavLink to="/">Vegetables</NavLink>
       <NavLink to="/products">Products</NavLink>
  
       
       </NavLinks>
       </NavbarContainer>
       <AllRoutes />
   </div>

  );
}

export default App;
