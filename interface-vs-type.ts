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

