import React, { Component } from 'react'

export class categories extends Component {
  constructor(props){
    super(props)
    this.state = {
        categories:[
            {
                key: 'all',
                name: 'Все'
            },
            {
                key: 'iphone',
                name: 'Iphone'
            },
            {
                key: 'ipad',
                name: 'Ipad'
            },
            {
                key: 'laptop',
                name: 'Ноутбуки'
            },
            {
                key: 'televisores',
                name: 'Телевизоры'
            },
            {
                key: 'monitors',
                name: 'Мониторы'
            },
            {
                key: 'PC',
                name: 'Компьюторы'
            },
          
          
        ]
    }

  }
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default categories