import { useState } from "react";
import '../pages/About.css';

export default function Collapsible({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <button
                type="button"
                className={`collapsible${isOpen ? ' active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            <div
                className="content"
                style={{ maxHeight: isOpen ? '10000px' : '0'}}
            >
                <div className="content-inner">
                    {children}
                </div>
            </div>
        </>
    )
}

