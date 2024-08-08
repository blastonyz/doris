import Head from 'next/head';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <Head>
    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.5/build/spline-viewer.js" async></script>

  </Head>
  <spline-viewer url="https://prod.spline.design/Ovy9qXJefuldPXIh/scene.splinecode"></spline-viewer>
    </main>
  );
}
