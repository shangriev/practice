    
function Drawer() {
    return (
        <div className="overlay">
        <div className="drawer">
            <h2 className="cartClose">Корзина <img style={{cursor:"pointer"}} width={32} height={32} src="/img/deleteItem.svg" alt="delete" /></h2>

            <div className="items">

                <div className="product-in-cart">
                    <img width={70} src="\img\sneakers\4.jpg" alt="sneakers" />
                    <div>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img style={{cursor:"pointer"}} width={32} height={32} src="/img/deleteItem.svg" alt="delete" />
                </div>

            </div>
            
            <div className="placeAnOrder">
            <ul className="priceInfo">
                <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
                </li>
                <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
                </li>
            </ul>
            <button className="greenBtn">Оформить заказ<img src="/img/btn-order.svg" alt="Place an Order"/></button>
            </div>
        
        </div>
    </div>
    );
}

export default Drawer;
