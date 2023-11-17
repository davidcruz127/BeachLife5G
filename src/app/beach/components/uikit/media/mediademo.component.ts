import { Component, OnInit } from '@angular/core';
import { ZonesData } from 'src/app/maps/interfaces/zonesData';

@Component({
    templateUrl: './mediademo.component.html'
})
export class MediaDemoComponent implements OnInit {

    stateOptions: any[] =
    [{label: 'Baja', value: 1}, {label: 'Media', value:2},  {label: 'Alta', value:3}];

    zone_A: number;
    zone_B: number;
    zone_C: number;

    zonesData: ZonesData = {
        zone_A: 1,
        zone_B: 2,
        zone_C: 3

    }


    constructor() {

    }
    ngOnInit(): void {
        this.zone_A = 1;
        this.zone_B =  2;
        this.zone_C = 3;
    }

    updateData()
    {
        console.log('here');
        this.zonesData.zone_A = this.zone_A ;
        this.zonesData.zone_B = this.zone_B ;
        this.zonesData.zone_C = this.zone_C ;
    }


}
