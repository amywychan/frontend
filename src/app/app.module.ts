import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule, MatBadgeModule, MatSortModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatTabsModule, MatButtonToggleModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DestinationsComponent } from './components/destinations/destinations.component';


import { DestinationsService } from './destinations.service';

const routes: Routes = [
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destinations/Osaka', component: DestinationsComponent },
  { path: 'destinations/Kyoto', component: DestinationsComponent },
  { path: 'destinations/Tokyo', component: DestinationsComponent },
  { path: 'destinations/Sapporo', component: DestinationsComponent },
  { path: 'destinations/Fukuoka', component: DestinationsComponent },
  { path: '', redirectTo: 'destinations', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatSortModule,
    MatBadgeModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [DestinationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
