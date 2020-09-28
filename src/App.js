import React, {useState} from 'react';
import Acordion from './component/Acordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown'; 
import Translate from './component/Translate';
import Route from './component/Route';
import Header from './component/Header';


        const items = [
            {
                title : 'What is React,JS?',
                content: 'React. js is front end library'
            },
            {
                title: ' what is state in react?',
                content : 'The state object is where you store property values that belongs to the component'
            },
            {
                title: ' What is hook?',
                content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components'
            }
            
        ];
        const options = [
            {
                lable : 'This is colour red',
                value: 'red'
            },
            {
                lable : 'This is colour green',
                value: 'green'
            },
            {
                lable : 'This is colour blue',
                value: 'blue'
            }
            
        ];

        export default () => {
            const[selected, setSelected] = useState(options[0]);

        return (
        <div>
            <Header/> 
            <Route path = "/">
                <Acordion items = {items}/>
            </Route>
            <Route path = "/list">
                <Search />
            </Route>
            <Route path = "/Dropdown">
            <Dropdown 
                label = "Select a color"
                selected={selected}
                onSelected = {setSelected}
                options = {options}/>
            </Route>
            <Route path = "/Translate">
                <Translate/>
            </Route>
         {/* <button onClick= {() => setShowopened(!showopened)}>Toggle Button</button>
            {showopened ?
            <Dropdown 
                selected={selected}
                onSelected = {setSelected}
                options = {options}/>
                :null
            }  */}
            {/* <Translate/> */}
        </div>
    );
};
