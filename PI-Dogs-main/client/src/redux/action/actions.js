import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const GET_DETAILS = "GET_DETAILS";
export const GET_NAME_DOG = "GET_NAME_DOG";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_WEIGHT = "FILTER_BY_WEIGHT";

export function fetchDogs() {
  return async function (dispatch) {
    try {
      var allDogs = await axios.get(`https://henrydogs-production.up.railway.app/dogs`);
      return dispatch({
        type: GET_DOGS,
        payload: allDogs.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function fetchTemperaments() {
  return async function (dispatch) {
    try {
      var allTemperaments = await axios.get(
        `https://henrydogs-production.up.railway.app/temperaments`
      );
      return dispatch({
        type: GET_TEMPERAMENT,
        payload: allTemperaments.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function fetchDogById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://henrydogs-production.up.railway.app/dogs/${id}`
      );
      return dispatch({
        type: GET_DETAILS,
        payload: response.data,
      });
    } catch {
      console.log("Try another ID");
    }
  };
}

export function fetchDogByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `https://henrydogs-production.up.railway.app/dogs?name=${name}`
      );
      return dispatch({
        type: GET_NAME_DOG,
        payload: response.data,
      });
    } catch (error) {
      console.error(`Dog not found, try another name`);
      alert(`Dog not found, try another name`);
    }
  };
}

export function createDog(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://henrydogs-production.up.railway.app/dogs",
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByTemperaments(payload) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}

export function filterByName(payload) {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
}
export function filterByWeight(payload) {
  return {
    type: FILTER_BY_WEIGHT,
    payload,
  };
}