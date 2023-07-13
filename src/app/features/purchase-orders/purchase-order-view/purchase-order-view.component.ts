import {Component, OnInit} from '@angular/core';
import {PurchaseDto} from '../../../api/models/purchase-dto';
import {PurchaseResourceService} from '../../../api/services/purchase-resource.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
})
export class PurchaseOrderViewComponent implements OnInit {

  purchaseOrder: PurchaseDto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private purchaseService: PurchaseResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData(this.activatedRoute.snapshot.params.id);
  }

  fetchData(id: number) {
    this.purchaseService.getPurchase({id}).subscribe({
      next: (data) => {
        this.purchaseOrder = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
