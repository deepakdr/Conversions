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
var logger_service_1 = require('./services/logger.service');
var router_1 = require('@angular/router');
var RulesComponent = (function () {
    function RulesComponent(loggerService, route) {
        this.loggerService = loggerService;
        this.route = route;
        this.id = 0;
        this.rules = [];
        this.isInEditMode = false;
        this.actionMode = "Create";
        loggerService.info('RulesComponent Constructor');
    }
    RulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggerService.info('RulesComponent ngOnInit');
        var mode = "";
        this.route.params.forEach(function (params) {
            mode = params['mode'];
            _this.resetComponent(mode);
        });
    };
    RulesComponent.prototype.resetComponent = function (mode) {
        this.rules = [];
        if (mode === 'edit') {
            this.isInEditMode = true;
            this.actionMode = "Edit";
            var r = new rule_entity_1.RuleEntity();
            r.condition = "contains";
            r.inputField = "Account Number";
            r.conditionField = "Same";
            r.conditionValue = "Hello";
            this.rules.push(r);
        }
        else {
            this.isInEditMode = false;
            this.actionMode = "Create";
        }
        console.log("MODE: " + mode);
        console.log(this.isInEditMode);
    };
    RulesComponent.prototype.addRule = function () {
        this.loggerService.info('RulesComponent addRule .. Adding Rule');
        var ruleItem = new rule_entity_1.RuleEntity();
        ruleItem.id = this.id;
        this.rules.push(ruleItem);
        this.id++;
    };
    RulesComponent.prototype.onsubmit = function () {
        this.loggerService.log('Submit Event Triggered');
        this.loggerService.log(JSON.stringify(this.rules));
    };
    RulesComponent.prototype.deleteRuleEventHandler = function (rule) {
        this.rules = this.rules.filter(function (obj) { return obj.id != rule.id; });
    };
    RulesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rules-component',
            templateUrl: 'rules.component.html'
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService, router_1.ActivatedRoute])
    ], RulesComponent);
    return RulesComponent;
}());
exports.RulesComponent = RulesComponent;
//# sourceMappingURL=rules.component.js.map