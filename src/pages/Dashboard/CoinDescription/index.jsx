import { AppContext } from "../../../HOC/AppProvider";

export const CoinDescription = () => {
    return (
        <AppContext.Consumer>
            {({ currentFavorite, coinList }) => {
                if (!coinList) return <div>Loading...</div>
                const coin = coinList[currentFavorite] ? coinList[currentFavorite] : null;
                return (
                    <div>
                        <h2>{coin.CoinName}</h2>
                        <figure><img src={`https://www.cryptocompare.com/${coin.ImageUrl}`} width="150" height="150" alt="Alt"/></figure>
                    </div>
                )
            }
            }
        </AppContext.Consumer>
    )

}