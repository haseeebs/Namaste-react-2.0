import React from 'react';
import ReactDOM from 'react-dom/client';


const Heading2 = () => <h1>This is heading 2</h1>
const Heading3 = () => <h1>This is heading 3</h1>

const Heading = () => {
    return <div>
        <Heading2 />
        <Heading3 />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Heading());