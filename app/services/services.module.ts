//TODO: Find the right way to group multiple services 
// into a module
import { NgModule } from '@angular/core';
import { FieldsService } from './fields.service';


@NgModule({
    exports: [FieldsService], 
})
export class ServicesModule { }
 