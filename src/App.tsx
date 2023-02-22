import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Technologies from "./components/Technologies/Technologies";
import Accordion from "./components/Accordion/Accordion";
import {Rating, Star} from "./components/Rating/Rating";


const App = () => {
    return (
        <div>
{/*            <PageTitle title="This is a App component"/>
            <PageTitle title="This a App component 2"/>
            <Header/>
            <Technologies/>
            Article 1*/}
            <Accordion titleValue="Menu" collapsed={true}/>
            <Accordion titleValue="Users" collapsed={true}/>
{/*            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}



        </div>
    )
        ;
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}
    export default App;

