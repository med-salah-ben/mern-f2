import { combineReducers } from "redux";
import {contactReducer} from "./contact"
import { editReducer } from "./editReducer";

export const rootReducer = combineReducers({contactReducer,editReducer})