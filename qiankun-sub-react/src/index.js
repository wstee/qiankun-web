import './public-path';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let root;

function render(props) {
  const { container } = props;
  root = root || createRoot(container ? container.querySelector('#sub-root') : document.querySelector('#sub-root'))
  root.render(
    <React.StrictMode>
      <Suspense fallback="loading...">
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app/app-react18' : '/'}>
          <App />
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  );
  return root;
}

if (!window.__POWERED_BY_QIANKUN__) {
  root = render({});
}

export async function bootstrap() {
  console.log('react app bootstraped'); 
}

export async function mount(props) {
  console.log('props from main framework');
  root = render(props);
}

export async function unmount() {
  root?.unmount()
  root = null
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
