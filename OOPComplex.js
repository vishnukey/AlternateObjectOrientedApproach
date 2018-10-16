function new_complex(r, i){
        const real_part = ()  => r
        const imag_part = ()  => i
        const set_real  = ([v]) => r = v

        const add_complex = ([c2]) => new_complex(
                r + c2("real"),
                i + c2("imag")
        )

        const toString = () => `${r} + ${i}i`

        return (msg, ...args) => {
                if (msg == "real")          return real_part(args)
                else if (msg == "imag")     return imag_part(args)
                else if (msg == "set-real") return set_real(args)
                else if (msg == "add")      return add_complex(args)
                else if (msg == "->string") return toString(args)
                else console.log("I don't understand that message")
        }
}
const c1 = new_complex(3, 4)
console.log(c1("->string"))
c1("set-real", 5)
console.log(c1("->string"))
console.log(c1("real"))
const c2 = new_complex(4, -10)
console.log(c1("add", c2)("->string"))
