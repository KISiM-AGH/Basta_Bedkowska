import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import classes from "./Header.module.css";
import {Group, Title} from "@mantine/core";
import {showNotification} from "@mantine/notifications";
import {Word} from "./Word";

export const Header: FC = () => {
    const buttonHandlerNewGame = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        window.location.reload();
        showNotification({
            color: 'green',
            title: 'button clicked: ',
            message: button.name
        })
    };
    const buttonHandlerHint = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;

        showNotification({
            color: 'green',
            title: 'button clicked: ',
            message: button.name
        })
    };
    return (
        <div className={classes.header}>
            <Title>WISIELEC</Title>
            <Group spacing={10}>
                <button onClick={buttonHandlerNewGame} className={classes.button} name={"Nowa Gra"}>Nowa Gra</button>
                <button onClick={buttonHandlerHint} className={classes.button} name={"Podpowiedź"}> Podpowiedź</button>

            </Group>
        </div>
    );
};