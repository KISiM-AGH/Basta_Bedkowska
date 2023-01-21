import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import classes from "./Word.module.css";


export const Word: FC = () => {
    return (
        <div className={classes.word}>
            {/*tu ladowany jest komponent dziecko */}
            Hasło będzie tu
        </div>
    );
};