import { useState } from 'react';
import { useReddit } from '@devvit/web/client';

export function App() {
  const reddit = useReddit();
  const [queue, setQueue] = useState([]);
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <h1>Brett's Mod Queue</h1>
      <p>Moderation queue viewer and processor</p>
      
      <nav>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('reported')}>Reported</button>
        <button onClick={() => setFilter('approved')}>Approved</button>
        <button onClick={() => setFilter('removed')}>Removed</button>
      </nav>

      <div>
        <h2>Queue ({queue.length})</h2>
        <p>Filter: {filter}</p>
      </div>
    </div>
  );
}
