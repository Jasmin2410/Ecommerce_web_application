
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Productcard = styled.div`
  @media (max-width: 1000px) {
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    padding-top:17%;
  
  }
  @media (max-width: 500px) {
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    padding-top:55%;
    color:black;
    
  }

display:grid;
grid-template-columns: repeat(4, 1fr);
width:100%;
margin:auto;
padding-top:8%;
padding-bottom:10%;
padding-right:10%;
gap:5px;
color:black;

`
const Productcards = styled.div`
border:1px solid white;
padding-top:2%;
background-color:#4CAF50;
color:white;
width:100%;
margin:auto;
&:hover {
  background-color: darkgreen; 
  color:yellow;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  cursor:pointer;
}
`
const PaginationContainer = styled.div`
@media (max-width: 1000px) {
  width: 15%;
  font-size:20px;
  margin-top:-20%;
  margin-left:-10%;
}
@media (max-width: 500px) {
  width: 25%;
  font-size:20px;
  margin-top:-55%;
  margin-left:-15%;
  padding-left:-10%;
  padding-bottom:25%;

}
  background-color: green;
  width:12%;
  height:100%;
  position:fixed;
  color:white;
  margin-top:-13%;
  margin-left:-10%;
  padding-top:5%;
  font-size:40px;
  &:hover {
    background-color: green;
    cursor:pointer;
  }
 
`;
const Pageproductcontainer = styled.div`
@media (max-width: 1000px) {
  display:flex;
  justify-content: space-between;
  margin:auto;
  width: 90%;
  
}
display:flex;
width:90%;
justify-content: space-between;
padding-top:5%;
margin:auto;
background-color:rgb(158, 254, 158);


`

export const ProductsPage = () => {


  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;


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
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };



  return (
    <div>

      <Pageproductcontainer>


        <Productcard>
          <div>
            <PaginationContainer>
              <ReactPaginate

                previousLabel={'▲'}
                nextLabel={'▼'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}

              />
            </PaginationContainer>
          </div>
          {products
            .slice(
              pageNumber * productsPerPage,
              (pageNumber + 1) * productsPerPage
            )
            .map((product) => (
              <Productcards key={products.id}>
                <img src={product.Image} alt={product.name} />
                <p>Title: {product.name}</p>
                <p>Description: {product.category}</p>
                <p>Price: {product.Price}</p>
               
              </Productcards>
              
            ))}
        </Productcard>
      </Pageproductcontainer>
      <p>Page No:{pageNumber+1}</p>
    </div>
  );
}
