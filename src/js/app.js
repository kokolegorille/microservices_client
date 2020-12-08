import React, {useState} from "react";
import "bootstrap";

import useWindowSize from "./hooks/use_window_size";

import {UserProvider} from "./contexts/user_context";
import Modal from "./components/modal";
import Navbar from "./components/navbar";

const App = () => {
    const size = useWindowSize();

    const [showModal, setShowModal] = useState(false);

    return (
        <UserProvider>
            <Navbar />
            <div className="container-fluid">
                <p>
                    {size.width} / {size.height} 
                </p>

                <p>
                    <a onClick={() => setShowModal(true)}>Open Modal</a>
                </p>

                {
                    showModal &&
                    <Modal>
                        <div className="modal-wrap">
                            <span 
                            className="close" 
                            onClick={() => setShowModal(null)}>&times;</span>
                            <div>I am with modal :-)</div>
                        </div>                
                    </Modal>
                }
            </div>
        </UserProvider>
    )
}

export default App;