export class Model{
  user;
  items;

  constructor(){
    this.user = 'Marry'
    this.items = [

      new TodoItem("Spor",false),
      new TodoItem("Kitap Okumak",true),
      new TodoItem("Kahvaltı",false),
      new TodoItem("Sinema",false),
    ];
  }

}


export class TodoItem{
  description;
  action;

  constructor(description: string, action: boolean){

    this.description = description;
    this.action = action;

  }
}
