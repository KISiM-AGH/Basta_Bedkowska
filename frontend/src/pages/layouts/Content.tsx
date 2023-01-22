import React, {FC, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {KeyboardForm} from "./keyboard";
import classes from "./Content.module.css";
import {createStyles, Flex, Group, Stack} from "@mantine/core";
import {Word} from "./Word";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import { GameState } from "./GameState";
import { ImageForm } from "./ImageForm";

export const Content: FC = () => {
    return (
        <div className={classes.content}>
            <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : "white"})}>
                <Word/>
                <Flex
                    mih={50}
                    bg="rgba(0, 0, 0, 0)"
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <ImageForm/>
                    <KeyboardForm/>
                </Flex>
                <GameState/>
            </Stack>
        </div>
    );
};