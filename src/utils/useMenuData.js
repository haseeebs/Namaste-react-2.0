import { useEffect, useState } from "react"
import { MENU_API } from "./constant"

const useMenuData = (restaurantId) => {

    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [restaurantId])

    const fetchData = async () => {
        try {
            const data = await fetch(`${MENU_API}${restaurantId}`);
            const json = await data.json();

            setResData(json);
        } catch (error) {
            console.error('Error while fetching restaurant menu data...', error);
        }
    }

    return resData;
}

export default useMenuData;