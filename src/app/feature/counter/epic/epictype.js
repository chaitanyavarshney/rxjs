import { combineEpics } from "redux-observable"
import { getDataEpic } from "./rootepic"

const epics = [getDataEpic]
export const RootEpics = combineEpics(...epics)