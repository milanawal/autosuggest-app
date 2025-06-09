import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export interface SuggestionResponse {
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

export const getCategorySuggestion = async (query: string): Promise<SuggestionResponse> => {
  try {
    const response = await axios.get<SuggestionResponse>(`${API_BASE_URL}/autosuggest`, {
      params: { query },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    if (axiosError.response) {
      // Handle 4xx/5xx responses
      throw new Error(axiosError.response.data?.message || 'Failed to fetch suggestion');
    } else if (axiosError.request) {
      // The request was made but no response was received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      throw new Error('Request setup error');
    }
  }
};