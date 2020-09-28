import React, { useState } from 'react';

const Acordion = ({items}) => {
    const [activeindex, setactiveindex] = useState(null);
    const onTitleClick = (index) => {
        setactiveindex(index);
    }
    const renderList = items.map((item, index) =>{
        const active = index === activeindex ? "active" : ' ';
        return <React.Fragment key ={item.title}>
            <div 
                className={`title ${active}`}
                onClick = {() => onTitleClick(index)}
                >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
     });   
    return (
            <div className = "ui styled accordion ">
               {renderList} 
            </div>
        );
}

export default Acordion;