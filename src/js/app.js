import React, {useState} from "react";

import useWindowSize from "./hooks/use_window_size";
import useLocalStorage from "./hooks/use_local_storage";

import Modal from "./components/modal";

const App = () => {
    const size = useWindowSize();
    const [user, setUser] = useLocalStorage("user", "koko");

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <p>
                {size.width} / {size.height} 
            </p>

            <select value={user} onChange={e => setUser(e.target.value)}>
                <option>koko</option>
                <option>fran</option>
                <option>kiki</option>
            </select>

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
    )
}

export default App;