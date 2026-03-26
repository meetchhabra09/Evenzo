import { useState, useEffect } from 'react';

export default function BottomBar() {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 59));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bottom-bar">
      <span className="bottom-countdown">{countdown}</span>
      <span className="bottom-divider"></span>
      <div className="bottom-event">
        <span className="bottom-event-title">Open Mic Night</span>
        <span>— Poetry & Spoken Word</span>
      </div>
    </div>
  );
}
