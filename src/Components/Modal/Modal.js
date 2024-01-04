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

                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate </p>

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