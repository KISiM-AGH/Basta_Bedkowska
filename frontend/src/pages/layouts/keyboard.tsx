import React, {FC} from "react";
import {Button, Flex, Grid} from "@mantine/core";
import classes from "./keyboard.module.css";

export const KeyboardForm: FC = () => {
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
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>A</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ą</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>B</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>C</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ć</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>D</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>E</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ę</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>F</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>G</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>H</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>I</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>J</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>K</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>L</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ł</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>M</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>N</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ń</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>O</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ó</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>P</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>R</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>S</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Ś</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>T</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>U</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>W</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Y</Button></Grid.Col>
                <Grid.Col span={1}><Button variant="light" radius="xl"  uppercase>Z</Button></Grid.Col>
            </Grid>
        </Flex>
    );
};