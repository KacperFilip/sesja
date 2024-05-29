import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
  <main className='dark text-foreground bg-gradient-to-tr from-[#647909] to-[#0d5709]'>
    <App />
    <Analytics/>
  </main>
  </NextUIProvider>
);
