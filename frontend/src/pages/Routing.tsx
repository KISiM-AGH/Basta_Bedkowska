import {ErrorPage} from "./ErrorPage";
import {GamePage} from "./GamePage";
import {Center} from "./layouts/Center";
import {FC} from "react";
import {useRoutes} from "react-router-dom";

const publicRoutes = [//tablica mapujaca konkretny adres na dany komponent
    {
        path: "/", //adres w przegladarce
        element: <Center/>, //wyswietlany komponent = tutaj akurat stylowanie
        children: [ //komponenty wewnatrz center = tutaj akurat wyswietlanie tych komponentow na srodku strony = wewnatrz center
            {
                path: "/game", //adres
                element: <GamePage/> //wyswietlenie strony gry
            },
            {
                path: "*",
                element: <ErrorPage/>,//jakikolwiek inny adres = blad
            }
        ]
    }
];

export const Routing: FC = () => {
    return useRoutes(publicRoutes);
};