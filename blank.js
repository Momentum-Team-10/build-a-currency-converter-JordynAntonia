const root = document.getElementById(`root`)
const container = document.createElement(`div`)
container.id = `container`

root.appendChild(container)

fetch(`https://exchangeratesapi.io/`)
    .then(response => console.log(response.json()))
    .then(currencies => {
        console.log(base)
        let id = document.createElement(`p`)
        id.innerText = base[0].id
        container.appendChild(id)

        let dropdown = document.createElement(`select`)
        for (base of rates) {
            let option = document.createElement (`option`)
                option.innerText = base.name
                option.value = base.id
                dropdown.apppendChild(option)
                console.log(option.value)
        }
        
        container.appendChild(button)
        container.appendChild(dropDown)
        container.appendChild(convertButton)
        
        button.addEventListener(`click, () => {
            console.log(event.option.value)
            fetch(`https://openexchangerates.org/api/latest.json?app_id=dee049e8497c44b18c10ba675b1c6f6d`)
                .then(response =>response.json()
                .then(base => console.log(rates))
    }
        dropDown.addEventListener(`change, (event) => {
            console.log(event.target.value)
            fetch(`https://openexchangerates.org/api/latest.json?app_id=dee049e8497c44b18c10ba675b1c6f6d`)
                .then(response => response.json())
                .then(currency => console.log(currencies))
    }

        convertButton.addEventListener(convert, (event) => {
            console.log(event.target.value)
            fetch(`https://openexchangerates.org/api/latest.json?app_id=dee049e8497c44b18c10ba675b1c6f6d`)
                .then(response =>response.json()
                .then(data => console.log(currencies))
    }