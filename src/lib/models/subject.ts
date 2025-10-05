export default class Subject {
  id: string;
  name: string;
  class_id: string;
  created_at: Date;

  constructor() {
    this.id = "";
    this.name = "";
    this.class_id = "";
    this.created_at = new Date();
  }

  to_json(): object {
    return {
      name: this.name,
      class_id: this.class_id,
      created_at: this.created_at,
    };
  }
}
