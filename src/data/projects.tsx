

import { JSX } from "react";

import GoodHope from "../project/GoodHope"
import ECard from "../project/ECard"
import MotorClub from "../project/MotorClub"
import Drupal from "../project/Drupal"

export const projects: Project[] = [
    { id: '1', title: 'GHS - Secondary School and Landing', element: <GoodHope/>, thumbnail: "/img/thumbnail/GoodHope.png", banner: "/img/banner/GoodHope.png" },
    { id: '2', title: 'eCard.pro', element: <ECard/>, thumbnail: "/img/thumbnail/ecard_pro.svg", banner: "/img/banner/ecard_pro.svg" },
    { id: '3', title: 'Hong Kong Motor Club', element: <MotorClub/>, thumbnail: "/img/thumbnail/motorclub.png", banner: "/img/banner/motorclub.png" },
    { id: '4', title: 'Drupal Projects', element: <Drupal/>, thumbnail: "/img/thumbnail/drupal-wordmark.svg", banner: "/img/banner/drupal-wordmark.svg" },
];

export interface Project {
    id: string;
    title: string;
    element: JSX.Element;
    thumbnail: string;
    banner: string,
}