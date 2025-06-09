import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  border-radius: 8px;
  background: white;
  color: #282c34;
  min-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

interface ResultProps {
  error?: boolean;
}

export const Result = styled.p<ResultProps>`
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
  margin-top: 1rem;
  color: ${props => props.error ? '#e74c3c' : '#2c3e50'};
`;

export const Loading = styled.p`
  color: #7f8c8d;
  font-style: italic;
`;