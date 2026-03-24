const CLIENTS = ['Solana', 'Ripple', 'Kaito', 'Aave', 'Arbitrum', 'Chainlink', 'Polygon', 'Optimism', 'Uniswap', 'Lido'];

export default function Ticker() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <div id="ticker" className="ticker" aria-label="Client list">
      <div className="ticker__track">
        {items.map((name, i) => (
          <span key={`${name}-${i}`} className="ticker__item">{name}</span>
        ))}
      </div>
    </div>
  );
}
