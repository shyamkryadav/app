import { Component } from '@angular/core';
import { ParentAccountServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [ServiceProxyModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
})
export class HomeSectionComponent {
  constructor(private _server: ParentAccountServiceProxy) {}

  ngOnInit(): void {
    this._server.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
