// Exercise #1
payments = (basePayMent)  => {
    let fee = 3
    let interestFee = 0.01
    return  basePayMent + fee + (basePayMent * interestFee)
}
console.log(payments(50))

// Exercise #2

returnsAge = (birthYear) => {
    const now = new Date().getFullYear()
    return age = now - birthYear;
}

const data = {
    name1 : 'Hady',
    name2 : 'Addy',
    name3 : 'Judy',
    age1 : returnsAge(1993),
    age2 : returnsAge(2000),
    age3 : returnsAge(2010)
}
const {name1, name2, name3,age1, age2, age3 } = data;


output = () =>{
    console.log(`Welcome ${name1} you are ${age1}. Welcome ${name2} you are ${age2}. Welcome ${name3} you are ${age3}`)
}
output()

