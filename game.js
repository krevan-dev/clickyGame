let characters = {
    Hero: {
        health: 100,
        attack: 5,
        img: 'https://www.writeups.org/wp-content/uploads/Coolest-Guy-Ever-DC-Heroes-RPG.jpg',
        bar: 'bg-success'
    },
    Titan: {
        health: 100,
        attack: 5,
        img: 'http://www.clipartbest.com/cliparts/niE/Gox/niEGox9iA.png',
        bar: 'bg-danger'
    }
}

function drawChars() {
    let template = ''
    for (const key in characters) {
        const chars = characters[key];
        template += `
        <div class="col-6 text-center my-3">
            <h3>${key}</h3> 
            <div class="progress">
                <div id="${key}-health" class="${chars.bar} progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow= "${chars.health}" aria-valuemin="0" aria-valuemax="100" style="width: ${chars.health}%"></div> 
            </div>
            <img class="m-4" src="${chars.img}" alt="${key}" style="width: 90%;" onclick="attack('${key}')">
            </div>`
    }
    document.getElementById('characters').innerHTML = template
}

function drawCharHealth(charsKey) {
    document.getElementById(`${charsKey}-health`).style = `width: ${characters[charsKey].health}%`
}

function attack(charsKey) {
    const titan = characters[charsKey]
    if (charsKey == 'Titan') {
        if (titan.health > 0) {
            titan.health -= 5
        }
    }
    drawCharHealth(charsKey)
}

function decrementHealth(charsKey) {
    if (characters.Hero.health > 0 && characters.Titan.health > 0) {
        characters.Hero.health -= 5
        drawCharHealth('Hero')
    }
}


function startInterval(charsKey) {
    setInterval(decrementHealth, 3000)
}

startInterval()
drawChars()