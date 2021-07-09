import React from 'react'

function Coin({ coin }) {
    const { id, image, name, symbol, current_price, market_cap, price_change_percentage_24h, circulating_supply } = coin //destructure all the properties

    //calculate the price change css class to style them as green and red
    let priceChangeColor;
    if (Math.sign(price_change_percentage_24h) === 1) {
        priceChangeColor = "price-increase"
    } else if (Math.sign(price_change_percentage_24h) === -1) {
        priceChangeColor = "price-decrease"
    }
    else {
        priceChangeColor = "nuetral"
    }
    //

    return (
        <tr id={id}>
            <td >
                <div className="crypto-name">
                    <img src={image} alt={`${name} Logo`} />
                    <p>{name}</p>
                </div>
            </td>
            <td>
                {symbol.toUpperCase()}
            </td>
            <td>
                {current_price} USD
            </td>
            <td className={priceChangeColor}>
                {price_change_percentage_24h} %
            </td>
            <td>
                {market_cap} USD
            </td>
            <td>
                {circulating_supply}
            </td>
        </tr>
    )
}

export default Coin
