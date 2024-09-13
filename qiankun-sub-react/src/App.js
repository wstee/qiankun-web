import './App.css';
import { useRoutes } from 'react-router-dom';

import routes from './router';

function App() {
  return (
    <div className="App">
      <div className='page'>
        {useRoutes(routes)}
      </div>
    </div>
  );
}

export default App;
