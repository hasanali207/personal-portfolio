import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
