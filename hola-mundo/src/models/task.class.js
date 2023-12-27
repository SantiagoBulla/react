import { LEVELS } from "./levels.enum";

export class Task {
    //conjunto de datos que seran usados como props
    name = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}