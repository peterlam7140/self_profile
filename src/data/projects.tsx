

import { JSX } from "react";

import GoodHope from "../project/GoodHope"
import ECard from "../project/ECard"
import MotorClub from "../project/MotorClub"
import Drupal from "../project/Drupal"

export const projects: Project[] = [
    { id: '1', title: 'Good Hope School - Secondary School and Landing Website', element: <GoodHope/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '2', title: 'eCard.pro', element: <ECard/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '3', title: 'Hong Kong Motor Club', element: <MotorClub/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
    { id: '4', title: 'Drupal Projects', element: <Drupal/>, thumbnail: "demo.jpeg", banner: "demo.jpeg" },
];

export interface Project {
    id: string;
    title: string;
    element: JSX.Element;
    thumbnail: string;
    banner: string,
}