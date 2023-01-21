import React, {FC, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import classes from "./ImageForm.module.css";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import {Image, Title} from "@mantine/core";
import image from "../../images/0.jpg"


export const ImageForm: FC = () => {
    return (
        <div>
            <div className={classes.imageForm} style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image
                    radius="md"
                    src={image}
                    alt="Random unsplash image"
                />
            </div>
        </div>
    );
};