import React, { useEffect, useState } from "react";

const ConnectionStatusNotification = () => {
  const [statusMessage, setStatusMessage] = useState(
    navigator.onLine ? "" : "Please check your internet connection!"
  );

  useEffect(() => {
    const updateStatus = () => {
      if (navigator.onLine) {
        setStatusMessage("You are online");
        setInterval(() => setStatusMessage(""), 3000);
      } else {
        setStatusMessage("Please check your internet connection!");
      }
    };

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);
  return (
    <div
      className={` text-white w-full text-center text-xs sm:text-sm fixed bottom-0 z-50 transition-all  ${
        navigator.onLine ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {statusMessage}
    </div>
  );
};

export default ConnectionStatusNotification;
