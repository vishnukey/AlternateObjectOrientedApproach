function make_complex(r, i){
        return (f) => f(r, i)
}
function real_part(complex){
        return complex((r, i) => r)
}
function imag_part(complex){
        return complex((r, i) => i)
}
function add_complex(c1, c2){
        return make_complex(
                real_part(c1) + real_part(c2),
                imag_part(c1) + imag_part(c2))
}
function complexToString(complex){
        return `${real_part(complex)} + ${imag_part(complex)}i`
}
console.log(
        complexToString(
                add_complex(
                        make_complex(3, 4),
                        make_complex(4, -10)
                )
        )
)
