import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FieldEntity } from './models/field-entity';
import { KeyValue } from './models/key-value';

const types: KeyValue[] = [
    { id: "", value: "-Type-" },
    { id: "Numeric", value: "Numeric" },
    { id: "AlphaNumeric", value: "AlphaNumeric" },
];

@Component({
    moduleId: module.id,
    selector: 'field-detail',
    templateUrl: 'field-detail.component.html'
})
export class FieldDetailComponent implements OnInit {
    @Input()
    field: FieldEntity;
    @Output()
    onremovefield = new EventEmitter<FieldEntity>();

    types: KeyValue[] = [];
    isPrepForDelete:boolean = false;
    isEditing:boolean = false;

    editingField:FieldEntity;

    constructor() {
    }

    ngOnInit() {
        this.types = types;


    }
    deleteField() {
        this.isPrepForDelete = true;
    }
    confirmDelete() {
        console.log('removing field...');
        this.onremovefield.emit(this.field);
    }
    editField(field:FieldEntity){
        console.log(field);
        this.isEditing = true;
        this.editingField = field;
    }
    cancelEdit(){
        this.editingField = null;
        this.isEditing = false;
    }
}