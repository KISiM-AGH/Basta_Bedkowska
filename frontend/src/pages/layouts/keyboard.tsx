import React, {FC, useState} from "react";
import {Flex, Grid} from "@mantine/core";
import classes from "./keyboard.module.css";
import {showNotification} from "@mantine/notifications";

export const KeyboardForm: FC = () => {
    const [clickedbutton, setClickedbutton] = useState('');
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        button.style.backgroundColor = 'lightgray';
        button.setAttribute('disabled', '');
        showNotification({
            color: 'green',
            title: 'button clicked: ',
            message: button.name
        })
    };
    return (
        <Flex className={classes.keyboard}
            mih={50}
            bg="rgba(0, 0, 0, 0)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
            >
            <Grid gutter="sm" columns={6}>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"A"}>A</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ą"}>Ą</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"B"}>B</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"C"}>C</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ć"}>Ć</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"D"}>D</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"E"}>E</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ę"}>Ę</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"F"}>F</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"G"}>G</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"H"}>H</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"I"}>I</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"J"}>J</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"K"}>K</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"L"}>L</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ł"}>Ł</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"M"}>M</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"N"}>N</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ń"}>Ń</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"O"}>O</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ó"}>Ó</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"P"}>P</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"R"}>R</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"S"}>S</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Ś"}>Ś</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"T"}>T</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"U"}>U</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"W"}>W</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Y"}>Y</button></Grid.Col>
                <Grid.Col span={1}><button onClick={buttonHandler} className={classes.button} name={"Z"}>Z</button></Grid.Col>
            </Grid>
        </Flex>
    );
};