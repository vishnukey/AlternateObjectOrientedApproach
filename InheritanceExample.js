function new_person(name, age){
        const get_name = () => name
        const get_age = () => age
        const set_age = ([v]) => age = v

        const toString = () => `${name} is ${age} years old`

        return (msg, ...args) => {
                if (msg == "name") return get_name(args)
                else if (msg == "age") return get_age(args)
                else if (msg == "set-age!") return set_age(args)
                else if (msg == "->string") return toString(args)
                else console.log("I don't recognize that message")
        }
}

const p = new_person("John", 20)
console.log(p("->string"))

function new_employee(name, age, position){
        const parent = new_person(name, age)
        const get_position = () => position

        const toString = () => parent("->string") + ` and their job is ${position}`

        return (msg, ...args) => {
                if (msg == "position") return get_position(args)
                else if (msg == "->string") return toString(args)
                else return parent(msg, ...args)
        }
}

const e = new_employee("Sally", 21, "Programmer")
console.log(e("->string"))
console.log(e("position"))
console.log(e("age"))
const pack = (...args) => args
const unpack = (args) => args
const x = pack([1, 2, 3])
const [y] = pack([1, 2, 3])
console.log(x, y)
