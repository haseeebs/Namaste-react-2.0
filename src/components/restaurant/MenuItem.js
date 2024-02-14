import { MENU_ITEM_IMG } from "../../utils/constant"

const RestaurantMenuItem = ({ item }) => {

    return (
        <div className="item">

            <div className="info">
                <p><strong>{item.card.info.name}</strong></p>
                <p>{'₹' + item.card.info.price / 100}</p>
                <p>{item.card.info.description}</p>
            </div>

            <div className="image">

                {item.card.info.imageId ? (
                    <img src={`${MENU_ITEM_IMG}${item.card.info.imageId}`} alt="item image" />
                ) : (
                    <div className="dummy-image"></div>
                )}

            </div>
        </div>
    )
}

export default RestaurantMenuItem