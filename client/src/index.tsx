import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './assets/style/home.css';

const App: React.SFC<{}> = () => (
    <div>
        Hello world!
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);
