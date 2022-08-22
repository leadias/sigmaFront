import { Component, OnInit, Input } from '@angular/core';
import { ExploreContainerService } from './explore-container.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  departamentos:any;
  ciudades:any;

  constructor(private service : ExploreContainerService) { }

  ngOnInit() {
    this.getDepartamentos();
    this.getCiudades();
  }

  getDepartamentos(){
    this.service.get()
    .subscribe(name => { this.departamentos = name
  });
 }

 getCiudades(){
  this.service.city()
  .subscribe(name => { this.ciudades = name
});
}

}
