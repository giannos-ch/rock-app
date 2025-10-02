export default class Klass {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  to_json(): object {
    return {
      name: this.name,
    };
  }
}
