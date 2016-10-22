import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FieldEntity } from './models/field-entity';
 

@Component({
    moduleId: module.id,
    selector: 'fields-component',
    templateUrl: 'Fields.component.html'
})
export class FieldsComponent implements OnInit {

    fields:FieldEntity[]=[];
    isInEditMode:boolean = false;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.stubField("Account Number");
        this.stubField("Address");
        this.stubField("First Name");

          this.route.params.forEach((params: Params) => {
            let mode = params['mode'];
            this.isInEditMode = mode === 'create' ? false : true;
            console.log("MODE: " + mode);
            console.log(this.isInEditMode);
        });

    }
    stubField(name:string):void{
        let field = new FieldEntity();
        field.name = name; 
        field.type = "Numeric";
        field.defaultValue="12345678";
        field.isInput = true;
        field.startPosition=5;
        field.length=100;
        this.fields.push(field);
    }
    addField():void{
        var array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        this.stubField(array[0].toString());
    }
    removeFieldEventHandler(field:FieldEntity){
        console.log(field.name);
        this.fields = this.fields.filter((f)=>{
            return f.name != field.name;
        });
    }
    onsubmit():void{
        console.log('Saving Fields..');
    }
}