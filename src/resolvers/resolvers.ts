import { Workout } from "../entities/workout";
import { Worksheet } from "../entities/worksheet";
import people from "../repositories/dataset"; //get all of the available data from our database.
const Resolvers = {
  Query: {
    getWorkout: () => new Workout(),
    getWorksheet: () => new Worksheet(),
  },
};
export default Resolvers;
