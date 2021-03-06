import React from 'react';
import { Card, H4 } from '@blueprintjs/core';
import './shop-card.css';

export function ShopCard(props) {
  const styles = {
    backgroundImage: `url(${props.img})`
  };
  return (
    <Card className='shop-card-container' interactive={true} onClick={props.onClick}>
      <div className='shop-card-img-container' style={styles} />
      <H4>{props.name}</H4>
      <p>${props.price}</p>
    </Card>
  );
}
