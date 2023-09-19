export const SET_JOBS = "SET_JOBS";
export const SET_JOBS_LOADING_ON = "SET_JOBS_LOADING_ON";
export const SET_JOBS_LOADING_OFF = "SET_JOBS_LOADING_OFF";
export const SET_JOBS_ERROR_ON = "SET_JOBS_ERROR_ON";
export const SET_JOBS_ERROR_OFF = "SET_JOBS_ERROR_OFF";
export const SET_JOBS_ERROR_MESSAGE = "SET_JOBS_ERROR_MESSAGE";
export const UNSET_JOBS = "UNSET_JOBS";
export const ADD_TO_FAV_COMP = "ADD_TO_FAV_COMP";
export const REMOVE_FROM_FAV_COMP = "REMOVE_FROM_FAV_COMP";

export const setJobsLoadingOn = () => ({ type: SET_JOBS_LOADING_ON });
export const setJobsLoadingOff = () => ({ type: SET_JOBS_LOADING_OFF });
export const setJobsErrorOn = () => ({ type: SET_JOBS_ERROR_ON });
export const setJobsErrorOff = () => ({ type: SET_JOBS_ERROR_OFF });
export const setJobsErrorMessage = error => ({ type: SET_JOBS_ERROR_MESSAGE, payload: error });
export const unsetJobsAction = () => ({ type: UNSET_JOBS });
export const addToFavCompAction = job => ({ type: ADD_TO_FAV_COMP, payload: job });
export const removeFromFavCompAction = job => ({ type: REMOVE_FROM_FAV_COMP, payload: job });

export const getJobsAction = (query, searchParam) => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?" + searchParam + "=";
    try {
      dispatch(setJobsLoadingOn());
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SET_JOBS, payload: data });
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch(setJobsErrorOn());
      dispatch(setJobsErrorMessage(error.message));
    } finally {
      dispatch(setJobsLoadingOff());
    }
  };
};
