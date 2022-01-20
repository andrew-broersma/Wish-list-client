import React from "react";
import "./Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionItem, AccordionHeader } from 'reactstrap';


class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpenPlat: false,
            isOpenGenre: false,
            isOpenMeta: false
        }
    }

    filterPlatform() {

    }

    render() {
        return(
            <div>
                <ul>           
                    <li id="myList" >My List</li>
                    <Accordion flush toggle="">
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Filter by Platform
                            </AccordionHeader>
                            <AccordionItem accordionId="1">
                                <input type="radio" id="platPC">PC</input>
                                <input type="radio" id="platPS5">PS5</input>
                                <input type="radio" id="platXX">XBoxX</input>
                                <input type="radio" id="platSw">Switch</input>
                                <input type="radio" id="platPS4">PS4</input>
                                <input type="radio" id="platX1">XBoxOne</input>
                            </AccordionItem>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Filter by Genre
                            </AccordionHeader>
                            <AccordionItem accordionId="2">
                                <input type="radio" id="genRPG">RPG</input>
                                <input type="radio">Shooter</input>
                                <input type="radio">Racing</input>
                                <input type="radio">Sports</input>
                                <input type="radio">Indie</input>
                                <input type="radio">Adventure</input>
                                <input type="radio">Strategy</input>
                                <input type="radio">Casual</input>
                            </AccordionItem>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Filter by Metacritic Score
                            </AccordionHeader>
                            <AccordionItem accordionId="3">
                                <input type="radio">Ascending</input>
                                <input type="radio">Descending</input>
                            </AccordionItem>
                        </AccordionItem>
                    </Accordion>
                    <li id="logout" >Logout</li>
                </ul>
            </div>
        )
    }
}