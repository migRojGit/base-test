export class Root {
    constructor(
      public info: Info,
      public results: Result[]
    ) {}
  }
  
  export class Info {
    constructor(
      public count: number,
      public pages: number,
      public next: string,
      public prev: any
    ) {}
  }
  
  export class Result {
    constructor(
      public id: number,
      public name: string,
      public type: string,
      public dimension: string,
      public residents: string[],
      public url: string,
      public created: string
    ) {}
  }