import { createContext } from "react";

const userContext = createContext({
    user: {
        name: 'Logged in username',
        email: 'loggedinuser@gmail.com'
    }
});

export default userContext;