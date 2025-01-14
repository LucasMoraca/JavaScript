function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`) // Corrigido de "dic" para "div"
    
    if (fano.value.length == 0 || Number(fano.value) > ano) { // Corrigido "ariaValueMax" para "value"
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        //var gênero = ``
        //var img = document.createElement(`img`)
        //img.setAttribute(`id`, `foto`)
        res.innerHTML = `Idade calculada: ${idade}`
        //if (fsex[0].checked){
        //  gênero  = `Homem
        //} else if(fsex[1].checked){
        //      gênero = `Mulher`
        //}
        //res.style.textAlign = `center`
        //res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}
