import {
    GET_DOGS,
    GET_TEMPERAMENT,
    GET_DETAILS,
    GET_NAME_DOG,
    FILTER_BY_TEMPERAMENTS,
    FILTER_BY_WEIGHT,
    FILTER_BY_NAME,
  } from "../action/actions";
  
  const INITIAL_STATE = {
    dogs: [],
    temperaments: [],
    detail: [],
    filterDogs: [],
  };
  
  export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
      case GET_DOGS:
        return {
          ...state,
          dogs: payload,
          filterDogs: payload,
        };
      case GET_NAME_DOG:
        return {
          ...state,
          dogs: payload,
        };
      case GET_DETAILS:
        return {
          ...state,
          detail: payload,
        };
      case GET_TEMPERAMENT:
        return {
          ...state,
          temperaments: payload,
        };
      case FILTER_BY_TEMPERAMENTS:
        const allDogs = state.filterDogs;
        const filterDogs =
          payload === "all"
            ? allDogs
            : allDogs.filter((dog) => dog.temperament?.includes(payload));
        return {
          ...state,
          dogs: filterDogs,
        };
      case FILTER_BY_WEIGHT:
        const filterByWeight =
          payload === "desc"
            ? state.dogs.sort((a, b) => {
                return b.maxWeight - a.maxWeight;
              })
            : state.dogs.sort((a, b) => {
                return a.maxWeight - b.maxWeight;
              });
        return {
          ...state,
          dogs: filterByWeight,
        };
      case FILTER_BY_NAME:
        const filterByName =
          payload === "az"
            ? state.dogs.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
              })
            : state.dogs.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
              });
        return {
          ...state,
          dogs: filterByName,
        };
      default:
        return state;
    }
  }