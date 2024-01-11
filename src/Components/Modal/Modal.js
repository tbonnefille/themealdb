import "./modal.css";

import { useState } from "react";


function Modal() {

    const [modal, setModal] = useState(false);

    return (

        <div>

            {modal && (

                <div className="modal"


                    onClick={() => {
                        setModal(false)

                    }}

                >

                    <div className="modalTxt">

                        <p>Ce projet m'a permit de mettre en oeuvre les compétences suivantes:</p>
                        <ul>
                            <li>réaliser une application REACT avec plusieurs appels d'A.P.I.</li>
                            <li>créer une architecture logique et fonctionnelle</li>
                            <li>réaliser un "dark mode" grâce à useContext</li>
                            <li>appliquer quelques notions de Material Design (proposé par Google)</li>
                            <li>débogger les problèmes dûs à une base de données mal renseignée</li>                          
                        </ul>

                    </div>

                </div>

            )
            }


            <div

                onClick={() => {
                    setModal(true);
                }}

            >
                <div className="modalBtt"> - Explication du projet - </div>

            </div>

        </div >


    )

};

export default Modal;