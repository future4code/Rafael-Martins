
const calc = process.argv[2]

const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

if(calc === "add"){

    console.log(`A soma dos Números é ${n1 + n2}`)
}else if (calc === "sub"){

    console.log(`A subtração dos Números é ${n1 - n2}`)
}else if (calc === "mult"){

    console.log(`A multiplicação dos Números é ${n1 * n2}`)
}else if (calc === "div"){

    console.log(`A divisão dos Números é ${n1 / n2}`)
}
