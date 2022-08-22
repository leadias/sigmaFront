import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExploreContainerService } from './explore-container.service';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,HttpClientModule],
  declarations: [ExploreContainerComponent],
  providers: [ExploreContainerService],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
