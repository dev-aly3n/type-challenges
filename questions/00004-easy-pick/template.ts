// answer:
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// explanation:

// the first T at the first line point to an object of types, like interfaces: 
// object of types
type x = {type1:number, type2:string};
interface y {type1:number; type2:string;};

// another keyword is keyof operator that gives us the key of an "object of types" as a union of strings
type m = keyof x; // it's equal to type m = "type1" | "type2";
type n = "type1" | "type2";
// here m and n are equal

// so (K extends keyof T) means: type K = "kye1" | "key2" | "key3" | ...
//  the next keyword is "in". "in" operator in ts acts like js "in" operator, so it means if this P value exist in K object return true
// and T[P] acts like js when we read a property from an object: obj["type1"]
// finally it check if the P exist on K object it will use it as a key and also assign its type from K object.  

// related urls:
// "in" operator: https://learntypescript.dev/07/l5-in-type-guard
// keyof operator: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html