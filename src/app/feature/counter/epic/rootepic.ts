import axios from "axios"
import { Observable,of, from} from 'rxjs';
import {filter,debounceTime,catchError,takeUntil, mergeMap,map} from "rxjs/operators"
import { StateObservable } from "redux-observable";
import { RootAction, RootState } from "../../../store";
import { Error, post, postDetail } from "../counterSlice";

async function getData(){
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return response.data;
}
export const getDataEpic=(action$: Observable<RootAction>)=>
    action$.pipe(
        filter(post.match),
        debounceTime(300),
        mergeMap(()=>{
            return from(getData()).pipe(
                map((res:Record<string,string>)=>{
                    return postDetail(res.title);
                }),
                takeUntil(action$.pipe(filter(post.match))),
                catchError((error)=>{
                    return of(Error(error.message))
                })
            )
        })
    )