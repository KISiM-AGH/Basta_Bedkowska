import React, {FC, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import classes from "./ImageForm.module.css";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import {Image, Title} from "@mantine/core";



export const ImageForm: FC = () => {
    return (
        <div>
            <div className={classes.imageForm} style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image
                    radius="md"
                    src="images/0.jpg"
                    alt="WISIELEC"
                />
            </div>
        </div>
    );
};