import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import mapboxgl, { LngLat, Marker, Popup } from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {


  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor( private placesServices: PlacesService,
               private mapService: MapService
             ){}

  ngAfterViewInit(): void {

    if ( !this.placesServices.userLocation) throw Error('No hay placesServices.userLocation)');

    // Token Acceso
    mapboxgl.accessToken = environment.apiKey;

    // Estas opciones controlan la posición de la cámara después de la animación.
    const start = {
        center: [80, 36],
        zoom: 1,
        pitch: 0,
        bearing: 0
        };

    const end = {
        center: [-15.42785, 28.14093],
        zoom: 14.5,
        bearing: 72.1,
        pitch: 73
        };

    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
      //style: 'mapbox://styles/davidcruz127/clozw54gp016s01pbgux8fhsl',
      center: [-15.42785, 28.14093],
      zoom: 14,
      bearing: 190,
      pitch: 20

    });

    map.on('style.load', () => {
        // Custom atmosphere styling
        map.setFog({
        'color': 'rgb(240, 247, 249)', // Pink fog / lower atmosphere
        'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
        'horizon-blend': 0.3 // Exaggerate atmosphere (default is .1)
        });

        map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.terrain-rgb'
        });

        map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
        });
    });


    // TODO: Pendiente animación lento como cammello
    map.flyTo({
        center: [-15.42785, 28.14093],
        zoom: 14.9,
        bearing: 80,
        pitch: 78,
        duration: 8000, // Animate over 12 seconds
        essential: true // This animation is considered essential with
        //respect to prefers-reduced-motion
        });

    // Definimos PopUp
    /*
    const popup = new Popup()
      .setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    // Creamos Marcador y lo añadimos al mapa
    new Marker({color: 'red'})
      .setLngLat( this.placesServices.userLocation)
      .setPopup(popup)
      .addTo(map)

    this.mapService.setMap(map);
    */
  }

}
