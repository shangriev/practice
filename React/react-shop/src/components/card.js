function Card() {
    return (<div className="card">
                <div className="favoriteButton">
                <img src="/img/favorite-off.svg" alt="add favorite" />
                </div>
                <img width={133} height={112} src="img/sneakers/1.jpg" />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="cardInfo">
                    <div className="price">
                    <span>ЦЕНА:</span>
                    <b>12 999 руб.</b>
                    </div>
                <button><img width={11} height={11} src="img/add.svg"/></button>
                </div>
            </div>
);
}

export default Card;



