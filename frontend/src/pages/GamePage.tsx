import { Paper } from "@mantine/core";
import React, {FC} from "react";
import {GameForm} from "../features/gameFeatures/gameform";

export const GamePage: FC = () => {
    return (
        //paper = wyswietlenie ladnego okienka z biblioteki mantine core
        <Paper shadow="lg" radius="lg" p="sm" withBorder>
            <GameForm/>
        </Paper>
    );
};