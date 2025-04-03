

import { JSX } from "react";

import Spring from "../homeworks/Spring"
import Weather from "../homeworks/Weather"
import Nodejs from "../homeworks/Nodejs"
import PHP from "../homeworks/PHP"
import Flask from "../homeworks/Flask"
import Fyp from "../homeworks/Fyp"

export const homeworks: Homework[] = [
    { id: '1', title: 'Spring-Boot-App', element: <Spring/>, thumbnail: "img/thumbnail/spring-boot.png", banner: "img/banner/spring-boot.jpeg" },
    { id: '2', title: 'react-native-weather', element: <Weather/>, thumbnail: "img/thumbnail/React-icon.svg.png", banner: "img/banner/weather.jpg" },
    { id: '3', title: 'nodejs-restful', element: <Nodejs/>, thumbnail: "img/thumbnail/Node.js_logo.svg.png", banner: "img/banner/nodejs-restful.jpeg" },
    { id: '4', title: 'PHP-system', element: <PHP/>, thumbnail: "img/thumbnail/PHP-logo.svg.png", banner: "img/banner/PHP-system.jpeg" },
    { id: '5', title: 'flask', element: <Flask/>, thumbnail: "img/thumbnail/flask-horizontal.webp", banner: "img/banner/flask.png" },
    { id: '6', title: 'fyp', element: <Fyp/>, thumbnail: "img/thumbnail/fyp.png", banner: "img/banner/fyp.png" },
];

export interface Homework {
    id: string;
    title: string;
    element: JSX.Element;
    thumbnail: string;
    banner: string,
}