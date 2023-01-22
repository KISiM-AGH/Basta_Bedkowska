import React, {FC, useEffect} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Content} from "./Content";
import {createStyles} from "@mantine/core";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";

const useStyle = createStyles(() => ({
    rootContainer: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        height: '100vh',
    },
}))

export const Main: FC = () => {
    const {classes} = useStyle();
    return (
        <div className={classes.rootContainer}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};