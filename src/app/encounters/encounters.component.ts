import { Component, OnInit } from '@angular/core';

import { Alien } from '../models';
import EncountersService from '../services/encounters.service';
import { Encounter, NewEncounter } from '../models';
import { HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService],
    animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.1s ease-in')
      ]),
      transition(':leave', [
        animate('0.8s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
 
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


