import React from 'react'
import style from './App.module.scss'
import Content from "./components/Content/Content";
import Cart from "./components/Content/Cart/Cart";

const App = ({carts}) => {
  return (
    <div className={style.app}>
        <p className={style.mainHeader}>Ты сегодня покормил кота?</p>
        <Content carts={carts} />
    </div>
  )
}

class AppContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            carts: [
                {
                    footer: 'Что сидишь? Порадуй котэ,',
                    weight: 0.5,
                    taste:'с фуа-гра',
                    portionNumber: 10,
                    mouseNumber: 0,
                    info: 'мышь в подарок',
                    additInfo: '',
                    isFinish: false,
                },
                {
                    footer: 'Головы щучьи с чесноком,',
                    weight: 2,
                    taste:'с рыбой',
                    portionNumber: 40,
                    mouseNumber: 2,
                    info: 'мыши в подарок',
                    additInfo: '',
                    isFinish: false,
                },
                {
                    footer: 'Что сидишь? Порадуй котэ,',
                    weight: 5,
                    taste:'с курой',
                    portionNumber: 100,
                    mouseNumber: 5,
                    info: 'мышей в подарок',
                    additInfo: 'заказчик доволен',
                    isFinish: true,
                }
            ]
        }
    }
    render(){
        return <App carts={this.state.carts} />
    }
}

export default AppContainer
