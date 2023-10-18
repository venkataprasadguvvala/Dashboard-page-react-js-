import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const CircularProgressBar = ({ percentage }) => {
  const text = `${percentage}%`;
  const spanHead = {
    fontWeight: 'bold'
  };
  const spanStyle = {
    fontSize: '10px',
  };

  return (
    <ProgressBarContainer>
      <div style={{ position: 'relative' }}>
        <span style={spanHead}>customers</span>
        <br />
        <span style={spanStyle}>customers that buy products</span>
        <br />
        <CircularProgressbar
          value={percentage}
          text={text}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: 'red', // You can adjust the color
            trailColor: 'transparent',
            textSize: '14px', // Adjust the font size
            textColor: 'black',
            fontWeight: 'bold'
          })}
        />
        <div
          style={{
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div style={{ fontSize: '10px', fontWeight: 'bold' }}>Total New</div>
          <div style={{ fontSize: '10px', fontWeight: 'bold' }}>Customers</div>
        </div>
      </div>
    </ProgressBarContainer>
  );
};

export default CircularProgressBar;
