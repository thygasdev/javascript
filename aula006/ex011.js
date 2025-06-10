var idade = 65
console.log(`voce tem :`)
if (idade < 16){
    console.log (`com ${idade} nao vota`)
} else if (idade < 18 || idade > 64){
    console.log (`${idade} e vota opcional`)
} else {
    console.log (`${idade} e vota obrigatorio`)
}
