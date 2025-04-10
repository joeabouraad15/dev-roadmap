import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import roadmapDataFrontend from '../data/frontend.json';
import roadmapDataBackend from '../data/backend.json';

export default function HomePage() {
  const [selected, setSelected] = useState('frontend');
  const [searchResults, setSearchResults] = useState([]);
  
  const roadmapData = selected === 'frontend' ? roadmapDataFrontend : roadmapDataBackend;

  const extractTopics = () => {
    const matches = roadmapData.diagram.match(/\b[A-Za-z0-9]+\b/g);
    return Array.from(new Set(matches || []));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{roadmapData.title}</h1>
      <button onClick={() => setSelected('frontend')}>Frontend</button>
      <button onClick={() => setSelected('backend')}>Backend</button>

      <SearchBar topics={extractTopics()} onSearchResult={setSearchResults} />
      
      <div>
        {searchResults.length > 0
          ? searchResults.map((topic, idx) => <p key={idx}>{topic}</p>)
          : <p>No results found.</p>}
      </div>
    </div>
  );
}
