import {FirstArgument, IsTypeEqual, typeAssert} from '../type-assertions';
import {logPerson, Person, persons} from './index3';


typeAssert<
    IsTypeEqual<
        Person,
        {name: string; age: number} & ({occupation: string} | {role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({occupation: string} | {role: string}))[]
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({occupation: string} | {role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
    >
>();
