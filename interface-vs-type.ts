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