import React, {useState} from 'react';
import {Collapse} from "react-bootstrap";
import {Button} from "antd";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./DropDownSection.css";

function DropDownSection({children}) {
    const [isOpen, setIsOpen] = useState(false);

    const collapseButton = isOpen ?
        (<Button type="primary" shape="circle" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faChevronUp} /></Button>) :
        (<Button type="primary" shape="circle" onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faChevronDown} /></Button>);

    return (
        <div>
            <Collapse in={isOpen}>
                {children}
            </Collapse>
            <div className="collapse-button">
                {collapseButton}
            </div>
        </div>
    )

}

export default DropDownSection;