import { FaDiscord } from "react-icons/fa";

const settings = require("../settings.json");

export default function Footer() {
    return (
        <>
            <div id="footer">
                <footer className="footer has-background-black">
                    <div className="content has-text-centered">
                        <button className="button is-rounded is-outlined">
                            <FaDiscord/>&nbsp;DISCORD
                        </button>
                        <h3 className="title">{settings.footer_text}</h3>
                    </div>
                </footer>
            </div>
        </>
    );
}