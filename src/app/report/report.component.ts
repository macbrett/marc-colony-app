import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { Alien, NewEncounter } from '../models';
import AliensService from '../services/aliens.service';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import EncountersService from '../services/encounters.service';
import {cantBe} from '../shared/validators';
import {Router} from '@angular/router';
import { HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensService, EncountersService],
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
        animate('0.8s ease-in')
      ]),
      transition(':leave', [
        animate('1.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
 

})
export class ReportComponent implements OnInit {

 aliensList:Alien[];
  reportForm: FormGroup;
  NO_ALIEN_SELECTED = '(none)'
  


  constructor(private aliensService: AliensService,
  private ecountersService: EncountersService,private router: Router) {

 aliensService.getAliens().subscribe((aliens) => {
  this.aliensList = aliens;
  });

}

  ngOnInit() {

this.reportForm = new FormGroup({atype: new FormControl(this.NO_ALIEN_SELECTED,[cantBe(this.NO_ALIEN_SELECTED)]),
action: new FormControl('', [Validators.required, Validators.maxLength(450)])
});
  }

private getDate(){
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

onSubmit(event) {

  event.preventDefault();
  const date = this.getDate();
  const atype = this.reportForm.get('atype').value;
  const action = this.reportForm.get('action').value;
  const colonist_id = localStorage.getItem('colonist_id');
  const encounter  = new NewEncounter(date, colonist_id, atype, action);

this.ecountersService.submitEncounter(encounter).subscribe(()=>{
  console.log('success')
  this.router.navigate(['/encounters']);
});

}
}
