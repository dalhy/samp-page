//import { FaInfoCircle } from "react-icons/fa";

const settings = require("../settings.json");

export default function Main() {
    return (
        <>
            <div id="main">
                <div class="resources">
                    <section class="section">
                        <div class="container has-text-centered py-4">
                            <h2 class="title mb-6 has-text-black">Nossos Recursos</h2>
                            <div class="columns">
                                <div class="column">
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="icons">
                                                👍
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="title is-4">Lorem Ipsum</h5>
                                    <p class="block subtitle">
                                        {settings.resources[0]}
                                    </p>
                                </div>
                                <div class="column">
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="icons">
                                                📲
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="title is-4">Lorem Ipsum</h5>
                                    <p class="block subtitle">
                                        {settings.resources[1]}
                                    </p>
                                </div>
                                <div class="column">
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="icons">
                                                👥
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="title is-4">Lorem Ipsum</h5>
                                    <p class="block subtitle">
                                        {settings.resources[2]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}