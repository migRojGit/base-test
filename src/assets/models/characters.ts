export class Result {
    constructor(
      public id: number,
      public name: string,
      public status: string,
      public species: string,
      public type: string,
      public gender: string,
      public origin: Origin,
      public location: Location,
      public image: string,
      public episode: string[],
      public url: string,
      public created: string
    ) {}
  }
  
  export class Origin {
    constructor(
      public name: string,
      public url: string
    ) {}
  }
  
  export class Location {
    constructor(
      public name: string,
      public url: string
    ) {}
  }

  export class Root{
    constructor(
      public info: Info[],
      public results: Result[],  
    ){}
  }

  export class Info { 
    constructor(
        public count: number,
        public pages: number,
        public next: string,
        public prev: any,
    ){}
}   
