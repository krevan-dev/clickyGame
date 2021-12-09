let characters = {
    Hero: {
        health: 100,
        attack: 5,
        img: 'http://placehold.it/634x634'
    },
    Titan: {
        health: 100,
        attack: 5,
        img: 'http://thiscatdoesnotexist.com'
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
                <div id="${key}-health" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow= "${chars.health}" aria-valuemin="0" aria-valuemax="100" style="width: ${chars.health}%"></div> 
            </div>
            <img class="m-4" src="${chars.img}" alt="${key}" style="width: 90%;" onclick="attack('${key}')
    "></div>`
    }
    document.getElementById('characters').innerHTML = template
}

function drawCharHealth(charsKey) {
    console.log(charsKey)
    document.getElementById(`${charsKey}-health`).style = `width: ${characters[charsKey].health}%`
}

function decrementHealth(charsKey) {
    for (const key in characters) {
        if (characters[key].health > 0) {
            characters[key].health -= 5
            drawCharHealth(key)
        }

    }
}

function attack(charsKey) {
    console.log('This works.')
    const titan = characters[charsKey]
    if (titan.health > 0) {
        titan.health -= 5
    }
    drawCharHealth(charsKey)
}

function healHero() {
    console.log('MEDPACK')
}







drawChars()