import React, { lazy, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { updateCoinsData } from "../redux/coinsReducer"
import "../styles/coinlist.scss"
const ProgressLoaderComp = lazy(() => import("./ProgressLoader"))
const Coin = lazy(() => import("./Coin"))

function CoinList() {

    //decalre redux interfaces
    const isLoading = useSelector((state) => state.coins.isLoading)
    const coinData = useSelector((state) => state.coins.coinData)
    const filterQuery = useSelector((state) => state.coins.filterQuery)
    const dispatch = useDispatch()
    //

    //load coins once UI is displayed
    useEffect(() => {
        if (isLoading) {
            dispatch(updateCoinsData())
        }

        const timer = setTimeout(() => { dispatch(updateCoinsData()) }, 30000)

        return () => { clearTimeout(timer) }
    })
    //

    //display a progress loader first
    if (isLoading) {
        return (<ProgressLoaderComp></ProgressLoaderComp>)
    }
    //

    //after loading show the coins table
    else {
        //store the header and footer
        const headerFooter = (<tr>
            <td>
                Crypto Name
            </td>
            <td>
                Symbol
            </td>
            <td>
                Price (USD/unit)
            </td>
            <td>
                Price Change 1Hr (USD, %)
            </td>
            <td>
                Market Capital (USD)
            </td>
            <td>
                Circulating Supply (Unit)
            </td>
        </tr>)
        //

        //filtered coins
        const filteredCoins = Boolean(filterQuery) ? coinData.filter((coin) => { return coin.name.toLowerCase().includes(filterQuery.toLowerCase()) }) : coinData
        //

        return (
            <div className="coin-list table-responsive">
                <table className="table coin-table">
                    <thead>
                        {
                            //display the table header
                            headerFooter
                            //
                        }
                    </thead>
                    <tbody>
                        {
                            //for every coin in the array, display the coin component
                            filteredCoins.map((coin) => {
                                return (<Coin key={nanoid()} coin={coin}>
                                </Coin>)
                            })
                            //
                        }
                    </tbody>
                    <tfoot>
                        {
                            //display the table footer
                            headerFooter
                            //
                        }
                    </tfoot>
                </table>
            </div>
        )
    }
    //
}

export default CoinList;
