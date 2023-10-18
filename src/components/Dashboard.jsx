import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Statistic from './Statistic';
import Sales from './Sales';
import Orders from './Orders';
import CircularProgressBar from './Progressbar'
import { BiBold } from 'react-icons/bi';
function Dashboard() {
   
    return (
        <Section>
            <Navbar />
            <div className="grid">
                <div className="grid_1">
                    <Statistic />
                </div> 
            </div>
            <div className="per">
                <div className="sale"><Sales /></div>
                <div className="customer" >
                    
                    <CircularProgressBar percentage={65}  /></div>
            </div>

            <div>
                <Orders />
            </div>
        </Section>
    );
}

export default Dashboard;

const Section = styled.section`
    margin-left: 18vw;
    padding: 2rem;
    height: 100%;

    .grid {
        display: grid;
        grid-template-columns: 100%;
        gap: 2rem;
        margin-top: 2rem;
        .grid_1 {
            z-index: 2;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .per {
        display: grid;
        grid-template-columns: 70% 30%;
        gap: 2rem;
        margin-top: 2rem;
        

        .sale {
            /* Add styles for the "sale" div here */
            grid-column: 1; /* Position the "sale" div in the first column (70%) */
        }

        .customer {
            /* Add styles for the "customer" div here */
            grid-column: 2; /* Position the "customer" div in the second column (30%) */
        }
    }
    .customer{
        background-color: #f5f5f5;
        border-radius: 20px; 
        padding: 20px; /* Add some padding for spacing */
        margin: 10px;
        
    }
`;


