import {actionType} from '../constants/action-type.es6';

import {promisefetch as fetch}  from 'eg-tools';

export function query(){
    return dispatch=>{

        fetch('/test').then(function(data){

            dispatch({
                type: actionType.QUERY,
                data: data
            });
        }).then(()=>{
            console.dir('test fetch for promise');
        }).then(()=>{
            console.dir('callback');
        },(xhr)=>{
            console.dir(xhr);
        });
    };
}

export function getModuleList(key){

    return async ()=>{

        let data = await fetch('/search');
        if(data.status == 200){

            let str = JSON.stringify(data.msg.searchList);
            let reg = new RegExp('([^[},]*\{+"key":"[^"]*'+key+'[^"]*".+?\})','gi');

            str = str.match(reg);

            data = str ?str :[];

            return data;
        }

        return [];

    }
}