import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RuleEntity } from './models/rule-entity';
import { ConditionActionService } from './services/condition-action.service';
import { KeyValue } from './models/key-value';
import { LoggerService } from './services/logger.service';
import { FieldsService } from './services/fields.service';

@Component({
    moduleId: module.id,
    selector: 'rule-detail',
    templateUrl: 'rule-detail.component.html'
})
export class RuleDetailComponent implements OnInit {
 
    @Input()
    rule: RuleEntity;
    conditions: KeyValue[];
    actions: KeyValue[];
    inputFields: KeyValue[];
    inputFieldsForCondition: KeyValue[];
    outputFields:KeyValue[];
    isPrepForDelete: boolean = false;

    @Output()
    ondeleteRuleEvent = new EventEmitter<RuleEntity>();

    constructor(private conditionActionService: ConditionActionService, 
                private loggerService: LoggerService,
                private fieldsService:FieldsService) {

    }
    ngOnInit() {
        this.conditionActionService.getActions().then(data => this.actions = data);
        this.conditionActionService.getConditions().then(data => this.conditions = data);
        this.fieldsService.getInputFields().then(data => this.inputFields=data);
        this.fieldsService.getInputFieldsForCondition().then(data => this.inputFieldsForCondition=data);
        this.fieldsService.getOutputFields().then(data => this.outputFields=data);
        
    }
    updateAction(action) {
        //this.loggerService.log(action);
        //this.rule.outputAction = action;
    }
    deleteRule(rule: RuleEntity) {
        this.isPrepForDelete = true;
    }
    confirmDelete(rule: RuleEntity) {
        this.loggerService.log(rule.id.toString());
        this.ondeleteRuleEvent.emit(rule);
    }
}