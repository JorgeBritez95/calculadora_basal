const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MET = document.getElementById('met');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0) {
        ERROR.style.display = 'none'
       
        if (DATO < 30) {

            let flujo1 = hellodySegar(DATO);
            let mantenimiento = flujo1 * 1.5;
            FLU.innerHTML = ' Flujo  mínimo:  ' + flujo1 + ' cc/hr';
            MAN.innerHTML = 'Recomendado: ' + mantenimiento + ' cc/hr';
            MET.innerHTML = 'Metodo Hellody Segar';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
        else {
            let flujo2 = supCorporal(DATO);
            let sc = flujo2;
            FLU.innerHTML = ' Flujo  mínimo:  ' + sc + ' cc/hr';
            MET.innerHTML = 'Metodo Superficie Corporal';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})


function hellodySegar(peso) {
    let resto = peso;
    let flujo = 0;

    if (resto > 20) {
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    }
    if (resto > 10) {
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}

function supCorporal(peso) {
    let fluj = 0;
    if (peso > 30) {
        let aux = ((peso * 4) + 7) / (peso + 90);
        fluj = aux * 2000;
    }
    return fluj;

}