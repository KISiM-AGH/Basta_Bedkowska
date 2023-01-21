import { Paper } from "@mantine/core";
import React, {FC} from "react";
import {GameForm} from "../features/gameFeatures/gameform";
import {KeyboardForm} from "./layouts/keyboard";
import {Center} from "./layouts/Center";

export const GamePage: FC = () => {
    return (
        //paper = wyswietlenie ladnego okienka z biblioteki mantine core
        <Paper shadow="lg" radius="lg" p="sm" withBorder>
            <GameForm/>
        </Paper>
    );
};