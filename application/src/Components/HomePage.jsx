import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Filtercards=styled.div`
@media (max-width: 1300px) {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top:1%;

  
}
@media (max-width: 700px) {
display:grid;
grid-template-columns: repeat(2, 1fr);
gap:10px;
}
@media (max-width: 400px) {
display:grid;
grid-template-columns: repeat(1, 1fr);
gap:15px;
}
 display:grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top:1%;
  gap:5px;
  width:95%;
  margin:auto;
`

const Filtercard =styled.div`

border:1px solid white;
background-color:#4CAF50;
color:white;
padding-top:2%;
width:100%;
margin:auto;
&:hover {
  background-color: darkgreen; 
  color:yellow;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  cursor:pointer;
}
`
const StyledInput = styled.input`
  padding: 10px;
  width:90%;
  border: 1px solid green;
  border-radius: 50px;
  font-size: 20px;
  margin-top:8%;
  margin-bottom:2%;
  cursor:pointer;
  @media (max-width: 1300px) {
    margin-top:15%;
  }
  @media (max-width: 780px) {
    margin-top:30%;
  }
  @media (max-width: 500px) {
    margin-top:40%;
  }
  @media (max-width: 250px) {
    margin-top:70%;
    font-size:10px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color:#4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom:2%;
  margin-right: 10px; 
  transition: background-color 0.3s; 

  &:hover {
    background-color: darkgreen; 
  }
`;


export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('');
  // const [sortOrder, setSortOrder] = useState('lowToHigh');

  useEffect(() => {
    
    const apiUrl = 'https://nature-trug-database.vercel.app/Products';

    
    axios.get(apiUrl)
      .then((response) => {
        
        setProducts(response.data); 
      })
      .catch((error) => {
       
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter the products based on the filter value
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [filter, products]);

  const sortProductsByName = () => {
    const sorted = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredProducts(sorted);
  };

  const sortProducts = (order) => {
    const sorted = [...filteredProducts];
    if (order === 'lowToHigh') {
      sorted.sort((a, b) => a.Price - b.Price);
    } else {
      sorted.sort((a, b) => b.Price - a.Price);
    }
    setFilteredProducts(sorted);
  };


  return (
    <div>
      <StyledInput 
    type="text"
    placeholder="◢◤◢◤◢◤◢◤◢◤◢◤Filter products by category (eg : Organic / Fresho / USA / Gopalan Organic....)◢◤◢◤◢◤◢◤◢◤◢◤"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
   
   <StyledButton onClick={() => sortProducts('lowToHigh')}>
        Sort by Price (Low to High)
      </StyledButton>
      <StyledButton onClick={sortProductsByName}>Sort by Name</StyledButton>
      <StyledButton onClick={() => sortProducts('highToLow')}>
        Sort by Price (High to Low)
      </StyledButton>
  <Filtercards>
    {filteredProducts.map((product) => (
     <Filtercard key= {products.id}>
      <img src={product.Image} alt={product.name} />
      <p>Title: {product.name}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.Price}</p>
    </Filtercard>
    ))}
  </Filtercards>


     
    </div>
  )
}
