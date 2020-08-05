import React from 'react';
import Header from '../Components/Header';
//import Link from 'next/link';

export default function Favourite() {
  return (
    <div className="recipes-page">
      <Header />
      <div>
        <h3>Favourite</h3>
      </div>
      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
