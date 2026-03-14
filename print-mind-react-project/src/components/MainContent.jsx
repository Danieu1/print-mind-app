export function MainContent() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Barra de progresso superior */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span>✕</span>
        <div style={{ flex: 1, height: '8px', background: '#eee', borderRadius: '10px' }}>
          <div style={{ width: '40%', height: '100%', background: '#a4b0be', borderRadius: '10px' }}></div>
        </div>
        <span style={{ background: '#dfe4ea', padding: '5px 15px', borderRadius: '15px' }}>00:15:00</span>
      </div>

      {/* Área do Editor */}
      <div style={{ 
        border: '1px solid #000', 
        borderRadius: '15px', 
        height: '60vh', 
        padding: '40px',
        backgroundColor: '#fff'
      }}>
        <textarea 
          placeholder="| Write here" 
          style={{ width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '1.2rem' }}
        />
      </div>

      {/* Controles inferiores */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ background: '#d1d8e0', padding: '10px', borderRadius: '10px', display: 'flex', gap: '10px' }}>
          <button style={{ background: '#4b7bec', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '5px' }}>PLAY</button>
          <button style={{ background: 'white', border: 'none', padding: '5px 15px', borderRadius: '5px' }}>CUSTUMIZE</button>
          <button style={{ background: 'white', border: 'none', padding: '5px 15px', borderRadius: '5px' }}>TIME</button>
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
           <button style={{ borderRadius: '5px', border: '1px solid #ccc' }}>{'<'}</button>
           <button style={{ borderRadius: '5px', border: '1px solid #ccc' }}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}