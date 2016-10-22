import { Injectable } from '@angular/core';
import { KeyValue } from '../models/key-value';

 
@Injectable()
export class ConditionActionService{
    getConditions():Promise<KeyValue[]>{
         let conditions:KeyValue[] = [{
            id:'',
            value:'-Condition-'
        },
        {
            id:'contains',
            value:'contains'
        },
        {
            id:'equals',
            value:'equals'
        }
        ]
        return Promise.resolve(conditions);
    }
    getActions():Promise<KeyValue[]>{
        let actions:KeyValue[] = [{
            id:'',
            value:'-Action-'
        },
        {
            id:'addtext',
            value:'addtext'
        },
        {
            id:'droptext',
            value:'droptext'
        }
        ]
        return Promise.resolve(actions);
    }
}