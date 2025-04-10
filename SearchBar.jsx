import React, { useState } from 'react';

export default function SearchBar({ topics, onSearchResult }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredTopics = topics.filter(topic =>
      topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearchResult(filteredTopics);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a topic..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
