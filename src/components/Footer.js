import { useContext } from "react"
import userContext from "../utils/userContext"


const Footer = () => {

    const {user} = useContext(userContext);

    return (
        <div className="footer">
            <li>Made by: <strong>{user.name}</strong> // Coming from context api</li>
        </div>
    )
}

export default Footer