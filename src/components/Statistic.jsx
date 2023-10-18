import React from 'react';
import styled from 'styled-components';
import { AiFillTag,  AiFillDollarCircle, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {CgNotes} from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";






function Statistic() {
    return (
        <Section>
            <div className="analytic color1">
                <div className="design">
                    <div className="logo">
                        <AiFillDollarCircle />
                    </div>
                    <div className="content">
                        <h6>Earning</h6>
                        <h5 style={{ color: '#000' }}>$198k</h5>
                        <AiOutlineArrowUp className="svg1" style={{ color: 'green' ,fontSize: 10,}} />
                        <span className="t1" style={{  fontSize: 10, }}> <span style={{ color: 'green'}}>  37% </span>this month</span>
                        
                    </div>
                </div>
                
            </div>
            <div className="analytic color2">
                <div className="design">
                    <div className="logo">
                        <CgNotes />
                    </div>
                    <div className="content">
                        <h6>Orders</h6>
                        <h5 style={{ color: '#000' }}>$12k</h5>
                        <AiOutlineArrowDown className="svg2" style={{ color: 'red',fontSize: 10  }} />
                        <span className="t2" style={{ fontSize: 10  }}> <span style={{ color: 'red'}}> 2%</span> this month</span>
                       
                    </div>
                </div>
            </div>

               <div className="analytic color3">
                <div className="design">
                    <div className="logo">
                    <IoWalletOutline />
                    </div>
                    <div className="content">
                        <h6>Balance</h6>
                        <h5 style={{ color: '#000' }}>$1.2k</h5>
                        <AiOutlineArrowDown className="svg1" style={{ color: 'red',fontSize: 10 }} />
                        <span className="t1" style={{ fontSize: 10 }}> <span style={{ color: 'red'}}>2%</span> this month</span>
                    </div>
                </div>
            </div>
            <div className="analytic color4">
                <div className="design">
                    <div className="logo">
                       <SlHandbag/>
                    </div>
                    <div className="content">
                        <h6>Total Sales</h6>
                        <h5 style={{ color: '#000' }}>$89k</h5>
                        <AiOutlineArrowUp className="svg1" style={{ color: 'green' ,fontSize: 10,}} />
                        <span className="t1" style={{  fontSize: 10, }}> <span style={{ color: 'green'}}>  11% </span>this month</span>
                        
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Statistic;

const Section = styled.section `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .color1 {
        background-color: #EEF4FF;
    }
    .color2 {
        background-color: #FDF4F5;
    }
    .color3 {
        background-color: #FFFCE4;
    }
    .color4{
        background-color: #FDF4F5;

    }
        
    }
    .analytic {
        padding: 1rem;
        border-radius: 1rem;
        color: black;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #D4E0FF;
            color: black;
            svg {
                color: black;
            }
        }
        .design {
            display: flex;
            align-items: center;
            gap: 1rem;
            .logo {
                background-color: white;
                border-radius: 50%;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.5rem;
                svg {
                    font-size: 1.5rem;
                }
            }
            .content {
                flex: 1; /* Make the content take the remaining space */
            }
        }
        .total {
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: space-evenly;
            margin-top: 20px;
            .svg1 {
                color: green;
            }
            .svg2 {
                color: red;
            }
            .t1 {
                color: green;
            }
            .t2 {
                color: red;
            }
            h6 {
                color: grey;
            }
        }
    }
`;
