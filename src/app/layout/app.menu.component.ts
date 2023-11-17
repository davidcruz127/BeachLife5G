import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Datos Usuarios',
                items: [
                    { label: 'Ocupación', icon: 'pi pi-fw pi-users', routerLink: ['/uikit/charts'] },
                    { label: 'Distribución', icon: 'pi pi-fw pi-map', routerLink: ['/uikit/media'] },
                ]
            },
            {
                label: 'Meteorología',
                items: [
                    { label: 'Viento', icon: 'pi pi-fw pi-chart-bar' },
                    { label: 'Temperatura', icon: 'pi pi-fw pi-chart-bar' },
                    { label: 'Nubes', icon: 'pi pi-fw pi-chart-bar'},
                    { label: 'Olas', icon: 'pi pi-fw pi-chart-bar'},
                    { label: 'Calidad del aire', icon: 'pi pi-fw pi-chart-bar' },
                ]
            }
        ];
    }
}
