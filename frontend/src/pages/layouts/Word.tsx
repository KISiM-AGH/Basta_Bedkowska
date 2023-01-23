import React, {FC, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import classes from "./Word.module.css";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import {Title} from "@mantine/core";


export const Word: FC = () => {
    const [sW, setSW] = React.useState<simpleWord>();
    const [podpowiedz, setPodpowiedz] = useState('');
    const [slowo, setSlowo] = useState('');
    const [kategoria, setKategoria] = useState('');
    return (
        <div>
            <div className={classes.word}>
                Kategoria: {kategoria}
            </div>
            <div className={classes.word}>
                Słowo: {slowo}
            </div>
            <div className={classes.hint}>
                {podpowiedz !== ""
                    ? `Podpowiedź: "${podpowiedz}"`
                    : "Podpowiedź: "}
            </div>
        </div>
    );
};