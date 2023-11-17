import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MapViewZoneComponent } from './components/map-view-zone/map-view-zone.component';




@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    AngularLogoComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchResultsComponent,
    MapViewZoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent,
    MapViewZoneComponent
  ]
})
export class MapsModule { }
