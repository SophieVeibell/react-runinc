import React from 'react'
import '../Shop/ShopShoes.scss'
import Shoeone from '../../img/shoe_01.jpg'
import Shoetwo from '../../img/shoe_02.jpg'
import Shoethree from '../../img/shoe_03.jpg'
import Shoefour from '../../img/shoe_04.jpg'

const ShopShoes = () => {
    return (
        <section className="ShopShoesSection">
            <div className="shop-banner">
                <h2>Shop</h2>
            </div>
            <div className="shop-grid">
                <div className="shoeshop">
                <img src={Shoeone} alt="Puma shoe"/>
                <p>Puma Highland 3000-brown</p>
                </div>

                <div className="shoeshop">
                <img src={Shoetwo} alt="Asics shoe"/>
                <p>Asics Free Street</p>
                </div>

                <div className="shoeshop">
                <img src={Shoethree} alt="New Balance shoe"/>
                <p>New Balance Runner Bounce</p>
                </div>

                <div className="shoeshop">
                <img src={Shoefour} alt="Puma shoe"/>
                <p>New Balance New York 2018</p>
                </div>

                <div className="shoeshop">
                <img src={Shoeone} alt="Puma shoe"/>
                <p>Puma Highland 3000-brown</p>
                </div>

                <div className="shoeshop">
                <img src={Shoefour} alt="Puma shoe"/>
                <p>New Balance New York 2018</p>
                </div>
            </div>

                <div className="runnincshop">
                    <div className="runnincshop-text">
                        <h3>Shop</h3>
                        <h4>Runinc Shop</h4>
                        <h5>Gratis fragt ved over kr. 500,-</h5>
                        <p>Nike</p>
                        <p>Adidas</p>
                        <p>Puma</p>
                        <p>Asics</p>
                        <p>Hummel</p>
                    </div>
                </div>
        </section>
    )
}

export default ShopShoes
