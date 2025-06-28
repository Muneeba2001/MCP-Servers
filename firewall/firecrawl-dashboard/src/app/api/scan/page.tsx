"use client";
import { useState } from "react";
import ScanForm from "../../../../components/ScanForm";
import ScanResults from "../../../../components/ScanResults";

export default function ScanPage() {
  const [findings, setFindings] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Vulnerability Scanner</h1>
      <ScanForm onResult={setFindings} />
      <ScanResults findings={findings} />
    </div>
  );
}
