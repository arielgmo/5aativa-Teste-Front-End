import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESSFUL = 'FETCH_CHARACTERS_SUCCESSFUL';
export const FETCH_CHARACTERS_FAILED = 'FETCH_CHARACTERS_FAILED';

const marvelToken = '8520e3739597b514f1dcc836914bfdbf';

export function fetchStart() {
  return {
    type: FETCH_CHARACTERS_START,
  };
}

export function fetchSuccessful(data) {
  return {
    type: FETCH_CHARACTERS_SUCCESSFUL,
    payload: data,
  };
}

export function fetchFailed(status) {
  return {
    type: FETCH_CHARACTERS_FAILED,
    payload: status,
  };
}

export function startFetchCharacters(page, order) {
  return (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: {
        apikey: marvelToken,
        offset: page,
        orderBy: order,
      },
    })
      .then((response) => {
        if (response.data !== null && response.data !== undefined) {
          return dispatch(fetchSuccessful(response.data.data));
        }
        return dispatch(fetchFailed(response.status));
      });
  };
}
