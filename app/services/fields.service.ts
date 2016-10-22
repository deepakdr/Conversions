import { Injectable } from '@angular/core';
import { KeyValue } from '../models/key-value';
 
@Injectable()
export class FieldsService {
    getInputFields(): Promise<KeyValue[]> {
        let inputFields: KeyValue[] = [
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
    getInputFieldsForCondition(): Promise<KeyValue[]> {
        let inputFields: KeyValue[] = [
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
    getOutputFields(): Promise<KeyValue[]> {
        let outputFields: KeyValue[] = [
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