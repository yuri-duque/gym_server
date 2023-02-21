import { Workout } from "./workout";

export class Worksheet {
  id!: number;
  name!: string;
  workouts!: Array<Workout>;
}
