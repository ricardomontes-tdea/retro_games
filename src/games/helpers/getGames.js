import axios from 'axios';

const api = axios.create({
  baseURL: 'https://retro.gg/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getGames = async (searchTerm) => {
  try {
    const response = await api.get(`/search/games/${searchTerm}`, {
      params: {
        key: '2db67360-e7bd-4033-baaa-cec44868f3b3'
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error searching games:', error);
    throw error;
  }
};