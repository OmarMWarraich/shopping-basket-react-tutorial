import { ProductItem } from '../global'

const INITIAL_STATE: ProductItem[] = [
    { 
      id: '123',
      title: 'blues t-shirt',
      description: 'No fancy sizing charts here, one t-shirt size to rule them all',
      imageUrl:  '/blue-tshirt.png',
      price: 399   
    },
    { 
        id: '456',
      title: 'yellow t-shirt',
      description: 'This uniqur t-shirt is guaranteed to fit anybody, not even new born babies',
      imageUrl: '/yellow-tshirt.png',
      price: 499   
    },
    { 
        id: '789',
      title: 'Red t-shirt',
      description: 'The only product on our site that might actually be worth buying',
      imageUrl: '/blue-tshirt.png',
      price: 799   
    }

]

export { INITIAL_STATE }