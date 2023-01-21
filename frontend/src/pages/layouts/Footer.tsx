import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import classes from "./Footer.module.css";

export const Footer: FC = () => {
    return (
        <div className={classes.footer}>
             Projekt zaliczeniowy - Magdalena Basta, Zuzanna Będkowska
        </div>
    );
};