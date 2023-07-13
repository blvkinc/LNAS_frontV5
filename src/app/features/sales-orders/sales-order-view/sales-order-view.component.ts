import {Component, OnInit} from '@angular/core';
import {OrderDto} from '../../../api/models/order-dto';
import {ActivatedRoute} from '@angular/router';
import {OrderResourceService} from '../../../api/services/order-resource.service';

@Component({
  selector: 'app-sales-order-view',
  templateUrl: './sales-order-view.component.html',
})
export class SalesOrderViewComponent implements OnInit {
  salesOrder: OrderDto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: OrderResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData(this.activatedRoute.snapshot.params.id);
  }

  fetchData(id: number) {
    this.service.getOrder({id}).subscribe({
      next: (data) => {
        this.salesOrder = data;
        console.log(data)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
