import React from "react";
import {ExloreTopBooks} from "./Components/ExloreTopBooks";
import {Carousel} from "./Components/Carousel";
import {Heros} from "./Components/Heros";
import {LibraryServices} from "./Components/LibraryServices";

export const HomePages = () =>{
    return (
        <>
            <ExloreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>

    );
}