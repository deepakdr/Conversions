"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var field_entity_1 = require('./models/field-entity');
var types = [
    { id: "", value: "-Type-" },
    { id: "Numeric", value: "Numeric" },
    { id: "AlphaNumeric", value: "AlphaNumeric" },
];
var FieldDetailComponent = (function () {
    function FieldDetailComponent() {
        this.onremovefield = new core_1.EventEmitter();
        this.types = [];
        this.isPrepForDelete = false;
        this.isEditing = false;
    }
    FieldDetailComponent.prototype.ngOnInit = function () {
        this.types = types;
    };
    FieldDetailComponent.prototype.deleteField = function () {
        this.isPrepForDelete = true;
    };
    FieldDetailComponent.prototype.confirmDelete = function () {
        console.log('removing field...');
        this.onremovefield.emit(this.field);
    };
    FieldDetailComponent.prototype.editField = function (field) {
        console.log(field);
        this.isEditing = true;
        this.editingField = new field_entity_1.FieldEntity();
        this.editingField = Object.assign({}, field);
    };
    FieldDetailComponent.prototype.cancelEdit = function () {
        this.field = this.editingField;
        this.isEditing = false;
    };
    FieldDetailComponent.prototype.saveField = function () {
        this.isEditing = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', field_entity_1.FieldEntity)
    ], FieldDetailComponent.prototype, "field", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FieldDetailComponent.prototype, "onremovefield", void 0);
    FieldDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'field-detail',
            templateUrl: 'field-detail.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FieldDetailComponent);
    return FieldDetailComponent;
}());
exports.FieldDetailComponent = FieldDetailComponent;
//# sourceMappingURL=field-detail.component.js.map