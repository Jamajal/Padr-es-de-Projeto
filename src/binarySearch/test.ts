interface UserI<T>{
    name: string,
    fruits: T
}

const user : UserI<string> = {
    name: "Leandro",
    fruits: "banana"
}

const user2 : UserI<string[]> = {
    name: "Leandro",
    fruits: ["apple", "orange", "grape"]
}