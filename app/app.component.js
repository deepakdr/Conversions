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
/** The main component
 * Keeping the AppComponent light
 */
var core_1 = require('@angular/core');
var logger_service_1 = require('./services/logger.service');
var AppComponent = (function () {
    function AppComponent(loggerService) {
        this.loggerService = loggerService;
        this.menuItems = [
            { routerLink: '/home', displayText: 'Home', isSelected: false },
            { routerLink: '/fields/create', displayText: 'Add Fields', isSelected: false },
            { routerLink: '/fields/edit', displayText: 'Edit Fields', isSelected: false },
            { routerLink: '/rules/create', displayText: 'Create Rules', isSelected: false },
            { routerLink: '/rules/edit', displayText: 'Edit Rules', isSelected: false },
        ];
        loggerService.info("AppComponent Constructor");
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loggerService.info("AppComponent ngOnInit");
    };
    AppComponent.prototype.selectedMenu = function (menu) {
        this.menuItems.forEach(function (element) {
            if (element.displayText === menu.displayText)
                element.isSelected = true;
            else
                element.isSelected = false;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'root-component',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map