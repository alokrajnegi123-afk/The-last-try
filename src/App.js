import React, { useState } from "react";

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
    const brokerageBuy = Math.min(0.0003 * buyPrice * quantity, 20);
    const brokerageSell = Math.min(0.0003 * sellPrice * quantity, 20);
    const brokerage = brokerageBuy + brokerageSell;
    const stt = 0.00025 * sellPrice * quantity;
    const exch = 0.0000325 * turnover;
    const sebi = 0.000001 * turnover;
    const gst = 0.18 * (brokerage + exch);
    const stamp = 0.00003 * buyPrice * quantity;

    const grossPL = (sellPrice - buyPrice) * quantity;
    const totalCharges = brokerage + stt + exch + sebi + gst + stamp;
    const netPL = grossPL - totalCharges;

    setResult({
      grossPL: Number(grossPL.toFixed(2)),
      brokerage: Number(brokerage.toFixed(2)),
      stt: Number(stt.toFixed(2)),
      exch: Number(exch.toFixed(2)),
      sebi: Number(sebi.toFixed(2)),
      gst: Number(gst.toFixed(2)),
      stamp: Number(stamp.toFixed(2)),
      netPL: Number(netPL.toFixed(2))
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
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;700&family=Montserrat:wght@600&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          background: "rgba(12,16,35,0.73)",
          borderRadius: "22px",
          boxShadow: "0 8px 44px 0 rgba(50,72,165,0.27)",
          padding: "44px 30px 36px 30px",
          maxWidth: 420,
          width: "100%",
          backdropFilter: "blur(8px)",
          border: "2px solid rgba(255,255,255,0.13)",
          zIndex: 2
        }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue', Arial, sans-serif",
            color: "#ffd054",
            fontSize: "2.5em",
            letterSpacing: "2px",
            textShadow: "0 4px 16px #222, 0 1px 4px #fff",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Zerodha Intraday Calculator
        </h2>
        <div style={{ marginBottom: 18 }}>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "1em",
              color: "#ffd054",
              marginRight: 8,
              letterSpacing: "1px"
            }}
          >
            Buy Price:
          </label>
          <input
            value={buy}
            onChange={e => setBuy(e.target.value)}
            type="number"
            placeholder="e.g. 707.85"
            style={{
              border: "none",
              borderRadius: "9px",
              padding: "8px 13px",
              outline: "none",
              width: "70%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.18)",
              color: "#fffbe6",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.1)"
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "1em",
              color: "#ffd054",
              marginRight: 8,
              letterSpacing: "1px"
            }}
          >
            Sell Price:
          </label>
          <input
            value={sell}
            onChange={e => setSell(e.target.value)}
            type="number"
            placeholder="e.g. 715.15"
            style={{
              border: "none",
              borderRadius: "9px",
              padding: "8px 13px",
              outline: "none",
              width: "70%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.18)",
              color: "#fffbe6",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.1)"
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "1em",
              color: "#ffd054",
              marginRight: 8,
              letterSpacing: "1px"
            }}
          >
            Quantity:
          </label>
          <input
            value={qty}
            onChange={e => setQty(e.target.value)}
            type="number"
            placeholder="e.g. 40"
            style={{
              border: "none",
              borderRadius: "9px",
              padding: "8px 13px",
              outline: "none",
              width: "70%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.18)",
              color: "#fffbe6",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.1)"
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
            background: "linear-gradient(90deg, #ffd054 60%, #ff5f54 100%)",
            color: "#222",
            fontWeight: "bold",
            border: "none",
            fontSize: "1.16em",
            letterSpacing: "1.4px",
            cursor: "pointer",
            boxShadow: "0 4px 15px #2224"
          }}
        >
          Calculate
        </button>
        {result && (
          <div
            style={{
              marginTop: 32,
              borderTop: "1.5px solid #ffd054",
              paddingTop: 18,
              marginBottom: 10
            }}
          >
            <h4
              style={{
                fontFamily: "'Montserrat', Arial",
                color: "#ffd054",
                fontWeight: "bold",
                fontSize: "1.13em",
                marginBottom: "13px",
                letterSpacing: "1px"
              }}
            >
              Result:
            </h4>
            <ul
              style={{
                fontSize: "1.07em",
                color: "#e2e2e9",
                marginLeft: "14px",
                listStyle: "disc inside"
              }}
            >
              <li>
                <b>Gross Profit/Loss:</b> ₹{result.grossPL}
              </li>
              <li>
                <b>Brokerage:</b> ₹{result.brokerage}
              </li>
              <li>
                <b>STT:</b> ₹{result.stt}
              </li>
              <li>
                <b>Exchange Charges:</b> ₹{result.exch}
              </li>
              <li>
                <b>SEBI Charges:</b> ₹{result.sebi}
              </li>
              <li>
                <b>GST:</b> ₹{result.gst}
              </li>
              <li>
                <b>Stamp Duty:</b> ₹{result.stamp}
              </li>
              <li
                style={{
                  color: result.netPL >= 0 ? "#26ff85" : "#ff5252",
                  fontWeight: "bold",
                  fontSize: "1.22em",
                  marginTop: "4px",
                  letterSpacing: "1px",
                  textShadow:
                    result.netPL >= 0
                      ? "0 2px 16px #0e0, 0 1px 1px #fff"
                      : "0 2px 16px #800, 0 1px 1px #fff"
                }}
              >
                Net Profit/Loss: ₹{result.netPL}
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(15,21,56,0.5) 36%, rgba(49,44,69,0.21) 99%)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}

function App() {
  return <ZerodhaCalculator />;
}

export default App;
