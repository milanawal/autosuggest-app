import { useState, useEffect } from 'react';
import { getCategorySuggestion, SuggestionResponse } from '../api/autosuggest';
import { DEBOUNCE_DELAY, MIN_QUERY_LENGTH } from '../utils/constants';

interface UseAutoSuggestReturn {
  suggestion: SuggestionResponse | null;
  loading: boolean;
  error: string | null;
}

export const useAutoSuggest = (query: string): UseAutoSuggestReturn => {
  const [suggestion, setSuggestion] = useState<SuggestionResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) {
      setSuggestion(null);
      setError(null);
      return;
    }

    const timer = setTimeout(() => {
      fetchSuggestion();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestion = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getCategorySuggestion(query);
      setSuggestion(data);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { suggestion, loading, error };
};