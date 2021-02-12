function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //var genero = sexo[0].checked ? 'Masculino':'Femenino'
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade<10){
                img.setAttribute('src','zbebeM.png')
                res.innerHTML=`Detectamos um bebê de ${idade} anos`
            }else if(idade==19){
                img.setAttribute('src','john.png')
                res.innerHTML=`Detectamos um bebê de ${idade} anos`
            }else if(idade < 22){
                img.setAttribute('src','zjovemM.png')
                res.innerHTML=`Detectamos um jovem de ${idade} anos`
            }else if(idade < 50){
                img.setAttribute('src','zadultoM.png')
                res.innerHTML=`Detectamos um adulto de ${idade} anos`
            }else{
                img.setAttribute('src','zvelhoM.png')
                res.innerHTML=`Detectamos um velho de ${idade} anos`
            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade<10){
                img.setAttribute('src','zbebeF.png')
                res.innerHTML=`Detectamos uma bebê de ${idade} anos`
            }else if(idade < 22){
                img.setAttribute('src','zjovemF.png')
                res.innerHTML=`Detectamos uma jovem de ${idade} anos`
            }else if(idade < 50){
                img.setAttribute('src','zadultaF.png')
                res.innerHTML=`Detectamos uma adulta de ${idade} anos`
            }else{
                img.setAttribute('src','zvelhaF.png')
                res.innerHTML=`Detectamos uma velha de ${idade} anos`
            }
        }
        res.style.textAlign='center'
        
        res.appendChild(img)
    }
}