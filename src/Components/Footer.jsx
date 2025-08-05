// Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      position: 'relative',
      bottom: 0,
      width: '100%', // ✅ this prevents horizontal scroll
      fontSize: '14px',
      overflow: 'hidden', // ⛔ prevents horizontal scroll
      boxSizing: 'border-box', // ⛔ ensures padding doesn't affect width
    }}>
      © 2025 YourAppName. All rights reserved.
    </footer>
  );
}
