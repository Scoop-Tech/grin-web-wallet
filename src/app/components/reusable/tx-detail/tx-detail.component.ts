import { Component, OnInit } from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {ActivatedRoute} from '@angular/router';
import {TxLogEntry} from '../../../model/tx-log-entry';

@Component({
  selector: 'app-tx-detail',
  templateUrl: './tx-detail.component.html',
  styleUrls: ['./tx-detail.component.css']
})
export class TxDetailComponent implements OnInit {

  tx: TxLogEntry;

  constructor(
    public walletService: WalletService,
    public util: UtilService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('Get TX Subscription');
    const id = this.route.snapshot.paramMap.get('id');
    this.getTx(+id);
  }

  getTx(id: number): void {
    this.walletService.getTxLog(id)
      .subscribe((tx) => {
        this.tx = tx;
      });
  }



}