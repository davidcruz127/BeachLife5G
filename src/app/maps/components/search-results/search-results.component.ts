import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor(private placesService: PlacesService,
              private mapService: MapService
             ){}

  get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  get places(){
    return this.placesService.places;
  }

  flyTo(place: Feature){

    this.selectedId = place.id;

    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }

  getDireccions(place: Feature){

    if(!this.placesService.isUserLocationReady) throw Error('No hay userLication');

    // Borrar anteiores
    this.placesService.deletePlaces();


    const start = this.placesService.userLocation!;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints(start, end);
  }

}
