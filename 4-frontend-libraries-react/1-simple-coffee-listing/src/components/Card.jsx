export default function Card({coffee}) {
    return (
        <div className="card coffee">
            {coffee.popular && <span className="popular">Popular</span>}
            <img
                src={coffee.image}
                alt={coffee.name}
                className="coffee__image"
            />
            <div className="coffee__name-price">
                <span className="coffee__name">{coffee.name}</span>
                <span className="coffee__price">{coffee.price}</span>
            </div>
            <div className="coffee__rating-vote">
                <div className="ratings-detail">
                    <img src={coffee.votes ? "../../resources/Star_fill.svg":"../../resources/Star.svg"} alt=""/>
                    <span className="coffee__rating">&nbsp;{coffee.rating}&nbsp;</span>
                    <span className="coffee__votes">({coffee.votes} votes)</span>
                </div>
                {!coffee.available && <span className="sold-out">Sold out</span>}
            </div>
        </div>)
}