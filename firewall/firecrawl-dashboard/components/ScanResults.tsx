type Finding = { issue: string; url: string };

export default function ScanResults({ findings }: { findings: Finding[] | null }) {
  if (!findings) return null;
  if (findings.length === 0) return <p className="mt-4 text-green-600">No vulnerabilities found!</p>;
  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">Vulnerabilities Found:</h2>
      <ul className="list-disc ml-6">
        {findings.map((f, i) => (
          <li key={i}>
            <span className="font-semibold">{f.issue}</span> at <a href={f.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{f.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
