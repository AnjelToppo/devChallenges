export default function Buttons({active, onProductsClick, onAvailableClick}) {

    return (<div className="btn-container">
        <button className={active.allProductsBtn ? "btn active-btn" : "btn"} onClick={onProductsClick}>All Products</button>
        <button className={active.availableNowBtn ? "btn active-btn" : "btn"} onClick={onAvailableClick}>Available Now</button>
    </div>)
}