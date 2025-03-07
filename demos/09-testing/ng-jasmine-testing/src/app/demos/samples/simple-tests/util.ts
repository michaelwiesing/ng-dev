import { Injectable } from '@angular/core';
import { Voucher } from './voucher.model';

@Injectable({
  providedIn: 'root',
})
export class Util {
  constructor() {}

  greet(): string {
    return 'Hello World!';
  }

  validate(voucher: Voucher) {
    let detailSumOk: boolean = false;
    if (voucher.Details != null) {
      let sumD = 0;
      for (const vd of voucher.Details) {
        sumD += vd.Amount;
      }
      detailSumOk = sumD == voucher.Amount;
    }
    return detailSumOk;
  }

  log(msg: string) {
    console.log(`logging: ${msg}`);
  }
}
