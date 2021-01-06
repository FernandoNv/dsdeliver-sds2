import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({message}: Props){

    useEffect(() => {
        console.log("Component started");
    }, []);

    return(
        <h1>{ message }</h1>
    )
}

export default Hello;