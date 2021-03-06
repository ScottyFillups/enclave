import React from 'react';
import { Link } from 'react-router-dom'
import { Overlay, Navbar, Alignment, Icon, Colors } from '@blueprintjs/core';
import { ShopCard } from '../components/shop-card';
import { ShopForm } from '../components/shop-form';

const pageStyle = {
  width: '60rem',
  margin: '3rem auto 0px auto'
};

const iconStyle = {
  marginRight: '1rem',
  color: 'white'
};

const MAIN_COLOR = Colors.FOREST4;
const onesieData = [
  {
    img: 'https://rgmerch-a.akamaihd.net/products/production/1593-60-00/07-15-2019%2017:44:21:426_Beemo_Onesie_Human_2.png',
    name: 'Beemo Onesie',
    price: 199.99
  }, 
  {
    img: 'https://www.tipsyelves.com/mas_assets/cache/image/3/4/e/5/13541/Unicorn-onesie-01.Jpg',
    name: 'Unicorn Onesie',
    price: 249.99
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/1506/4676/products/FIJI-WATER-ONESIE-VAPORWAVE-CLOTHING-AESTHETIC-NOBG_1024x1024.jpg?v=1566514854',
    name: 'Fiji Water Onesie',
    price: 149.99
  },
  {
    img: 'https://cdn11.bigcommerce.com/s-1ddqe/images/stencil/original/products/751/1762/KFC_onesie__31578.1478762234.jpg?c=2',
    name: 'KFC Onesie',
    price: 99.99
  },
  {
    img: 'https://www.tipsyelves.com/mas_assets/cache/image/2/e/d/4/11988.Jpg',
    name: 'America Onesie',
    price: 599.99
  },
  {
    img: 'https://www.festival-onesies.nl/wp-content/uploads/2018/07/Dieren-onesie-haaienpak.jpg',
    name: 'Shark Onesie',
    price: 239.99
  }
]

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      selectedProduct: null
    };
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: MAIN_COLOR, color: Colors.WHITE }}>
          <Navbar.Group align={Alignment.CENTER}>
            <Navbar.Heading>
              <Link to="/">
                <Icon
                  style={iconStyle}
                  iconSize={Icon.SIZE_LARGE}
                  icon='shop'
                ></Icon>
              </Link>
              Onesies.com
            </Navbar.Heading>
          </Navbar.Group>
        </Navbar>
        <div style={pageStyle}>
          {onesieData.map((onesie, i) => (
            <ShopCard
              key={i}
              img={onesie.img}
              name={onesie.name}
              price={onesie.price}
              onClick={() =>
                this.setState({
                  displayForm: true,
                  selectedProduct: onesie
                })
              }
            />
          ))}
        </div>
        <Overlay
          isOpen={this.state.displayForm}
          onClose={() => this.setState({ displayForm: false })}
        >
          <ShopForm
            onSuccess={() => this.setState({ displayForm: false })}
            product={this.state.selectedProduct}
          />
        </Overlay>
      </div>
    );
  }
}
