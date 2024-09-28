'use client';

import { useState } from 'react';

export default function GeneratorPage() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const res = await fetch('/api/hello-world');
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <main>
      <h1>Generator Page</h1>
      <button onClick={fetchMessage}>Generate</button>
      {message && <p>{message}</p>}
    </main>
  );
}
