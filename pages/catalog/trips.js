import React, {useState} from 'react';
import Navbar from "../../components/NavBar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";

const Catalog = () => {
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

export default Catalog;