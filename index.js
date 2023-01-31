let colorArray = []
const getColorsBtn = document.getElementById("get-color-btn")
const colorSelector = document.getElementById("color-selector")
const colorChoice = document.getElementById("color-choice")


function render(){
    const colorOption = colorChoice.options[colorChoice.selectedIndex].value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value.slice(1)}&
    format=json&mode=${colorOption}&count=10`)
    
    .then((res) => res.json())
    .then((data) => {

        let html = ""
        const colors = data.colors

        colors.forEach((color) => {
            const newColor = color.hex.value
            html += `
            <div class="colors" style="background:${newColor}">
                <div class="colors-content"></div>
                <div class="hex-values">
                    <h3 class="value">${newColor}</h3>
                </div>
            </div>
            
            `
        })
      document.getElementById("colors-container").innerHTML = html
    })
}

document.getElementById("get-color-btn").addEventListener("click", function(e){
    e.preventDefault
    render()
})
