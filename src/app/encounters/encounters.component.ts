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
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
 
})
export class EncountersComponent implements OnInit {
@HostBinding('@routeAnimation') get routeAnimation() {
    return true;}
      @HostBinding('style.display') get display() {
    return 'block';
  }
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


