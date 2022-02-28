import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

import { ShopProvider } from "./store/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Wrapper>
          <TitleWrapper>
            <h1>useReduser Hook starter project</h1>
          </TitleWrapper>
          <LinksWrapper>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </LinksWrapper>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;
    font-size: 30px;

    :hover {
      color: #bb7200;
      text-decoration: underline;
    }
  }
`;
