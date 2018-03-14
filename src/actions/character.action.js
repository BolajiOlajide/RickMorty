import axios from 'axios';

import { GET_CHARACTER_SUCCESS } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

const getCharactersSuccess = (payload) =>
  ({ type: GET_CHARACTER_SUCCESS, payload })

const getCharacters = () => dispatch => axios
  .get(`${BASE_URL}/character`)
  .then(response => dispatch(getCharactersSuccess(response.data.results)));

export default getCharacters;
