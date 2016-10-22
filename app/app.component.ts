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
    constructor(private loggerService: LoggerService) {
        loggerService.info("AppComponent Constructor");
    }
    ngOnInit() {
        this.loggerService.info("AppComponent ngOnInit");
    }
}