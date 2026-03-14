export function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '0 40px', gap: '20px' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Search" 
          style={{ width: '100%', padding: '10px 40px', borderRadius: '8px', border: '1px solid #000' }}
        />
        <span style={{ position: 'absolute', right: '15px', top: '10px' }}>🔍</span>
      </div>
      
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Sign in</button>
      <button style={{ background: '#4a69bd', color: 'white', padding: '10px 25px', borderRadius: '8px', border: 'none' }}>
        Sign Up
      </button>
    </div>
  );
}