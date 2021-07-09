import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFilterQuery } from "../redux/coinsReducer";
import "../styles/header.scss"

function Header() {
    //declare redux interfaces
    const dispatch = useDispatch()
    const filterQuery = useSelector(state => state.coins.filterQuery)
    //

    //react controlled form, search function
    function filterCoins(event) {
        event.preventDefault()
        const input = event.target.value
        dispatch(updateFilterQuery(input))
    }
    //

    return (
        <div className="header">
            <h1>Crypto Tracker</h1>
            <input
                className="form-control"
                type="search"
                name="coinSearch"
                id="coinSearch"
                placeholder="Any coin name eg. Bitocin"
                value={filterQuery}
                onChange={filterCoins}
            />
        </div>
    )
}

export default Header
