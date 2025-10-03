export default class Student {
  id: string;
  name: string;
  telephone: string;

  constructor(id: string, name: string, telephone: string) {
    this.id = id;
    this.name = name;
    this.telephone = telephone;
  }

  to_json(): object {
    return {
      name: this.name,
      telephone: this.telephone,
    };
  }
}
