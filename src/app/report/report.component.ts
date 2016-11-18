import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { Alien, NewEncounter } from '../models';
import AliensService from '../services/aliens.service';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import EncountersService from '../services/encounters.service';
import {cantBe} from '../shared/validators.ts';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService, EncountersService]

})
export class ReportComponent implements OnInit {

 aliensList:Alien[];
  reportForm: FormGroup;
  NO_ALIEN_SELECTED = '(none)'
  


  constructor(private aliensService: AliensService,
  private ecountersService: EncountersService) {

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
console.log('it works')
  event.preventDefault();
  const date = this.getDate();
  const atype = this.reportForm.get('atype').value;
  const action = this.reportForm.get('action').value;
  const encounter  = new NewEncounter(date, '4', atype, action)

this.ecountersService.submitEncounter(encounter).subscribe(()=>{
  console.log('success')
});

}
}
