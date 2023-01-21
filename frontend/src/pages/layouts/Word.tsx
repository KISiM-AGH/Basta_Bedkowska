import React, {FC, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import classes from "./Word.module.css";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import {Title} from "@mantine/core";


export const Word: FC = () => {
    return (
        <div>
            <div className={classes.word}>
                Kategoria
            </div>
            <div className={classes.word}>
                slowo
            </div>
            <div className={classes.hint}>
                Podpowiedź
            </div>
        </div>
    );
};