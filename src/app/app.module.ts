import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './beach/components/notfound/notfound.component';
import { ProductService } from './beach/service/product.service';
import { CountryService } from './beach/service/country.service';
import { CustomerService } from './beach/service/customer.service';
import { EventService } from './beach/service/event.service';
import { IconService } from './beach/service/icon.service';
import { NodeService } from './beach/service/node.service';
import { PhotoService } from './beach/service/photo.service';
import { MapsModule } from './maps/maps.module';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        MapsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
