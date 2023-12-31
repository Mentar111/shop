import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Items from "./Components/items"
import Categories from "./Components/categories";
import ShowFullItem from "./Components/ShowFullItem";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Смартфон',
          img: 'iphone.png',
          desc: 'lorem ipsom dolor sit amet. consectetur',
          category: 'iphone',
          price: '23800'

        },
        {
          id:2,
          title: 'Планшет',
          img: 'ipad.png',
          desc: 'lorem ipsom dolor sit amet. consectetur',
          category: 'ipad',
          price: '65000'

        },
        {
          id:3,
          title: 'Ноутбук',
          img: 'laptop.png',
          desc: 'lorem ipsom dolor sit amet. consectetur',
          category: 'laptop',
          price: '40000'

        },
        {
          id:4,
          title: 'Телевизор',
          img: 'televisores.jpg',
          desc: 'lorem ipsom dolor sit amet. consectetur',
          category: 'televisores',
          price: '17999'

        },
        {
          id:5,
          title: 'Монитор',
          img: 'monitors.webp',
          desc: 'lorem ipsom dolor sit amet. consectetur',
          category: 'monitors',
          price:'40000'

        },
        {
          id:6,
          title: 'компьютер',
          img: 'PC.jpg',
          desc: 'lorem ipsom dolor sit amet. consectetur',
          category: 'PC',
          price: '45000'

        },
      ],
      showFullItem:false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    }

  render() {
  return (
  <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
    <Categories chooseCategory={this.chooseCategory}/>
    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>


    {this.state.showFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
    <Footer />
  </div>
   )
  }

onShowItem(item) {
  this.setState ({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

  chooseCategory(category) {

    if(category === 'all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

 addToOrder(item) {
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
  this.setState({ orders: [...this.state.orders, item] })

 }
}
export default App;
