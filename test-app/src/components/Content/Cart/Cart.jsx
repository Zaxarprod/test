import React, {Fragment, useState} from "react"
import style from "./Cart.module.scss";
import {disableImg} from './../../../common/images/bgCartDisable.png'

const Cart = ({taste, portionNumber, info, weight, mouseNumber, additInfo, isFinish, footer, index}) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className={style.wrapper + ` ${(index===1)?style.mobileCart:''}`}>
            <div
                className={style.cart + ` ${isFinish?style.disableCart:''}` + ` ${isClicked?style.clickedCart:''}`}
                onClick={()=>{
                    if(!isFinish){
                        setIsClicked(!isClicked)
                    }
                }}
            >
                <p className={isFinish?style.partOpacity:''}>Сказочное заморское яство</p>
                <h3 className={isFinish?style.partOpacity:''}>Нямушка</h3>
                <h3 className={style.taste + ` ${isFinish?style.partOpacity:''}`}>{taste}</h3>
                <p className={style.portions + ` ${isFinish?style.partOpacity:''}`}>
                    <b>{portionNumber?portionNumber:''}</b> порций
                </p>
                <p className={style.info + ` ${isFinish?style.partOpacity:''}`}>
                    <b>{mouseNumber?mouseNumber+' ':''}</b>{info}
                </p>
                <p className={style.info + ` ${isFinish?style.partOpacity:''}`}>{additInfo}</p>
                <div className={style.weightBlock + ` ${isFinish?style.partOpacity:''}`}>
                    <p className={style.weight}>{weight}</p>
                    <p>кг</p>
                </div>
            </div>
            {!isFinish &&
                <p className={style.footer}>
                    {footer} <a onClick={()=>{
                    if(!isFinish){
                        setIsClicked(!isClicked)
                    }
                }}>купи.</a>
                </p>
            }
            {isFinish &&
                <p className={style.footerDisable}>
                    Печалька, {taste} закончился.
                </p>
            }
        </div>
    )
}

export default Cart