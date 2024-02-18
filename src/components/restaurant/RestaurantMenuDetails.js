import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuDetails = ({ category, showItem , setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div key={category.card.card.title} className="category">
            <div className="category-title" onClick={handleClick}>
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