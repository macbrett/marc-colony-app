



export class NewEncounter {
  constructor(
    public date: string,
    public colonist_id: string,
    public atype: string,
    public action: string

){}
}

export interface Encounter {
   id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;
    

}

export class NewColonist {
  constructor(

    public name: string,
    public job_id: string,
    public age: string


){}
}

export interface Colonist {

   name: string;
    id: number;
    age: number;
    job: Job;


}

export interface Job {


      name: string;
       description: string;
       id: string;

}

export interface Alien {


     type: string,
      submitted_by: string,
     id: number,
      description: string

}
