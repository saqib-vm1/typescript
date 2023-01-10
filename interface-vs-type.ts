// both 'interface' and 'type' are used to define object structures.

// interface
interface UserInterface {
    name: string
}

const userI: UserInterface = {
    name: 'xyz'
}

// type
type UserType = {
    name: string
}

const userT: UserType = {
    name: 'abc'
}

// ==== both can extend but differently

// interface
interface UserInterface2 extends UserInterface {
    age: number
}

const userI2: UserInterface2 = {
    name: 'xyz',
    age: 20
}

// type
type UserType2 = UserType & {
    age: number
}

const userT2: UserType2 = {
    name: 'abc',
    age: 20
}

// === difference between extending interface and inersecting type.

// interface
/*
    interface UserInterface3 extends UserInterface2 {
        age: string
    }

*/
//  duplicate property with different value type gives following error.
//  Interface 'UserInterface3' incorrectly extends interface 'UserInterface2'.
//  Types of property 'age' are incompatible.
//  Type 'string' is not assignable to type 'number'.



// type
type UserType3 = UserType2 & {
    age: string
};

// we can duplicate proprties with type throughg intersection
// but if we assign different type to duplicate property then
// the type is implicitly set to 'never' type...

/*
    const userT3: UserType3 = {
        name: 'abc',
        age: '20'
    }
*/

// the code above produces following error..
// Type 'string' is not assignable to type 'never'.



