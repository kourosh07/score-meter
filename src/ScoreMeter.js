import React from 'react';
import './ScoreMeter.css';

const ScoreMeter = ({ score }) => {
  const radius = 50; 
  const strokeWidth = 10;
  const circumference = Math.PI * radius; 
  const offset = circumference - (score / 100) * circumference; 

  return (
    <svg width="120" height="60"> 
      <path
        d={`M 10 60 A 50 50 0 0 1 110 60`}
        stroke="lightgray"
        fill="transparent"
        strokeWidth={strokeWidth}
      />
      <path
        d={`M 10 60 A 50 50 0 0 1 110 60`}
        stroke="blue"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
      />
      <text x="60" y="40" textAnchor="middle" fontSize="20" fill="#333">
        {score}%
      </text>
    </svg>
  );
};

export default ScoreMeter;
