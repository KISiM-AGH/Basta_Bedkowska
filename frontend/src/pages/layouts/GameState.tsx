import React, {FC, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import classes from "./Word.module.css";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import {Title} from "@mantine/core";


export const GameState: FC = () => {
    const [gameState, setGameState] = useState('0')
    return (
        <div>
            <div className={classes.word}>
                Błędy: {gameState} z 10
            </div>
        </div>
    );
};