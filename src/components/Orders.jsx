import React from 'react';
import styled from 'styled-components';
import apple from "../assets/apple.png";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

function Orders() {
  return (
    <Section>
      <div className="orders">
        <div className="orders__details">
          <h4>Product Sell</h4>
          <div className="search-bar">
            <div className="search-input">
              <CiSearch />
              <input type="search" placeholder="Search..." />
            </div>
            <div className="buttons">
              <button>Last 30 days</button>
              <BiChevronDown />
            </div>
          </div>
        </div>
        <div >
          <span className="product">Product Name</span>
          <span className="stock">Stock</span>
          <span className="psale">Price</span>
          <span className="psale">Total Sales</span>
        </div>
        <div className="orders__table">
          <table>
            <tbody>
              <tr >
                <td className="product-cell">
                
               
                <img src={apple} alt="My Image" className='watch' />
                  <span > <span className='product'>Apple Watch</span><br/><span className='fun'>lorem Lorem ipsum dolor sit amr</span></span>
                 
                </td>
                <td>Jul 29,2021</td>
                <td>$3298987</td>
                <td>
                 20000
                </td>
               
              </tr>
            </tbody>
          </table>
        </div>
      </div> 
    </Section>
  );
}

export default Orders;

const Section = styled.section`
  .orders {
    color: black;
    width: 100%;
    display: block;
    background-color: #f5f5f5; /* Set the background color */

    border-radius: 20px; 
 
    .orders__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      
      div {
        display: flex;
        gap: 1rem;
        
        button {
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: white;
          color: #668DFF;
          font-weight: bold;
        }
      }
    }
    .fun{
        font-size: 10px;

    }
    .product{
        font-weight: bold; 
    }
     .imag{
        height:50px;
        width:50px;
     }
    .search-bar {
      display: flex;
      align-items: center;
      width: 50%;

      .search-input {
        display: flex;
        align-items: center;
        border: 1px solid #668DFF;
        border-radius: 20px;
        padding: 5px;

        svg {
          color: #668DFF;
          font-size: 20px;
          margin-right: 10px;
        }

        input {
          border: none;
          outline: none;
          width: 50%;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: white;
          color: #668DFF;
          font-weight: bold;
        }
      }
    }
    .watch{
        height:50px;
        width:50px;
    }
    
    .stock{
      padding-left: 350px; /* Adjust the padding as needed */
    }
    
    .psale{
      padding-left: 140px; /* Adjust the padding as needed */
    }

   

    .orders__table {
      
    
      
      table {
        
        border-collapse: collapse;
        width: 100%;
        
        th, td {
            text-align: justify;
          

          span {
            margin-top: 0.2rem;
           
          }
        }
        
       
      }
    }
    .product-cell {
        display: flex; /* Make the image and text appear on the same line */
        align-items: center;
      }
  }
`