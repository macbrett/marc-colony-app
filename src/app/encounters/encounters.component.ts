import { Component, OnInit } from '@angular/core';

import { Alien } from '../models';
import EncountersService from '../services/encounters.service';
import { Encounter, NewEncounter } from '../models';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers: [EncountersService]
})
export class EncountersComponent implements OnInit {

  encounter: Encounter;
  marsEncounters: Encounter[];


  constructor(encounterService: EncountersService) {

 

    encounterService.getEncounters().subscribe((encounters) => {
  this.marsEncounters = encounters;
  })

}

  ngOnInit() {


  }


}


