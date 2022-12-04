import { Component, OnInit } from '@angular/core';
import { Bank } from '../../domain/bank';
import {AppBreadcrumbService} from '../../../app.breadcrumb.service';

@Component({
  selector: 'app-bankdirectory',
  templateUrl: './bankdirectory.component.html',
  styleUrls: ['./bankdirectory.component.scss']
})
export class BankdirectoryComponent implements OnInit {

    banks: Bank[];

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Banks Directory', routerLink: ['/favorites/banksdirectory']}
        ]);
    }

    ngOnInit(): void {
    }

}
