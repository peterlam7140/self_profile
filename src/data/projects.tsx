

import { JSX } from "react";
import Demo from "../project/demo"

export const projects: Project[] = [
    { id: '1', title: 'Career Project 1', element: <Demo/> },
    { id: '2', title: 'School Assignment 1', element: <Demo/> },
    { id: '3', title: 'Career Project 2', element: <Demo/> },
];

export interface Project {
    id: string;
    title: string;
    element: JSX.Element;
}