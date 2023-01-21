import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import classes from "./Header.module.css";
import {Button, Group, Title} from "@mantine/core";

export const Header: FC = () => {
    return (
        <div className={classes.header}>
            <Title>WISIELEC</Title>
            <Group spacing={10}>
                <Button radius="md"  uppercase>Nowa Gra</Button>
                <Button radius="md"  uppercase>Podpowiedź</Button>
            </Group>
        </div>
    );
};