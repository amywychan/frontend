import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatTabChangeEvent } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



import { Destinations } from '../../destinations.model';
import { DestinationsService } from '../../destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})


export class DestinationsComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  id: String;
  likeCount: Number;
  destinations: Destinations[];
  selectedPrefecture: String;
  MatTabChangeEvent: Event;
  tabsData: string[] = ["Tokyo", "Kyoto", "Osaka", "Sapporo", "Fukuoka"];
  selected = new FormControl(0);

  displayedColumns: string[] = ['name','imagePath','description','marks','link','likeCount','actions'];

  constructor(private destinationsService: DestinationsService, 
              private router: Router) { 
                this.destinations
  };

ngOnInit(): void {
  this.getDestinationsByPref("Tokyo");
  }

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
    console.log(this.selected);
    this.getDestinationsByPref(this.tabsData[event.index]);

  };

  like(pre, id){
    this.destinationsService
    .likeDestinations(id).subscribe((data: Destinations[]) => {
      this.destinations = data;
      this.getDestinationsByPref(pre);
    })
  }

  likeDestinations(id){
  this.destinationsService
  .likeDestinations(id).subscribe(() => {
     })
  console.log('Liked ...');
  console.log(id);
}

  fetchDestinations() {
    this.destinationsService
      .getDestinations()                                                                                                                                                                                                                                                                                                                                                   
      .subscribe((data: Destinations[]) => {
        this.destinations = data;
        console.log('Data requested ...');
        console.log(this.destinations);
      });
  }

getDestinationsByPref(value){
  this.destinationsService
  .getDestinationsByPref(value)
  .subscribe((data: Destinations[]) => {
      this.destinations = data.filter(a=>a.prefectures==value);
      console.log('getDestinationsByPref ...');
      console.log(value);
    });
}
}