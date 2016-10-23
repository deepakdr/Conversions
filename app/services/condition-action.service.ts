import { Injectable } from '@angular/core';

 
@Injectable()
export class ConditionActionService{
    getConditions():Promise<any[]>{
         let conditions:any[] = [{
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
    getActions():Promise<any[]>{
        let actions:any[] = [{
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