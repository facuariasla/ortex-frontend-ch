import { useEffect, useState } from "react";
let timerightnow = new Date().toLocaleString();

function WSSTrading() {
  const [price, setPrice] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const subscription = { topic: "subscribe", to: "EURUSD:CUR" };

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.tradingeconomics.com/?client=guest:guest"
    );

    ws.onopen = () => {
      console.log("Connection Established!");
      ws.send(JSON.stringify(subscription));
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response);
      if (response.price) {
        setPrice(response.price);
        let today = new Date(response.dt * 1);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        // let date = today.toLocaleDateString("en-EN", options as any);
        let date = today.toLocaleString();
        setDate(date);
      }
    };

    ws.onerror = () => {
      console.log("WS Error");
    };
    // cleanup method which will be called before next execution. in your case unmount.

    if (!price) return;
    return () => {
      ws.close();
    };
  }, []);

  return (
    <a
      href="https://tradingeconomics.com/euro-area/currency"
      target="_blank"
      className="border border-aquaort rounded-xl py-2 px-4 sm:w-80 font-semibold flex flex-row gap-1 justify-between self-center transition hover:border-white"
    >
      <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-2 text-xs">
        <p>EUR/USD</p>
        <p className="text-aquaorthree">{price}</p>
      </div>
      <div className="flex flex-col justify-center items-center text-xs">
        <p className="text-center">Last Update:</p>
        <p className="text-center">{date ? date : timerightnow}</p>
      </div>
    </a>
  );
}

export default WSSTrading;
