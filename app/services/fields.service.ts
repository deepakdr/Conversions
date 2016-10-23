import { Injectable } from '@angular/core';
 
@Injectable()
export class FieldsService {
    getInputFields(): Promise<any[]> {
        let inputFields: any[] = [
            {
                id: "",
                value: "-Input Field-"
            },
            {
                id: "Account Number",
                value: "Account Number"
            },
            {
                id: "Address",
                value: "Address"
            },
            {
                id: "First Name",
                value: "First Name"
            }
        ];
        return Promise.resolve(inputFields);

    }
    getInputFieldsForCondition(): Promise<any[]> {
        let inputFields: any[] = [
            {
                id: "Same",
                value: "Same"
            },
            {
                id: "Account Number",
                value: "Account Number"
            },
            {
                id: "Address",
                value: "Address"
            },
            {
                id: "First Name",
                value: "First Name"
            }
        ];
        return Promise.resolve(inputFields);

    }
    getOutputFields(): Promise<any[]> {
        let outputFields: any[] = [
            {
                id: "",
                value: "-Output Field-"
            },
            {
                id: "Account Number",
                value: "Account Number"
            },
            {
                id: "Address",
                value: "Address"
            },
            {
                id: "First Name",
                value: "First Name"
            }
        ];
        return Promise.resolve(outputFields);
    }
}