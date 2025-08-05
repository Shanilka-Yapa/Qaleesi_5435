import Footer from './Footer.jsx';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <main style={{ flex: 1 }}>
        <h1>Welcome to the Home Page</h1>
        {/* Other content can go here */}
      </main>
      <Footer />
    </div>
  );
}
