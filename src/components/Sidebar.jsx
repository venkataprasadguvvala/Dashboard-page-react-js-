import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { TbUserSquareRounded } from "react-icons/tb";
import { TbMessageReport } from "react-icons/tb";
import { TbHexagonNumber0 } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import avatarImage from "../assets/avatar.jpg"
import { TbChevronDown } from "react-icons/tb";





function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    return (
        <Section>
            <div className="top">
                    <div className="brand">
                        <TbHexagonNumber0/>
                        <span>Dashboard</span>
                    </div>
                    <div className="links">
                        <ul>
                            <li
                            className={currentLink === 1 ? "active" : "none"}
                            onClick={() => setCurrentLink(1)}
                            >
                                <a href="#">
                                    <AiOutlineAppstore />
                                    <span className="border">Dashboard</span>
                                </a>
                            </li>
                           
                            <li
                            className={currentLink === 2 ? "active" : "none"}
                            onClick={() => setCurrentLink(2)}
                            >
                                 <a href="#">
                                <div className="list-item-content">
                                    <div className="left-content">
                                        <AiOutlineShopping />
                                        <span className="border">Product</span>
                                    </div>
                                    <div className="right-content">
                                        <TbChevronRight />
                                    </div>
                                </div>
                            </a>

                            </li>
                           
                            <li
                            className={currentLink === 3 ? "active" : "none"}
                            onClick={() => setCurrentLink(3)}
                            >
                                <a href="#">
                                <div className="list-item-content">
                                    <div className="left-content">
                                    <TbUserSquareRounded />
                                        <span className="border">customer</span>
                                    </div>
                                    <div className="right-content">
                                        <TbChevronRight />
                                    </div>
                                </div>
                                    
                                   
                                </a>
                            </li>
                            <li
                            className={currentLink === 4 ? "active" : "none"}
                            onClick={() => setCurrentLink(4)}
                            >
                                <a href="#">
                                <div className="list-item-content">
                                    <div className="left-content">
                                    <IoWalletOutline />
                                        <span className="border">income</span>
                                    </div>
                                    <div className="right-content">
                                        <TbChevronRight />
                                    </div>
                                </div>
                                    
                                </a>
                            </li>
                            <li
                            className={currentLink === 5 ? "active" : "none"}
                            onClick={() => setCurrentLink(5)}
                            >
                                <a href="#">
                                <div className="list-item-content">
                                    <div className="left-content">
                                    <LuBadgePercent />
                                        <span className="border">promote</span>
                                    </div>
                                    <div className="right-content">
                                        <TbChevronRight />
                                    </div>
                                </div>

                                </a>
                            </li>
                            <li
                            className={currentLink === 6 ? "active" : "none"}
                            onClick={() => setCurrentLink(6)}
                            >
                                <a href="#">
                                <div className="list-item-content">
                                    <div className="left-content">
                                    <TbMessageReport />
                                        <span className="border">Help</span>
                                    </div>
                                    <div className="right-content">
                                        <TbChevronRight />
                                    </div>
                                </div>
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
           
            <div className="image">
    <img src={avatarImage} alt="" />
    <div className="username">
        <span className='name'>Evano<br/><span className='role'>project Manager</span></span> 
       <span className='down'> <TbChevronDown /></span> 
    </div>
</div>

                   
        </Section>
    )
}

export default Sidebar
const Section = styled.section`
    position: fixed;
    left: 0;
    background-color: #F8F9EF;
    height: 100vh;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;

    .top {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        .brand {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.3rem 0;
            svg {
                color: blue;
                font-size: 2rem;
            }
            span {
                font-size: 1.5rem;
                font-weight: bold;
                color: black;
            }
        }

        .links {
            display: flex;
            justify-content: center;

            ul {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                li {
                    padding: 0.6rem 2rem;
                    border-radius: 0.3rem;

                    &:hover {
                        background-color: black;
                        a {
                            color: white;
                        }
                    }

                    a {
                        text-decoration: none;
                        color: grey;
                    }
                }

                .active {
                    background-color: black;
                    a {
                        color: white;
                    }
                }
            }
        }
    }

    .image {
        display: flex;
        background-color: #F0F0F0; /* Light ash background color */
        align-items: center;
        width:100%;
     /* Add padding for spacing */
        gap: 5px;
        img {
            padding:5px;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 3rem;
        }

        .username {
            display: flex;
            padding-left:5px;
            padding-right:30px;
            align-items: center;
            gap: 0.5rem;
            font-size: 1rem; /* Adjust font size as needed */
            color: black; /* Text color */

            .role{
                font-size:12px;
            }
           
        }
    }
 
    

    .list-item-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .left-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .right-content {
        /* Add any additional styling for the right content here */
    }
`;
