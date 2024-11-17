import Link from "next/link";
import React from "react";

export default function CurrentDateTime({ timestamp }) {
  // Convert the provided timestamp into a formatted date and time
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp); // Convert the timestamp to a Date object
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options); // e.g., "Nov 9"
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const timezoneOffset = -date.getTimezoneOffset() / 60; // Offset in hours
    const gmtOffset = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;
    return `${formattedDate} ${hours}:${minutes} (${gmtOffset})`;
  };

  return (
    <Link href="/some-path" className="text-white font-bold text-2xl">Sale Ends:
      {formatDateTime(timestamp)}
    </Link>
  );
}
