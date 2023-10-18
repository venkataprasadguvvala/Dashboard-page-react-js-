import React from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa"; // Use FaSearch from react-icons/fa

function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h1>Hello Shahrukh 👋,</h1>
      </div>
      <div className="search-bar">
        <FaSearch />
        <input type="search" placeholder="Search..." />
      </div>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;

  .title {
    display: flex;
    align-items: center;

    h1 {
      margin-right: 0.5rem;
      color: black;
      font-weight: bold;
      margin-top: 1rem;
    }
  }

  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 5px;

    input {
      border: none;
      outline: none;
      margin-left: 10px;
      border-radius: 0;
    }
  }
};
`