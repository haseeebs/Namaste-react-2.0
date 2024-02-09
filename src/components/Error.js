import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <>
            <h1>Status: {error.status} {error.statusText}</h1>
            <h1>Error: {error.error.message}</h1>
        </>
    )
};

export default Error;