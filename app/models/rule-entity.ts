
export class RuleEntity{
    id:number;
    isWithoutInput:boolean;
    inputField:string;
    conditionField:string;
    condition:string;
    conditionValue:string;
    outputField:string;
    outputAction:string;
    actionValue:string;
    rowGroupId:number;

    constructor(){
        this.conditionField="Same";
        this.inputField="";
        this.outputField="";
        this.condition="";
        this.outputAction="";

    }
}