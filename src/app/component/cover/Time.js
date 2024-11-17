'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CurrentDateTime() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options = { month: "short", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options); // e.g., "Nov 9"
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const timezoneOffset = -date.getTimezoneOffset() / 60; // Offset in hours
      const gmtOffset = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;
      setDateTime(`${formattedDate} ${hours}:${minutes} (${gmtOffset})`);
    };

    updateDateTime(); // Set initial value
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Link href="/some-path" className="text-blue-500 underline">
      {dateTime}
    </Link>
  );
}
