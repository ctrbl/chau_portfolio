'use client'
 
import React from 'react';
import dynamic from 'next/dynamic';
import "../../public/css/App.css";

const App = dynamic(() => import('./App'), { ssr: false })
 
export function ClientOnly() {
  return <App />
}