import { useContext } from "react";
import { StoreContext } from "../..";

export default function Checkout() {

    const {email} = useContext(StoreContext)

    return (<div>Checkout - {email}</div>)
}