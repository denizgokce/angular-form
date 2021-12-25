export class FormModel {
  constructor(init?: Partial<FormModel>) {
    Object.assign(this, init);
  }

  name: string = 'Deniz Gokce';
  username: string = 'denizgokce@gmail.com';
  country: string = '';
  postCode: string = 'asdasdd';
  movie: any;


  hasMovie = (): boolean => {
    return this.movie !== undefined && this.movie !== null;
  }
  getPoster = (): string => {
    return this.movie.Poster;
  }
  hasPoster = (): boolean => {
    return this.hasMovie() && this.movie.Poster && this.movie.Poster !== 'N/A';
  }

  getCountry = (): string => {
    switch (this.country){
      case 'ie': return 'Ireland';
      case 'uk': return 'United Kingdom';
      default: return  'Nowhere';
    }
  }
}
