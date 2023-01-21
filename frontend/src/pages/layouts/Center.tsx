import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import classes from "./Center.module.css";

export const Center: FC = () => {
    return (
        <div className={classes.centerContainer}>
            {/*tu ladowany jest komponent dziecko */}
            <Outlet/>

        </div>
    );
};