import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserCreate } from './explore-container.interface';
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
  private user: UserCreate = {
    name: '',
    lastname: '',
    department: '',
    email: '',
    city: '',
    phone: '',
    description: ''
  };

  constructor(private service : ExploreContainerService, private router: Router) { }

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

 saveData(form:any){
  if (form.valid) {
    return this.service
      .createUser(this.user)
      .subscribe(
      data => {
        this.router.navigate(['tabs/tab3']);
      },
      error => console.log('error')
      );
  } else {
    console.log('error');
  }
 }

}
