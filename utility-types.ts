// TypeScritpt provides several utility types to facilitate common type transformations. 
// These utilities are available globally.

// ####   ReturnType<Type>
// Constructs a type consisting of the return type of function Type.

declare function f1(): {a: number, b:string}
type ReturnedType1 = ReturnType<typeof f1>;
// type ReturnedType1 = {a: number; b: string;}

type ReturnedType2 = ReturnType<() => string>
// type ReturnedType2 = string;



// ####  Awaited<Type>
type A = Awaited<Promise<string>>;
const str: A = 'abc';




// ####   Partial<Type>
// Constructs a type with all properties of Type set to optional. 

interface Todo {
    title: string,
    description: string
}

const fieldsToUpdate: Partial<Todo> = {
    description: 'clear clutter'
}





// ####  Required <Type>
// Constructs a type consisting of all properties of Type set to required. 
// The opposite of Partial.

interface Props {
    a?: number,
    b?: string
}

const obj1: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 }
// error: Property 'b' is missing in type '{ a: number; }' 
//        but required in type 'Required<Props>'.






// ####   Readonly<Type>
// Constructs a type with all properties of Type set to readonly.

interface Ro {
    title: string
}

const roObj: Readonly<Ro> = {
    title: 'Readonly property'
}

// roObj.title = 'change this'
// error: Cannot assign to 'title' because it is a read-only property.




// ####   Record<Keys, Type>
// Constructs an object type whose property keys are Keys and
// whose property values are Type. This utility can be used to 
// map the properties of a type to another type.

interface CatInfo {
    age: number,
    breed: string
}

type CatName = "miffy" | "boris";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" }
}




// ####   Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys 
// (string literal or union of string literals) from Type.

interface PickTodo {
    a: number,
    b: string,
    c: number
}

type PickedTodo = Pick<PickTodo, "a" | "b">

const pTodo: PickedTodo = {
    a: 2,
    b: 'b'
}




// ####  Omit<Type, Keys>
// Constructs a type by picking all properties from Type and 
// then removing Keys (string literal or union of string literals).

interface OmitTodo {
    title: string,
    desc: string,
    completed: boolean
}

type OmittedTodo = Omit<OmitTodo, "completed">

const objOmitted: OmittedTodo = {
    title: 'title',
    desc: 'description'
}






// ####   Exclude<UnionType, ExcludeMembers>
// Constructs a type by excluding from UnionType all union 
// members that are assignable to ExcludedMembers.

type ExcldedType1 = Exclude<"a" | "b" | "c", "a" | "c">
// type ExcludedType1 = "b";

type ExcldedType2 = Exclude<string | number | boolean, boolean>
// type ExcludedType2 = string | number;





// ####   Extract<Type, Union>
// Constructs a type by extracting from 
// "Type" all union members that are assignable to "Union".

type ExtractedType = Extract<"a" | "b" | "c", "a" | "f">;
// type ExtractedType = "a"






// #### NonNullable<Type>
// Constructs a type by excluding 'null' and 'undefined' from 'Type'.

type NNType = NonNullable<string | number | undefined>;
// type NNType = string | number;



// #### ConstructorParameters<Type>
// Constructs a tuple or array type from the types of a 
// constructor function type. It produces a tuple type with 
// all the parameter types (or the type never if Type is not 
// a function).

type ConsParamType = ConstructorParameters<ErrorConstructor>;
// type ConsParamType = [message?: string | undefined;