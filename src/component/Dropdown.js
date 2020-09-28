import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({ label, options, onSelected, selected })=> {
    const[open, setOpen] = useState(false);
    const ref = useRef();
    const Renderresult = options.map((option) => {
        if(option.value === selected.value){
            return null; 
        }
    return (
        <div 
        key={option.value}
        onClick={() => onSelected(option)} 
        className = "item">
            {option.lable}
        </div>
    )
    });
    useEffect(() => {
            const onBodyclick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
                setOpen(false);
            };
            document.body.addEventListener('click',onBodyclick);

        return () => {

             document.body.removeEventListener('click', onBodyclick);
        }

        
    })

    return (
        <div ref = {ref} className = "ui form">
            <div className="field">
                <label className = "label">{label}</label>
                <div 
                    onClick= {() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : '' }`}>
                    <i className ="dropdown icon"></i>
                    <div className= "text">{selected.lable}</div>
                    <div className = {`menu ${open ? 'visible transition' : ''}`}>
                        {Renderresult}
                        </div>    
                </div> 
            </div>
        </div>
    )


}

export default Dropdown;