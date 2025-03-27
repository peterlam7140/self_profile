

import { JSX } from "react";

import Spring from "../homeworks/Spring"
import Weather from "../homeworks/Weather"
import Nodejs from "../homeworks/Nodejs"
import PHP from "../homeworks/PHP"
import Flask from "../homeworks/Flask"
import Fyp from "../homeworks/Fyp"

export const homeworks: Homework[] = [
    { id: '1', title: 'Spring-Boot-App', element: <Spring/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '2', title: 'react-native-weather', element: <Weather/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '3', title: 'nodejs-restful', element: <Nodejs/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '4', title: 'PHP-system', element: <PHP/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '5', title: 'flask', element: <Flask/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '6', title: 'fyp', element: <Fyp/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
];

export interface Homework {
    id: string;
    title: string;
    element: JSX.Element;
    thumbnail: string;
    banner: string,
}