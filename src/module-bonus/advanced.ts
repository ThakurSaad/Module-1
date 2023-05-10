interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

interface IUser2 {
  firstName: string;
  lastName: string;
}

interface IMethods {
  fullName(): string;
}

type model = Model<IUser2, IMethods>;

class User1 implements model {
  data: IUser2;
  methods: IMethods;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const monaLisa = new User1("Mona", "Lisa");
console.log(monaLisa.methods.fullName());
