'use client'

import { useEffect } from 'react';

export default function Spline({ url }) {
  useEffect(() => {
    const loadSpline = async () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.5/build/spline-viewer.js';
      script.type = 'module';
      script.async = true;
      document.body.appendChild(script);
    };

    loadSpline();
  }, []);

  return <spline-viewer url={url}></spline-viewer>;
}