let form_with_pizza = document.querySelectorAll('#pizza input');
let price = document.querySelector('.price > p');
let span_output_price = document.createElement('span');
span_output_price.style.marginLeft = ('10px');
span_output_price.style.color = ('blue');

let sauces = document.querySelector('.sauces');
let topings = document.querySelector('.topings');
let souce_price = 0;
let toping_price = 0;
let main_price = 0;
price.append(span_output_price);

let price_cake_pizza = 0;

const finishPrice = () => {
    main_price = price_cake_pizza + souce_price + toping_price;
    span_output_price.innerText = `${main_price}`;
}


const counting_price_pizza = () => {
    const select_size = (sizeValue) => {

        switch(sizeValue) {
            case 'small': {
                price_cake_pizza = 100;
                break;
            }

            case 'mid': {
                price_cake_pizza = 150;
                break;
            }

            case 'big': {
                price_cake_pizza = 200;
                break;
            }
        }
    }


    form_with_pizza.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            select_size(e.target.value)
            finishPrice();
        })

        if (elem.checked == true) {
            select_size(elem.value);
            finishPrice();
        }
    })
}

counting_price_pizza();



let [...ingridients] = document.querySelectorAll('.draggable');

ingridients.forEach((element) => {
    element.addEventListener('dragstart', function (e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
    }, false);
})

let target = document.querySelector('.table');

target.addEventListener('dragover', function (e) {
    if (e.preventDefault) e.preventDefault();
    return false;
}, false)

const souse = (id) => {

    let div_ketchup = document.createElement('div');
    let div_bbq = document.createElement('div');
    let div_ricota = document.createElement('div');

    div_ketchup.classList.add('styles_for_ingridients');
    div_bbq.classList.add('styles_for_ingridients');
    div_ricota.classList.add('styles_for_ingridients');

    switch (id) {
        case 'sauceClassic': div_ketchup.innerHTML += '????????????';
        div_ketchup.setAttribute('id', id);
            sauces.append(div_ketchup);
            break;
        case 'sauceBBQ': div_bbq.innerHTML += 'BBQ';
        div_bbq.setAttribute('id', id);
            sauces.append(div_bbq);
            break;
        case 'sauceRikotta': div_ricota.innerHTML += '??i??????????';
        div_ricota.setAttribute('id', id);
            sauces.append(div_ricota);
            break;
        default: return false;
    }

    return true;
}

const toping = (id) => {

    let div_cheese_usual = document.createElement('div');
    let div_feta = document.createElement('div');
    let div_mozzarella = document.createElement('div');
    let div_beef = document.createElement('div');
    let div_tomatoes = document.createElement('div');
    let div_mushrooms = document.createElement('div');

    div_cheese_usual.classList.add('styles_for_ingridients');
    div_feta.classList.add('styles_for_ingridients');
    div_mozzarella.classList.add('styles_for_ingridients');
    div_beef.classList.add('styles_for_ingridients');
    div_tomatoes.classList.add('styles_for_ingridients');
    div_mushrooms.classList.add('styles_for_ingridients');

    switch (id) {
        case 'moc1': div_cheese_usual.innerHTML += '?????? ??????????????????';
        div_cheese_usual.setAttribute('id', id);
            topings.append(div_cheese_usual);
            break;
        case 'moc2': div_feta.innerHTML += '?????? ????????';
        div_feta.setAttribute('id', id);
            topings.append(div_feta);
            break;
        case 'moc3': div_mozzarella.innerHTML += '??????????????????';
        div_mozzarella.setAttribute('id', id);
            topings.append(div_mozzarella);;
            break;
        case 'telya': div_beef.innerHTML += '????????????????';
        div_beef.setAttribute('id', id);
            topings.append(div_beef);
            break;
        case 'vetch1': div_tomatoes.innerHTML += '??????i????????';
        div_tomatoes.setAttribute('id', id);
            topings.append(div_tomatoes);
            break;
        case 'vetch2': div_mushrooms.innerHTML += '??????????';
        div_mushrooms.setAttribute('id', id);
            topings.append(div_mushrooms);
            break;
        default: return false;
    }
    return true;
}

target.addEventListener('drop', function (e) {

    let id = e.dataTransfer.getData('Text');
    let elem = document.getElementById(id);
    let clon = elem.cloneNode();

    if (this.appendChild(clon)) {
        elem.draggable = false;
        elem.style.opacity = '0.5';
    }

    if (souse(clon.id) == true) {
        souce_price += 10;
        finishPrice();
    }

    if (toping(clon.id) == true) {
        toping_price += 15;
        finishPrice();
    }
});    


const validationForm = () => {
    const info = document.forms.info;
    info.btnSubmit.onclick = () => {
    if (validateOrder(info))
        document.location.href = 'thank-you.html';
    else
        alert('?????????????? ?????????????? ????????');
}   

    function validateOrder(dates) {
    if (
        /^\S+( )?\S+$/.test(dates.name.value) &&
        /^\+380\d{9}/.test(dates.phone.value) &&
        /^\w+@\w+\.\w{2,}/.test(dates.email.value)
    ) return true;
    
    return false;
    }
}

validationForm();

const escapingForm = () => {   
    let baner = document.querySelector('#banner');

    baner.addEventListener('mouseover', function () {
        baner.style.bottom = `${Math.floor(Math.random() * 80)}%`;
        baner.style.right = `${Math.floor(Math.random() * 80)}%`;
    })
}
        
escapingForm();