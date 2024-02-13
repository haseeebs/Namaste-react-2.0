import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { INSTAMART_ITEM_END, INSTAMART_ITEM_FRONT } from "../../utils/constant";

const InstamartMenu = () => {

    const { groceryItemName } = useParams();

    useEffect(() => {
        // fetchData();
    }, []);
    
    console.log(`${INSTAMART_ITEM_FRONT}${encodeURIComponent(groceryItemName)}${INSTAMART_ITEM_END}`);

    const fetchData = async () => {
        try {
            const encodedCategoryName = encodeURIComponent(groceryItemName);
            const data = await fetch(`${INSTAMART_ITEM_FRONT}${encodedCategoryName}${INSTAMART_ITEM_END}`);
            const json = await data.json();
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <div className="instamart-menu">Getting CORS error while fetching instamart data from the server...See your browser Console to get Api link</div>
    )
}

export default InstamartMenu