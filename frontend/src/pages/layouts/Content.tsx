import React, {FC, useEffect, useState} from "react";
import classes from "./Content.module.css";
import {Flex, Grid, Image, Stack} from "@mantine/core";
import {simpleWord} from "../../types/simpleWord";
import {checkLetter, getWord} from "../../features/gameFeatures/api";
import {showNotification} from "@mantine/notifications";
import {simpleGame} from "../../types/simpleGame";
import {simpleLetter} from "../../types/simpleLetter";

export const Content: FC = () => {
    const [sW, setSW] = useState<simpleWord>({
        word:"",
        id:0,
        description: "",
        category: ""
    });
    const [sG, setSG] = useState<simpleGame>( {
        id: 1,
        mistakes: "",
        gameState: "",
        word: "",
        wordID: 1
    });
    const [podpowiedz, setPodpowiedz] = useState('');
    const [slowo, setSlowo] = useState('');
    const [kategoria, setKategoria] = useState('');
    const [mistakes, setMistakes] = useState('0');
    const [gameState, setGameState] = useState('')
    const [wordID, setWordID] = useState(0);
    const [imageSource, setImageSource] = useState("images/"+mistakes+".jpg");
    const isEmptyString = (data: string): boolean => data.trim().length == 0;
    useEffect(() => {
        getWord().then((data) => {
            setSW(data)
            setKategoria(() => sW.category);
            setSlowo(() => sW.word);
            setWordID(() => sW.id);
            /*showNotification({
                color: 'green',
                title: 'id slowa: ',
                message: sW.id
            })*/
        })
    }, [sW.category, sW.id, sW.word]);

    const buttonHandlerHint = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        button.style.backgroundColor = 'lightgray';
        button.setAttribute('disabled', '');

        setPodpowiedz(() => sW.description);
        showNotification({
            color: 'green',
            title: 'button clicked: ',
            message: button.name
        })
    };
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        button.style.backgroundColor = 'lightgray';
        button.setAttribute('disabled', '');
        const chosenLetter: simpleLetter = {
            letter: button.name
        }
        checkLetter(chosenLetter).then((data) => {
            setSlowo(() => data.word);
            setMistakes(() => data.mistakes);
            setImageSource(() => "images/" + data.mistakes + ".jpg")
            setGameState(() => data.gameState);
            setImageSource(() => "images/" + data.mistakes + ".jpg");
        });
    };
    return (
        <div className={classes.content}>
            <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : "white"})}>
                <div>
                    <div className={classes.word}>
                        Kategoria: {kategoria}
                    </div>
                    <div className={classes.word}>
                        Słowo: {slowo}
                    </div>
                    <button onClick={buttonHandlerHint} className={classes.buttonHint} name={"Podpowiedź"}> Podpowiedź</button>
                    <div className={classes.hint}>
                        {podpowiedz !== ""
                            ? `${podpowiedz}`
                            : " "}
                    </div>
                </div>
                <Flex
                    mih={50}
                    bg="rgba(0, 0, 0, 0)"
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <div>
                        <div className={classes.imageForm} style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                            <Image
                                radius="md"
                                src={imageSource}
                                alt={"KONIEC GRY!"}
                            />
                        </div>
                    </div>
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
                </Flex>
                <div>
                    <div className={classes.word}>
                        {gameState === "wygrana" || gameState === "przegrana"
                            ? `${gameState}`
                            : `Błędy: ${mistakes} z 10 `}
                    </div>
                </div>
            </Stack>
        </div>
    );
};