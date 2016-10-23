/** The main component
 * Keeping the AppComponent light
 */
import { Component, OnInit } from '@angular/core';
import { RuleEntity } from './models/rule-entity';
import { LoggerService } from './services/logger.service';

@Component({
    moduleId: module.id,
    selector: 'root-component',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    menuItems: any[] = [
        { routerLink: '/home', displayText: 'Home', isSelected: false },
        { routerLink: '/fields/create', displayText: 'Add Fields', isSelected: false },
        { routerLink: '/fields/edit', displayText: 'Edit Fields', isSelected: false },
        { routerLink: '/rules/create', displayText: 'Create Rules', isSelected: false },
        { routerLink: '/rules/edit', displayText: 'Edit Rules', isSelected: false },
    ]
    constructor(private loggerService: LoggerService) {
        loggerService.info("AppComponent Constructor");
    }
    ngOnInit() {
        this.loggerService.info("AppComponent ngOnInit");
    }
    selectedMenu(menu: any) {
        this.menuItems.forEach(element => {
            if (element.displayText === menu.displayText)
                element.isSelected = true;
            else
                element.isSelected = false;
        });

    }
}