import React from 'react';
import './Cards.css';

export function Card(props) {
  return <div className="block">
    <div className="headBlock" style={{backgroundColor: props.color}}>
      <h1>{props.title}</h1>
    </div>
    <div className="priceBlock">
      <h3>{props.price}</h3>
    </div>
    <ul className="liBlock">
      <li>{props.item1 === 'True'? "✅" : "❌"}  Sample text here</li>
      <li>{props.item2 === 'True'? "✅" : "❌"}  Other text title</li>
      <li>{props.item3 === 'True'? "✅" : "❌"}  Text spce gors here</li>
      <li>{props.item4 === 'True'? "✅" : "❌"}  Description space</li>
    </ul>
    <div className="upBlock" style={{backgroundColor: props.color}}>
      <h2>Select Package</h2>
    </div>
  </div>
}

export function BlockOfCards() {
  return <div className="blockforCards">
    <Card title="Basic" price="$2.99" color="green" item1 ="True" item2 ="False" item3 ="False" item4 ="False"></Card>
    <Card title="Standart" price="$5.99" color="blue" item1 ="True" item2 ="True" item3 ="True" item4 ="False"></Card>
    <Card title="Premium" price="$0.99" color="darkblue" item1 ="True" item2 ="True" item3 ="True" item4 ="True"></Card>
  </div>
}
