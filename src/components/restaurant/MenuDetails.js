import { useState } from "react";
import RestaurantMenuItem from "./MenuItem";

const RestaurantMenuDetails = ({ category }) => {

    const [showItem, setShowItem] = useState(false);

    const handleClick = () => {
        setShowItem(!showItem);
    }

    return (
        <div key={category.card.card.title} className="category" onClick={handleClick}>
            <div className="category-title" onClick={() => handleClick(category.card.card.title)}>
                <div className="title">{category.card.card.title} ({category.card.card.itemCards.length})</div>
                <div>{showItem ? "⇓" : "⇘"}</div>
            </div>
            {showItem && (
                category.card.card.itemCards.map((item) => (
                    <RestaurantMenuItem key={item.card.info.id} item={item} />
                ))
            )}
        </div>
    )
}

export default RestaurantMenuDetails