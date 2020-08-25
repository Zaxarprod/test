import React from "react"
import style from './Content.module.scss'
import bgCartBlue from './../../common/images/bgCartBlue.png'
import Cart from "./Cart/Cart";

const Content = ({carts}) => {
    return (
        <div className={style.content}>
            {carts.map((cart, i)=>{
                return (
                    <Cart
                        footer={cart.footer}
                        weight={cart.weight}
                        taste={cart.taste}
                        portionNumber={cart.portionNumber}
                        mouseNumber={cart.mouseNumber}
                        info={cart.info}
                        additInfo={cart.additInfo}
                        isFinish={cart.isFinish}
                        index={i}
                    />
                )
            })}
        </div>
    )
}

export default Content