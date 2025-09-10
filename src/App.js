import React, { useState } from "react";

// Reference your image from /public
const BACKGROUND_IMG = "/manga-one-piece-wallpaper-preview.jpg";

function ZerodhaCalculator() {
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [qty, setQty] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const buyPrice = Number(buy);
    const sellPrice = Number(sell);
    const quantity = Number(qty);
    if (!buyPrice || !sellPrice || !quantity) {
      setResult(null);
      return;
    }
    const turnover = (buyPrice + sellPrice) * quantity;
    const grossPL = (sellPrice - buyPrice) * quantity;
    const brokerage = Math.min(0.0003 * turnover, 20);
    const stt = 0.00025 * sellPrice * quantity;
    const exch = 0.0000345 * turnover;
    const sebi = 0.00001 * turnover;
    const gst = 0.18 * (brokerage + exch);
    const stamp = 0.00003 * buyPrice * quantity;
    const totalCharges = brokerage + stt + exch + sebi + gst + stamp;
    const netPL = grossPL - totalCharges;
    setResult({
      grossPL, brokerage, stt, exch, sebi, gst, stamp, netPL
    });
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${BACKGROUND_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Google Fonts for modern, anime style */}
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;700&family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
      {/* Glass card */}
      <div style={{
        background: "rgba(10,20,42,0.75)",
        borderRadius: "22px",
        boxShadow: "0 10px 44px 0 rgba(50,72,165,0.22)",
        padding: "44px 30px 36px 30px",
        maxWidth: 420,
        width: "100%",
        backdropFilter: "blur(8px)",
        border: "2px solid rgba(255,255,255,0.14)",
        zIndex: 2
      }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', Arial, sans-serif",
          color: "#ffd054",
          fontSize: "2.7em",
          letterSpacing: "2px",
          textShadow: "0 4px 24px #222, 0 1px 4px #fff",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          Zerodha Intraday Calculator
        </h2>
        <div style={{ marginBottom: 18 }}>
          <label style={{
            fontWeight:'bold', fontSize:"1.17em", color:'#ffd054',
            marginRight:8, letterSpacing:"1px"
          }}>Buy Price:</label>
          <input 
            value={buy}
            onChange={e => setBuy(e.target.value)}
            type="number"
            placeholder="e.g. 707.85"
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "8px 13px",
              outline: "none",
              width: "70%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.19)",
              color: "#fffbe6",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.13)"
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{
            fontWeight:'bold', fontSize:"1.17em", color:'#ffd054',
            marginRight:8, letterSpacing:"1px"
          }}>Sell Price:</label>
          <input 
            value={sell}
            onChange={e => setSell(e.target.value)}
            type="number"
            placeholder="e.g. 715.15"
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "8px 13px",
              outline: "none",
              width: "70%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.19)",
              color: "#fffbe6",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.13)"
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{
            fontWeight:'bold', fontSize:"1.17em", color:'#ffd054',
            marginRight:8, letterSpacing:"1px"
          }}>Quantity:</label>
          <input
            value={qty}
            onChange={e => setQty(e.target.value)}
            type="number"
            placeholder="e.g. 40"
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "8px 13px",
              outline: "none",
              width: "70%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.19)",
              color: "#fffbe6",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.13)"
            }}
          />
        </div>
        <button
          onClick={calculate}
          style={{
            width: "100%",
            marginTop: "2px",
            padding: "12px 0",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #ffd054 50%, #ff5f54 100%)",
            color: "#222",
            fontWeight: "bold",
            border: "none",
            fontSize: "1.2em",
            letterSpacing: "1.6px",
            cursor: "pointer",
            boxShadow: "0 4px 20px #2226"
          }}
        >
          Calculate
        </button>
        {result && (
          <div style={{
            marginTop: 32,
            borderTop: "1.5px solid #ffd054",
            paddingTop: 20,
            marginBottom: 10,
          }}>
            <h4 style={{
              fontFamily: "'Montserrat', Arial",
              color:"#ffd054",
              fontWeight:"bold",
              fontSize:"1.2em",
              marginBottom: "14px",
              letterSpacing:"1.1px"
            }}>Result:</h4>
            <ul style={{
              fontSize:"1.11em",
              color:"#e2e2e9",
              marginLeft: "14px",
              listStyle: "disc inside"
            }}>
              <li><b>Gross Profit/Loss:</b> ₹{result.grossPL.toFixed(2)}</li>
              <li><b>Brokerage:</b> ₹{result.brokerage.toFixed(2)}</li>
              <li><b>STT:</b> ₹{result.stt.toFixed(2)}</li>
              <li><b>Exchange Charges:</b> ₹{result.exch.toFixed(2)}</li>
              <li><b>SEBI Charges:</b> ₹{result.sebi.toFixed(2)}</li>
              <li><b>GST:</b> ₹{result.gst.toFixed(2)}</li>
              <li><b>Stamp Duty:</b> ₹{result.stamp.toFixed(2)}</li>
              <li style={{
                color: "#26ff85",
                fontWeight: "bold",
                fontSize: "1.3em",
                marginTop: "4px",
                letterSpacing: "1.2px",
                textShadow: "0 4px 22px #0e0"
              }}>
                Net Profit/Loss: ₹{result.netPL.toFixed(2)}
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Overlay for soft lighting */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(120deg, rgba(15,21,56,0.53) 28%, rgba(34,26,49,0.35) 94%)",
        zIndex: 1,
        pointerEvents: "none"
      }} />
    </div>
  );
}

function App() {
  return <ZerodhaCalculator />;
}

export default App;
