import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { ZonesData } from '../../interfaces/zonesData';

@Component({
  selector: 'app-map-view-zone',
  templateUrl: './map-view-zone.component.html',
  styleUrls: ['./map-view-zone.component.css']
})
export class MapViewZoneComponent {

    @Input() zones: ZonesData;


    @ViewChild('mapDiv')
    mapDivElement!: ElementRef;

    constructor( private placesServices: PlacesService,
                 private mapService: MapService){}

    ngAfterViewInit(): void
    {

        // Token Acceso
        mapboxgl.accessToken = environment.apiKey;

        const map = new mapboxgl.Map({
            container: this.mapDivElement.nativeElement, // container ID
            style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
            center: [-15.44200, 28.13950],
            zoom: 14.5,
            bearing: 130,

        });

        this.addZonaA(map);
        this.addZoneB(map);
        this.addZonaC(map);
    }


    // ZONA A
    addZonaA(map){

        map.on('load', () => {

            // Definición ZONA A
            map.addSource('ZoneA', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        "coordinates": [
                            [
                            [
                                -15.440948,
                                28.135718
                            ],
                            [
                                -15.440493,
                                28.135377
                            ],
                            [
                                -15.441067,
                                28.13433
                            ],
                            [
                                -15.442099,
                                28.133459
                            ],
                            [
                                -15.444202,
                                28.131653
                            ],
                            [
                                -15.444694,
                                28.131246
                            ],
                            [
                                -15.446725,
                                28.130429
                            ],
                            [
                                -15.448216,
                                28.13048
                            ],
                            [
                                -15.449179,
                                28.130805
                            ],
                            [
                                -15.449066,
                                28.131388
                            ],
                            [
                                -15.447708,
                                28.131339
                            ],
                            [
                                -15.446187,
                                28.13198
                            ],
                            [
                                -15.443671,
                                28.133558
                            ],
                            [
                                -15.442265,
                                28.13444
                            ],
                            [
                                -15.441226,
                                28.135967
                            ],
                            [
                                -15.440948,
                                28.135718
                            ]
                            ]
                        ]
                    }
                }
            });

            // Add a new layer to visualize the polygon.
            map.addLayer({
                'id': 'ZoneA',
                'type': 'fill',
                'source': 'ZoneA', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': this.getColor(this.zones.zone_A), // blue color fill
                    'fill-opacity': 0.5
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'ZoneA',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 2
                }
            });
        });
    }

    // ZONA B
    addZoneB(map){

        map.on('load', () => {

            // Definición ZONA B
            map.addSource('ZoneB', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        "coordinates": [
                            [
                              [
                                -15.436814,
                                28.139976
                              ],
                              [
                                -15.436263,
                                28.139922
                              ],
                              [
                                -15.435892,
                                28.140074
                              ],
                              [
                                -15.435872,
                                28.140584
                              ],
                              [
                                -15.434567,
                                28.141803
                              ],
                              [
                                -15.431495,
                                28.144397
                              ],
                              [
                                -15.430931,
                                28.145219
                              ],
                              [
                                -15.430428,
                                28.146648
                              ],
                              [
                                -15.430434,
                                28.147341
                              ],
                              [
                                -15.43083,
                                28.148228
                              ],
                              [
                                -15.431381,
                                28.148743
                              ],
                              [
                                -15.432481,
                                28.148228
                              ],
                              [
                                -15.431703,
                                28.147534
                              ],
                              [
                                -15.431752,
                                28.146651
                              ],
                              [
                                -15.432432,
                                28.145437
                              ],
                              [
                                -15.433258,
                                28.144531
                              ],
                              [
                                -15.43429,
                                28.143682
                              ],
                              [
                                -15.43582,
                                28.142004
                              ],
                              [
                                -15.436452,
                                28.140763
                              ],
                              [
                                -15.436814,
                                28.139976
                              ]
                            ]
                          ]
                    }
                }
            });

            // Add a new layer to visualize the polygon.
            map.addLayer({
                'id': 'ZoneB',
                'type': 'fill',
                'source': 'ZoneB', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': this.getColor(this.zones.zone_B), // blue color fill
                    'fill-opacity': 0.5
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'ZoneB_outline',
                'type': 'line',
                'source': 'ZoneB',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 2
                }
            });
        });
    }

    // ZONA C
    addZonaC(map){

        map.on('load', () => {

            // Definición ZONA B
            map.addSource('ZonaC', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        "coordinates": [
                            [
                              [
                                -15.441144,
                                28.135995
                              ],
                              [
                                -15.440483,
                                28.135466
                              ],
                              [
                                -15.440285,
                                28.135696
                              ],
                              [
                                -15.437999,
                                28.13682
                              ],
                              [
                                -15.437204,
                                28.137634
                              ],
                              [
                                -15.436875,
                                28.138383
                              ],
                              [
                                -15.436443,
                                28.139812
                              ],
                              [
                                -15.43688,
                                28.139894
                              ],
                              [
                                -15.437154,
                                28.139406
                              ],
                              [
                                -15.437364,
                                28.138492
                              ],
                              [
                                -15.438626,
                                28.137313
                              ],
                              [
                                -15.44005,
                                28.136464
                              ],
                              [
                                -15.441144,
                                28.135995
                              ]
                            ]
                          ]
                    }
                }
            });

            // Add a new layer to visualize the polygon.
            map.addLayer({
                'id': 'ZonaC',
                'type': 'fill',
                'source': 'ZonaC', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': this.getColor(this.zones.zone_C), // blue color fill
                    'fill-opacity': 0.5
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'ZonaC_outline',
                'type': 'line',
                'source': 'ZonaC',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 2
                }
            });
        });
    }

    getColor(level: number):string
    {
        console.log(level);
        switch(level) {
            case 1: {
               return '#7ED958';
               break;
            }
            case 3: {
            return '#FF1717';
               break;
            }
            default: {
               return '#EBCC52';
               break;
            }
        }
    }
}
