import { useState } from "react";
import { FaHome, FaShoppingCart, FaPlay, FaInfo } from "react-icons/fa";

const settings = require("../settings.json");

export default function Header() {
    const [active, setActive] = useState(false);

    const updateMenu = () => {
        if(active) {
            return (
                <>
                    <p>menu foda demais</p>
                </>
            );
        }
    }

    return (
        <>
            <div id="header">
                <div class="navigation">
                    <nav class="navbar is-black is-spaced">
                        <div class="container">
                            <div class="navbar-brand is-spaced ml-2">
                                <img
                                    src="https://cdn.discordapp.com/attachments/696728303968714804/824137471835111444/1616559011654.png"
                                    alt="BRC"
                                    width="112"
                                    height="28"
                                />
                                <a
                                    class="navbar-burger"
                                    role="button"
                                    onClick={() => setActive(!active)}
                                    href="dhdjd"
                                    aria-label="menu"
                                    aria-expanded="false"
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                            <div class="navbar-menu has-background-black">
                                <div class="navbar-end">
                                    <a class="navbar-item is-primary" href="#header">
                                        <FaHome/>&nbsp;Início
                                    </a>
                                    <a class="navbar-item" href="#main">
                                        <FaInfo/>&nbsp;Sobre
                                    </a>
                                    <a class="navbar-item" href="#loja">
                                        <FaShoppingCart/>&nbsp;Loja
                                    </a>
                                    <div class="navbar-item">
                                        <button class="button is-rounded">
                                            <FaPlay/>&nbsp;Jogar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    { updateMenu }
                </div>
                <div class="about">
                    <div class="container py-6 px-2">
                        <div class="columns is-centered is-gapless">
                            <div class="column has-text-centered">
                                <h1 class="title my-6 is-1">
                                    BRASIL ROLEPLAY CITY
                                </h1>
                                <p class="subtitle is-4 is-spaced">
                                    {settings.header_text} 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}