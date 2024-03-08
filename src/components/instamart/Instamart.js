import { useEffect, useState } from "react";
import { INSTAMART_API } from "../../utils/constant";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import InstamartCard from "./InstamartCard";

const Instamart = () => {

    const [groceriesData, setGroceriesData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(INSTAMART_API)
        const json = await data.json()
        setGroceriesData(json);
    }

    if (groceriesData === null) return <Shimmer />

    const groceryInfo = groceriesData.data.widgets[1].data;

    return (
        <div className="instamart-container">

            <h3>Shop by category</h3>

            <div className="categories">

                {groceryInfo.map((grocery) => (
                    <div className="grocery-item" key={grocery.nodeId}>
                        <Link to={`/instamart/${grocery.displayName}`}>
                            <InstamartCard groceryInfo={grocery} />
                        </Link>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Instamart