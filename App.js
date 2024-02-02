const div = React.createElement('div', { 'id': 'parent' },
    [
        React.createElement('div', { 'id': 'child' },
            [
                React.createElement('h1', {}, 'hii m h1'),
                React.createElement('h2', {}, 'this is h2')
            ]),
        React.createElement('div', { 'id': 'child2' },
            [
                React.createElement('h1', {}, 'hii m h1'),
                React.createElement('h2', {}, "this is second child's h2")
            ])
    ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);