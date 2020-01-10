// IIFE

(function () {
    // async function grab_data() {
    //     myJson = await (await fetch('./data')).json()
    //     // console.log(myJson)
    //     getRate("GBP")
    // }
    // grab_data()

    const dataList = document.getElementById("amount")

    const symbol1 = document.getElementById('symbol1')
    const symbol2 = document.getElementById('symbol2')
    const currency1 = document.getElementById("currency1")
    const currency2 = document.getElementById("currency2")
    const amount1 = document.getElementById("amount1")
    const amount2 = document.getElementById("amount2")

    let def_cur1 = "US Dollar"
    let def_cur2 = "US Dollar"

    
    // options populated
    for( let key of Object.keys(curr)) {
        if (key == "USD"){
            symbol1.innerHTML += `<option value="${key}" selected>${key}</option>`
            symbol2.innerHTML += `<option value="${key}" selected>${key}</option>`
        } else {
            symbol1.innerHTML += `<option value="${key}">${key}</option>`
            symbol2.innerHTML += `<option value="${key}">${key}</option>`
        }
        dataList.innerHTML += `<option value="${curr[key].name}"/>`
    }

    // logic for auto currency change for side 1
    function get_code1(curren) {
        for( let key of Object.keys(curr)) {
            if (curr[key].name == curren) {
                def_cur1 = curr[key].name
                return key
            }
        }
        currency1.value = def_cur1
        return get_code1(currency1.value)
    }
    
    // changes symbol based on full currency
    currency1.addEventListener('change', function() {
        let code = get_code1(currency1.value)
        symbol1.options[symbol1.options.selectedIndex].selected = false
        for (let i = 0; i < symbol1.options.length; i++) {
            if (symbol1.options[i].value == code) {
                symbol1.options[i].selected = true
            }
        }
        data_uplate()
    })
    

    // changes full currency based on symbol
    symbol1.addEventListener('change', function() {
        let opt = symbol1.options[symbol1.options.selectedIndex].value
        currency1.value = curr[opt].name
        data_uplate()
    })

    // prevents more than 2 digits after decimal
    amount1.addEventListener('change', function() {
        var v = parseFloat(this.value);
        if (isNaN(v)) {
            this.value = '';
        } else {
            this.value = v.toFixed(2);
        }
    });

    async function data_uplate() {
        let from = symbol1.options[symbol1.options.selectedIndex].value
        let to = symbol2.options[symbol2.options.selectedIndex].value
        let from_val = amount1.value

        let val = await fetch(`./data?from=${from}&to=${to}&amount=${from_val}`)
        const res = await val.json()
        amount2.value = res.toFixed(2)
    }
    amount1.addEventListener('input', async function() {
        data_uplate()
    })
    

    // CODE 2 LOGIC HERE

    // logic for auto currency change for side 2
    function get_code2(curren) {
        for( let key of Object.keys(curr)) {
            if (curr[key].name == curren) {
                def_cur2 = curr[key].name
                return key
            }
        }
        currency2.value = def_cur2
        get_code2(currency2.value)
    }
    
    currency2.addEventListener('change', function() {
        let code = get_code2(currency2.value)
        symbol2.options[symbol2.options.selectedIndex].selected = false
        for (let i = 0; i < symbol1.options.length; i++) {
            if (symbol2.options[i].value == code) {
                symbol2.options[i].selected = true
            }
        }
        data_update()
    })


    symbol2.addEventListener('change', function() {
        let opt = symbol2.options[symbol2.options.selectedIndex].value
        currency2.value = curr[opt].name
        data_update()
    })

    amount2.addEventListener('change', function() {
        var v = parseFloat(this.value);
        if (isNaN(v)) {
            this.value = '';
        } else {
            this.value = v.toFixed(2);
        }
    });

    async function data_update() {
        let from = symbol2.options[symbol2.options.selectedIndex].value
        let to = symbol1.options[symbol1.options.selectedIndex].value
        let from_val = amount2.value

        let val = await fetch(`./data?from=${from}&to=${to}&amount=${from_val}`)
        const res = await val.json()
        amount1.value = res.toFixed(2)
    }

    amount2.addEventListener('input', async function() {
        data_update()
    })

})();
