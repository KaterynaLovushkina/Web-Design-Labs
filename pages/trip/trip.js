import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/NavBar/navbar";

const Trip = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen ={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
        </div>
    );
};

export default Trip;