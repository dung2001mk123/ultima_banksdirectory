import { Component, OnInit } from '@angular/core';
import { Bank } from '../../domain/bank';
import { BankService } from '../../../demo/service/bankservice';
import {AppBreadcrumbService} from '../../../app.breadcrumb.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-bankdirectory',
  templateUrl: './bankdirectory.component.html',
  styleUrls: ['./bankdirectory.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class BankdirectoryComponent implements OnInit {

    banks: Bank[];
    bank: Bank;
    selectedBanks: Bank[];
    bankDialog: boolean;
    submitted: boolean;
    cols: any[];

    constructor(private bankService: BankService, private messageService: MessageService,
                private confirmationService: ConfirmationService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Banks Directory', routerLink: ['/favorites/banksdirectory']}
        ]);
    }
    ngOnInit(): void {
        this.bankService.getBanks().then(data => this.banks = data);
    }
    hideDialog() {
        this.bankDialog = false;
        this.submitted = false;
    }
    saveBank() {
        if (this.bank.id.localeCompare('') && this.bank.name.localeCompare('')) {
            if (this.bank.createBy.localeCompare('') && this.bank.createDate.localeCompare('')) {
                this.submitted = true;
                this.banks.push(this.bank);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Created',
                    life: 3000
                });
                this.banks = [...this.banks];
                this.bankDialog = false;
                this.bank = {};
            }
        }
    }
    createNew() {
        this.bank = {};
        this.submitted = false;
        this.bankDialog = true;
    }
    deleteSelected() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.banks = this.banks.filter(val => !this.selectedBanks.includes(val));
                this.selectedBanks = null;
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Deleted', life: 3000});
            }
        });
    }
}
