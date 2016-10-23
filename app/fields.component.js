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
var router_1 = require('@angular/router');
var field_entity_1 = require('./models/field-entity');
var FieldsComponent = (function () {
    function FieldsComponent(route) {
        this.route = route;
        this.fields = [];
        this.isInEditMode = false;
        this.actionMode = "Create";
    }
    FieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var mode = params['mode'];
            _this.resetComponent(mode);
        });
    };
    FieldsComponent.prototype.resetComponent = function (mode) {
        this.isInEditMode = mode === 'create' ? false : true;
        if (this.isInEditMode) {
            this.actionMode = "Edit";
            this.fields = [];
            this.stubField("Account Number");
            this.stubField("Address");
            this.stubField("First Name");
        }
        else {
            this.fields = [];
            this.actionMode = "Create";
        }
    };
    FieldsComponent.prototype.stubField = function (name) {
        var field = new field_entity_1.FieldEntity();
        field.name = name;
        field.type = "Numeric";
        field.defaultValue = "12345678";
        field.isInput = true;
        field.startPosition = 5;
        field.length = 100;
        this.fields.push(field);
    };
    FieldsComponent.prototype.addField = function () {
        var array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        this.stubField(array[0].toString());
    };
    FieldsComponent.prototype.removeFieldEventHandler = function (field) {
        console.log(field.name);
        this.fields = this.fields.filter(function (f) {
            return f.name != field.name;
        });
    };
    FieldsComponent.prototype.onsubmit = function () {
        console.log('Saving Fields..');
    };
    FieldsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fields-component',
            templateUrl: 'Fields.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], FieldsComponent);
    return FieldsComponent;
}());
exports.FieldsComponent = FieldsComponent;
//# sourceMappingURL=fields.component.js.map