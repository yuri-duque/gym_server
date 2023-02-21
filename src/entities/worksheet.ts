import { Workout } from "./workout";

export type Worksheets = {
  id: number;
  name: string;
  workouts: Array<Workout>;
};
