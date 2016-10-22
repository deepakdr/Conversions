import { Component, OnInit } from '@angular/core';
import { RuleEntity } from './models/rule-entity';
import { LoggerService } from './services/logger.service';
import { ActivatedRoute, Params } from '@angular/router';

 
@Component({
    moduleId: module.id,
    selector: 'rules-component',
    templateUrl: 'rules.component.html'
})
export class RulesComponent implements OnInit {
    id: number = 0;
    rules: RuleEntity[] = [];
    isInEditMode: boolean = false;
    actionMode: string = "Create";
 
    constructor(private loggerService: LoggerService, private route: ActivatedRoute) {
        loggerService.info('RulesComponent Constructor');
    }

    ngOnInit() {
        this.loggerService.info('RulesComponent ngOnInit');
        let mode = "";
        this.route.params.forEach((params: Params) => {
            mode = params['mode'];
            this.resetComponent(mode);
        });

    }

    resetComponent(mode: string) {
        this.rules = [];

        if (mode === 'edit') {
            this.isInEditMode = true;
            this.actionMode = "Edit";
              let r = new RuleEntity();
        r.condition="contains";
        r.inputField="Account Number";
        r.conditionField="Same";
        r.conditionValue="Hello";
        this.rules.push(r);
        }
        else {
            this.isInEditMode = false;
            this.actionMode = "Create";
        }
        console.log("MODE: " + mode);
        console.log(this.isInEditMode);
    }

    addRule() {
        this.loggerService.info('RulesComponent addRule .. Adding Rule')
        let ruleItem = new RuleEntity();
        ruleItem.id = this.id;
        this.rules.push(ruleItem);
        this.id++;
    }
    onsubmit() {
        this.loggerService.log('Submit Event Triggered');
        this.loggerService.log(JSON.stringify(this.rules));
    }
    deleteRuleEventHandler(rule: RuleEntity) {

        this.rules = this.rules.filter((obj) => { return obj.id != rule.id });

    }
}