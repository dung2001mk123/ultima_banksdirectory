import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../domain/bank';

@Injectable()
export class BankService {

    constructor(private http: HttpClient) { }

    getBanks() {
        return this.http.get<any>('assets/demo/data/banks.json')
            .toPromise()
            .then(res => res.data as Bank[])
            .then(data => data);
    }
}
