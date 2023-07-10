import React from 'react'
import BannerHome from '../../components/Banner'
import CarouseApp from '../../components/Carousel'

const produtc = [
  {
      img: 'https://omegadornier.vteximg.com.br/arquivos/ids/171656-1000-1000/BR10957-OD-copy.jpg?v=637582612297430000',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 55.55
  },
  {
      img: 'https://img.elo7.com.br/product/original/601FB2/brinco-prata-zirconia-e-topazio.jpg',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 45.55
  },
  {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_uOQ_iLIXIwHMmJZYftRXJzciv50PQAAaESDs_jWxdW8Bxy0v9xHN6j3YgmVTEkTSPY&usqp=CAU',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 35.55
  },
  {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_uOQ_iLIXIwHMmJZYftRXJzciv50PQAAaESDs_jWxdW8Bxy0v9xHN6j3YgmVTEkTSPY&usqp=CAU',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 25.55
  },
  {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyhHx0X3a3R_ZW6DCdvOqZYGkb5qG0RhPmzYHA4d5TMEUssj1wPNSn5UJxqZOaABjupA&usqp=CAU',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 15.55
  },
]
const produtc2= [
  {
      img: 'https://omegadornier.vteximg.com.br/arquivos/ids/171656-1000-1000/BR10957-OD-copy.jpg?v=637582612297430000',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 55.55
  },
  {
      img: 'https://img.elo7.com.br/product/original/601FB2/brinco-prata-zirconia-e-topazio.jpg',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 45.55
  },
  {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_uOQ_iLIXIwHMmJZYftRXJzciv50PQAAaESDs_jWxdW8Bxy0v9xHN6j3YgmVTEkTSPY&usqp=CAU',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 35.55
  },
  {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_uOQ_iLIXIwHMmJZYftRXJzciv50PQAAaESDs_jWxdW8Bxy0v9xHN6j3YgmVTEkTSPY&usqp=CAU',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 25.55
  },
  {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyhHx0X3a3R_ZW6DCdvOqZYGkb5qG0RhPmzYHA4d5TMEUssj1wPNSn5UJxqZOaABjupA&usqp=CAU',
      description: 'Piercing Life Iolitas Lilás e Rodolitas Rosas',
      price: 15.55
  },
]

const Home = () => {
  return (
    <div>
        <BannerHome/>
        <CarouseApp produtc={produtc} title={'Brinco folhados'}/>
        <CarouseApp produtc={produtc2} title={'Pulseras folhadas'}/>
    </div>
  )
}

export default Home
