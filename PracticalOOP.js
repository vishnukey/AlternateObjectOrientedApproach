function new_customer(name){
        const get_name = () => name

        return (msg, ...args) => {
                if (msg == "name") return get_name(args)
                else throw "Message not found"
        }
}

function new_bankAccount(balance, customer){
        const get_balance  = () => balance
        const get_customer = () => customer

        const deposit  = ([amt]) => balance += amt
        const withdraw = ([amt]) => balance -= amt

        return (msg, ...args) => {
                if      (msg == "balance")  return get_balance(args)
                else if (msg == "deposit")  return depoist(args)
                else if (msg == "withdraw") return withdraw(args)
                else if (msg == "customer") return get_customer(args)
                else throw "Message not found"
        }
}

function new_savingsAccount(interest, balance, customer){
        const parent = new_bankAccount(balance, customer)

        const get_interest = () => interest
        const apply_interest = () => parent("depoist", parent("balance") * interest)

        return (msg, ...args) => {
                if (msg == "interest") return get_interest(args)
                else return parent(msg, ...args)
        }
}
