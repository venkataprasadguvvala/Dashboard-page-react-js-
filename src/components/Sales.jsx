import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AiOutlineCaretDown } from 'react-icons/ai';

function Sales() {
  const data = [
    { month: 'Jan', data1: 24 },
    { month: 'Feb', data1: 13 },
    { month: 'Mar', data1: 12 },
    { month: 'Apr', data1: 39 },
    { month: 'May', data1: 48 },
    { month: 'Jun', data1: 38 },
    { month: 'Jul', data1: 43 },
    { month: 'Aug', data1: 35 },
    { month: 'Sep', data1: 45 },
    { month: 'Oct', data1: 30 },
    { month: 'Nov', data1: 29 },
    { month: 'Dec', data1: 20 },
  ];

  return (
    <Section>
      <span className="headings">
        <span>Overview</span>
        <span className="quarterly-button">
          <button>
            Quarterly
            <AiOutlineCaretDown />
          </button>
        </span>
      </span>
      <span>Monthly Earnings</span>
      <div className="sales__graph">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 0 }}>
            <XAxis dataKey="month" />
            <YAxis hide={true} />
            <Tooltip cursor={false} />
            <Bar
              dataKey="data1"
              fill="#668DFF"
              barSize={30}
              baseValue="dataMin"
              shape={(props) => {
                const { x, y, width, height } = props;
                return (
                  <rect x={x} y={y} width={width} height={height} rx={10} ry={10} fill="#668DFF" />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

export default Sales;

const Section = styled.section`
  background-color: #f5f5f5; /* Light ash-colored background */
  border-radius: 20px; /* Rounded edges */
  padding: 20px; /* Add some padding for spacing */
  margin: 10px; /* Add margin to create space around the section */

  .headings {
    display: flex;
    justify-content: space-between;
    div {
      background-color: #f0f0f0;
      padding: 10px;
      margin: 0;
    }

    .quarterly-button {
      display: flex;
      align-items: center;

      button {
        border-radius: 0.5rem;
        padding: 0.4rem 1rem;
        border: none;
        cursor: pointer;
        background-color: #EEF4FF;
        color: black;
        display: flex;
        align-items: center;
        svg {
          font-size: 0.6rem;
          margin-left: 5px;
        }
      }
    }
  }

  .sales__graph {
    height: 15rem; /* Adjust the height as needed */
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
      color: white !important;
    }
    .recharts-cartesian-axis-line {
      display: none; /* Hide the X-axis line */
    }
  }
};
`