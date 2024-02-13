import { INSTAMART_IMG } from "../../utils/constant";

const InstamartCard = (grocery) => {

    const { imageId, displayName } = grocery.groceryInfo;

    return (
        <>
            <img src={INSTAMART_IMG + imageId} alt={displayName} />
            <p>{displayName}</p>
        </>
    )
}

export default InstamartCard