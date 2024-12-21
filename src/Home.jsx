import React from 'react';

import './App.css';

export default function Home() {
  const data = ['Jasurbek'];
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>{data[0]}</h1>
    </div>
  );
}
