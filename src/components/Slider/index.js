import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Converse from '../../assets/images/conv1.jpg'
import Vans from '../../assets/images/vans1.jpg'
import Marten from '../../assets/images/martens1.jpg'
import Item from './Item'

export default function Index() {
  const data = [
    {
      id: 1,
      title: 'Converse',
      image: Converse,
      price: '£69.99',
      subTitle: 'Sale',
    },
    {
      id: 2,
      title: 'Dr. Martens',
      image: Vans,
      price: '£70',
      subTitle: 'Sale',
    },
    { id: 3, title: 'Vans', image: Marten, price: '£44.99', subTitle: 'Sale' },
  ]

  return (
    <Carousel>
      {data.map((item) => (
        <Item item={item} />
      ))}
    </Carousel>
  )
}
