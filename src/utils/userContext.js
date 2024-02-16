import { createContext } from "react";

const userContext = createContext({
    user: {
        name: 'haseeb',
        email: 'haseebpersonalwork@gmail.com'
    }
});

export default userContext;