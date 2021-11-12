import { googleApi, tgApi } from "../Api/api"

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE'
const SET_IS_SUCCESS = 'SET_IS_SUCCESS' 

let initialState = {
    isFetching: false,
    currentLanguage: "ru",
    isSuccess: false
}

const commonReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_CURRENT_LANGUAGE: {
            return { ...state, currentLanguage: action.currentLanguage }
        }
        case SET_IS_SUCCESS: {
            return { ...state, isSuccess: action.isSuccess }
        }
        default:
            return state
    }
}

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING, isFetching
})

export const setCurrentLanguage = (currentLanguage) => ({
    type: SET_CURRENT_LANGUAGE, currentLanguage
})

export const setIsSuccess = (isSuccess) => ({
    type: SET_IS_SUCCESS, isSuccess
})

export const saveToGoogleTable = (formData) => async (dispatch) => {
    dispatch(setIsFetching(true));
    try{
        await googleApi.saveDataToGoogleSheet(formData);
        await tgApi.saveDataToTelegramBot(formData)
        dispatch([setIsSuccess(true), setIsFetching(false)]);
    }catch(err){
        dispatch([setIsSuccess(false), setIsFetching(false)]);
    }
}


export default commonReducer