import React from 'react';
import './Cards.css';

export function Card(props) {
  return <div className="block">
    <div className="headBlock">
      <h1>{props.title}</h1>
    </div>
    <div className="priceBlock">
      <h3>{props.price}</h3>
    </div>
    <ul className="liBlock">
      <li>Sample text here</li>
      <li>Other text title</li>
      <li>Text spce gors here</li>
      <li>Description space</li>
    </ul>
    <div className="upBlock">
      <h2>Select Package</h2>
    </div>
  </div>
}

export function BlockOfCards() {
  return <div className="blockforCards">
    <Card title="Basic" price="$2.99"></Card>
    <Card title="Standart" price="$5.99"></Card>
    <Card title="Premium" price="$0.99"></Card>
  </div>
}
