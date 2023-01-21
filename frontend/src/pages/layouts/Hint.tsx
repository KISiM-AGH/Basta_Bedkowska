import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import classes from "./Hint.module.css";


export const Hint: FC = () => {
    return (
        <div className={classes.hint}>
            {/*tu ladowany jest komponent dziecko */}
            Podpowiedź będzie tu
        </div>
    );
};