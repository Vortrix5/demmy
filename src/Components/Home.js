import React from "react";
import logo from "../log.svg"
import { Form, FormControl, Button } from 'react-bootstrap'
import Logins from "./Login";
import Imgs from "./img";


export default function Home() {

    return (
        <>
            <Imgs/>
            <img src={logo} style={{ width: "50%" }} alt="Nothing to show here" />
            <Logins />
        </>
    )

}