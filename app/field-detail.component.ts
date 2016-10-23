import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FieldEntity } from './models/field-entity';

const types: any[] = [
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
    @Input()
    isInCreateMode:boolean;

    @Output()
    onremovefield = new EventEmitter<FieldEntity>();

    types: any[] = [];
    isPrepForDelete:boolean = false;
    isEditing:boolean = false;
    displayReadonlyData:boolean;
    displayEditSection:boolean;
    editingField:FieldEntity;

    constructor() {
    }

    ngOnInit() {
        this.types = types;
        console.log('isInCreateMode' + this.isInCreateMode);
        this.displayReadonlyData = !this.isEditing && !this.isInCreateMode;
        this.displayEditSection = this.isEditing || this.isInCreateMode;
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
        this.editingField = new FieldEntity();
        this.editingField = Object.assign({}, field);
         this.displayReadonlyData = !this.isEditing && !this.isInCreateMode;
        this.displayEditSection = this.isEditing || this.isInCreateMode;
    }
    cancelEdit(){
        this.field = this.editingField;
        this.isEditing = false;
         this.displayReadonlyData = !this.isEditing && !this.isInCreateMode;
        this.displayEditSection = this.isEditing || this.isInCreateMode;
    }
    saveField(){
        this.isEditing = false;
         this.displayReadonlyData = !this.isEditing && !this.isInCreateMode;
        this.displayEditSection = this.isEditing || this.isInCreateMode;
    }
}