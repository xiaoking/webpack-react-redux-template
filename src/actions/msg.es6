import {actionType} from '../constants/action-type.es6';

import {promisefetch as fetch}  from 'eg-tools';

export function save(callback){

    return dispatch=>{

        fetch('/msg/save').then(function(data){

            if(data.status ==200){
                callback();
            }
        });
    };
}