export class Encounter {
  constructor(

    public id: number,
    public date: string,
    public colonist_id: number,
    public atype: string,
    public action: string

){}
}

export class NewColonist {
  constructor(

    public name: string,
    public job_id: string,
    public age: string


){}
}

interface Colonist {

   name: string;
    id: number;
    age: number;
    job: Job;


}

export class Job {
  constructor(

      public name: string,
      public description: string,
      public id: number
){}
}

export class Alien {
  constructor(

      public type: string,
      public submitted_by: string,
      public id: number,
      public description: string
){}
}
