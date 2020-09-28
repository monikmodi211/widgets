import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        lable: 'Afrikaans',
        value: 'af'
    },
    {
        lable: 'Arabic',
        value: 'ar'
    },
    {
        lable:'Hindi',
        value: 'hi'
    } 
]

const Translate = () => {
    const [language , setLanguage] = useState(options[0]);
    const[text, setText]= useState('');
return (
    <div>
        <div className = "ui form">
            <div className="field">
                <label> Enter Text</label>
                <input value={text} onChange= {(event) => setText(event.target.value)}/>
            </div>
        </div>
        <Dropdown
            label = "select a language"
            selected = {language}
            onSelected={setLanguage}
            options={options}
        />
        <hr/>
        <h3 className="ui header"> Output</h3>
        <Convert 
            language={language}
            text={text}
        />
    </div>
);

}

export default Translate;