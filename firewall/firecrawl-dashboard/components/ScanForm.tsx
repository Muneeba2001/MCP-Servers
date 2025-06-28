"use client";
import { useState } from "react";

export default function ScanForm({ onResult }: { onResult: (findings: any) => void }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    setLoading(false);
    onResult(data.findings);
  };

  return (
    <form onSubmit={handleScan} className="flex gap-2">
      <input
        className="border p-2 rounded w-80"
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit" disabled={loading}>
        {loading ? "Scanning..." : "Scan"}
      </button>
    </form>
  );
}