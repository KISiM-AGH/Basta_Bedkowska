import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routing} from "./pages/Routing";
import {MantineProvider} from "@mantine/core";
import {NotificationsProvider} from "@mantine/notifications";

function App() { //glowny komponent wyswietlany po inicjalizacji
  return ( //tutaj podstawiamy napisany routing
      //browser router = routing z biblioteki
      //mantine provider = style
      //notifications provider - do obslugi powiadomien (tym powiadomimy uzytkownika o bledzie)
    <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <Routing/>
            </NotificationsProvider>
        </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
