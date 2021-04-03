export class Patterns {


  baseUrl: string = 'http://localhost:8080/api';
  // baseUrl: string = 'https://aticode.pl:8444/api';
  login: string = '^[a-zA-Z0-9_@.-]{3,40}$';
  password: string = '^.{4,25}$';
  name: string = '^[^`!#$%\^*+={\\[\\]}|\\\\:"\';<>]{2,25}$';
  smalName: string = '^[^`!#$%\^*+={\\[\\]}|\\\\:"\';<>]{1,10}$';
  smalNameFromZero: string = '^[^`!#$%\^*+={\\[\\]}|\\\\:"\';<>]{0,10}$';
  largeName: string = '^[^`!#$%\^*+={\\[\\]}|\\\\:"\';<>]{2,75}$';
}
