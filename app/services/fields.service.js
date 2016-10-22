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
var FieldsService = (function () {
    function FieldsService() {
    }
    FieldsService.prototype.getInputFields = function () {
        var inputFields = [
            {
                id: "",
                value: "-Input Field-"
            },
            {
                id: "Account Number",
                value: "Account Number"
            },
            {
                id: "Address",
                value: "Address"
            },
            {
                id: "First Name",
                value: "First Name"
            }
        ];
        return Promise.resolve(inputFields);
    };
    FieldsService.prototype.getInputFieldsForCondition = function () {
        var inputFields = [
            {
                id: "Same",
                value: "Same"
            },
            {
                id: "Account Number",
                value: "Account Number"
            },
            {
                id: "Address",
                value: "Address"
            },
            {
                id: "First Name",
                value: "First Name"
            }
        ];
        return Promise.resolve(inputFields);
    };
    FieldsService.prototype.getOutputFields = function () {
        var outputFields = [
            {
                id: "",
                value: "-Output Field-"
            },
            {
                id: "Account Number",
                value: "Account Number"
            },
            {
                id: "Address",
                value: "Address"
            },
            {
                id: "First Name",
                value: "First Name"
            }
        ];
        return Promise.resolve(outputFields);
    };
    FieldsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FieldsService);
    return FieldsService;
}());
exports.FieldsService = FieldsService;
//# sourceMappingURL=fields.service.js.map