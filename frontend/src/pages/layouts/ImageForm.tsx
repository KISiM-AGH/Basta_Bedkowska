import React, {FC, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import classes from "./ImageForm.module.css";
import {simpleWord} from "../../types/simpleWord";
import {getWord} from "../../features/gameFeatures/api";
import {Image, Title} from "@mantine/core";



export const ImageForm: FC = () => {
    const [imageNR, setImageNr] = useState("1")
    let imageSource = "images/"+imageNR+".jpg";
    return (
        <div>
            <div className={classes.imageForm} style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image
                    radius="md"
                    src={imageSource}
                    alt="WISIELEC"
                />
            </div>
        </div>
    );
};