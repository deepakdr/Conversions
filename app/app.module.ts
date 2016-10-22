import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RulesComponent } from './rules.component';
import { RuleDetailComponent } from './rule-detail.component';
import { FieldsComponent } from './fields.component';
import { FieldDetailComponent } from './field-detail.component';
import { HomeComponent } from './home.component';


import { LoggerService } from './services/logger.service';
import { ConditionActionService } from './services/condition-action.service';
import { FieldsService } from './services/fields.service';

@NgModule({
    id: 'RootModule',
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(
            [
                { path: 'home', component: HomeComponent },                
                { path: 'rules/:mode', component: RulesComponent },
                { path: 'fields/:mode', component: FieldsComponent },
                { path: '', redirectTo: '/home', pathMatch: 'full' }
            ]
        )
    ],
    declarations: [AppComponent, RulesComponent,
        RuleDetailComponent,  FieldsComponent, FieldDetailComponent,HomeComponent],
    bootstrap: [AppComponent],
    providers: [LoggerService, ConditionActionService, FieldsService]

})
export class AppModule {

} 