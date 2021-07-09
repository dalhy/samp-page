import { FaChartArea, FaUser, FaServer, FaInfo } from "react-icons/fa";

export default function Status() {
    return (
        <>
            <div id="status">
                <div className="server-status">
                    <div className="container is-fluid mb-6">
                        <section className="message is-link is-light">
                            <div className="message-header">
                                <p><FaChartArea/>&nbsp;Status do Servidor</p>
                            </div>
                            <div className="message-body">
                                <p>
                                    <strong><FaServer/>&nbsp;IP: </strong>127.0.0.1:7777
                                </p>
                                <p>
                                    <strong><FaInfo/>&nbsp;Hostname: </strong>Brasil Roleplay City
                                </p>
                                <p>
                                    <strong><FaUser/>&nbsp;Jogadores: </strong>0/100
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}