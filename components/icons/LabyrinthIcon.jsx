import React from 'react';

export const LabyrinthIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="50" cy="50" r="45" />
    <circle cx="50" cy="50" r="25" />
    <line x1="50" y1="5" y2="35" />
    <line x1="50" y1="95" y2="65" />
    <line x1="5" y1="50" y2="35" />
    <line x1="95" y1="50" y2="65" />
  </svg>
);

