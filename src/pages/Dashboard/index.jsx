import { Prices } from "./Prices";
import { CoinInfo } from "./CoinInfo";
import moment from "moment";

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Prices />
            <CoinInfo />
        </div>
    )

}