import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Container, Title, Input, Result, Loading } from './AutoSuggest.styles';
// Alternative approach with custom hook:
// import { useAutoSuggest } from '../../hooks';

interface SuggestionResponse {
  data: {
    item: string;
    category: string;
    message: string;
  };
  meta: {
    version: string;
    api_version: string;
  };
}

const AutoSuggest: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Alternative approach using custom hook:
  // const { suggestion, loading, error } = useAutoSuggest(query);

  useEffect(() => {
    if (query.length < 3) {
      setResult('');
      setError(null);
      return;
    }

    const timer = setTimeout(() => {
      fetchCategory();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchCategory = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get<SuggestionResponse>(
        `http://localhost:8000/api/autosuggest?query=${query}`
      );
      setResult(response.data.data.message);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      if (error.response) {
        setError(error.response.data?.message || 'Failed to fetch suggestion');
      } else {
        setError('Network error - could not connect to API');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Category Auto-Suggest</Title>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        placeholder="Type a food item (e.g., banana)"
        aria-label="Search for food items"
      />
      
      {loading && <Loading>Searching...</Loading>}
      
      {error && (
        <Result error>{error}</Result>
      )}
      
      {result && !loading && (
        <div>
          <Result>{result}</Result>
          {/* <small>API connected successfully</small> */}
        </div>
      )}
    </Container>
  );
};

export default AutoSuggest;