import people from "../repositories/dataset"; //get all of the available data from our database.
const Resolvers = {
  Query: {
    getAllPeople: () => people, //if the user runs the getAllPeople command
    //if the user runs the getPerson command:
    getPerson: (_: any, args: any) => {
      console.log(args);
      //get the object that contains the specified ID.
      return people.find((person) => person.id === args.id);
    },
  },
};
export default Resolvers;
