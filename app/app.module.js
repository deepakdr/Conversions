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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var rules_component_1 = require('./rules.component');
var rule_detail_component_1 = require('./rule-detail.component');
var fields_component_1 = require('./fields.component');
var field_detail_component_1 = require('./field-detail.component');
var home_component_1 = require('./home.component');
var logger_service_1 = require('./services/logger.service');
var condition_action_service_1 = require('./services/condition-action.service');
var fields_service_1 = require('./services/fields.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            id: 'RootModule',
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'rules/:mode', component: rules_component_1.RulesComponent },
                    { path: 'fields/:mode', component: fields_component_1.FieldsComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent, rules_component_1.RulesComponent,
                rule_detail_component_1.RuleDetailComponent, fields_component_1.FieldsComponent, field_detail_component_1.FieldDetailComponent, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [logger_service_1.LoggerService, condition_action_service_1.ConditionActionService, fields_service_1.FieldsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map