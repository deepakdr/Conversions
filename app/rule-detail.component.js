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
var rule_entity_1 = require('./models/rule-entity');
var condition_action_service_1 = require('./services/condition-action.service');
var logger_service_1 = require('./services/logger.service');
var fields_service_1 = require('./services/fields.service');
var RuleDetailComponent = (function () {
    function RuleDetailComponent(conditionActionService, loggerService, fieldsService) {
        this.conditionActionService = conditionActionService;
        this.loggerService = loggerService;
        this.fieldsService = fieldsService;
        this.isPrepForDelete = false;
        this.ondeleteRuleEvent = new core_1.EventEmitter();
    }
    RuleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conditionActionService.getActions().then(function (data) { return _this.actions = data; });
        this.conditionActionService.getConditions().then(function (data) { return _this.conditions = data; });
        this.fieldsService.getInputFields().then(function (data) { return _this.inputFields = data; });
        this.fieldsService.getInputFieldsForCondition().then(function (data) { return _this.inputFieldsForCondition = data; });
        this.fieldsService.getOutputFields().then(function (data) { return _this.outputFields = data; });
    };
    RuleDetailComponent.prototype.updateAction = function (action) {
        //this.loggerService.log(action);
        //this.rule.outputAction = action;
    };
    RuleDetailComponent.prototype.deleteRule = function (rule) {
        this.isPrepForDelete = true;
    };
    RuleDetailComponent.prototype.confirmDelete = function (rule) {
        this.loggerService.log(rule.id.toString());
        this.ondeleteRuleEvent.emit(rule);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', rule_entity_1.RuleEntity)
    ], RuleDetailComponent.prototype, "rule", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RuleDetailComponent.prototype, "ondeleteRuleEvent", void 0);
    RuleDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rule-detail',
            templateUrl: 'rule-detail.component.html'
        }), 
        __metadata('design:paramtypes', [condition_action_service_1.ConditionActionService, logger_service_1.LoggerService, fields_service_1.FieldsService])
    ], RuleDetailComponent);
    return RuleDetailComponent;
}());
exports.RuleDetailComponent = RuleDetailComponent;
//# sourceMappingURL=rule-detail.component.js.map