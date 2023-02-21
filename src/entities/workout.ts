import { TypeReps, TypeTime, TypeWeights } from "../graphql/generated/graphql";

export type Workout = {
  id: string;
  name: string;
  typeReps: TypeReps;
  sets?: number;
  reps?: Array<Number>;
  typeWeights?: TypeWeights;
  weights?: Array<Number>;
  typeTime?: TypeTime;
  time?: Number;
  typeRest?: TypeTime;
  rest?: Number;
  gifName?: string;
};
