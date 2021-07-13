let menu = document.querySelector('.side-bar');
let button = document.querySelector('.toggle-button')
let lines = document.querySelector('.toggle-button__lines')
let checkboxes = document.querySelectorAll('.checkbox-block__element')
checkboxes.forEach(function (item) {
    item.addEventListener('change', changeColor)
});
let buttonLeftShift = document.querySelector('#section-1__btn')
let buttonCommonSubstring = document.querySelector('#section-2__btn')
let sections = document.querySelectorAll('section')


button.addEventListener('click', toggleMenu)
buttonLeftShift.addEventListener('click', function () {
    let array = document.querySelectorAll('.section-1__value')[0].value.split(' ');
    let K = parseInt(document.querySelectorAll('.section-1__value')[1].value);
    console.log(typeof (array), K)
    document.querySelector('.section-1__result').innerHTML = leftShift(array, K)
})
buttonCommonSubstring.addEventListener('click', function () {
    let str1 = document.querySelectorAll('.section-2__value')[0].value;
    let str2 = document.querySelectorAll('.section-2__value')[1].value;
    document.querySelector('.section-2__result').innerHTML = commonSubstring(str1, str2)
})




window.addEventListener('resize', function (event) {
    if (window.innerWidth <= 1200) {
        menu.classList.remove('side-bar__active')
        button.classList.remove('toggle-button__active')
    } else {
        menu.classList.add('side-bar__active')
        button.classList.add('toggle-button__active')
    }
}, true);

function navigation(number) {
    for(let i =0; i<3;i++){
        sections[i].classList.remove('show')
    }
    sections[number].classList.add('show')

}

function toggleMenu() {
    if (menu.classList.contains('side-bar__active')) {
        menu.classList.remove('side-bar__active')
        button.classList.remove('toggle-button__active')
    } else {
        menu.classList.add('side-bar__active')
        button.classList.add('toggle-button__active')
    }
}

function changeColor(e) {
    let circleColors = document.querySelectorAll('.circle-color');
    let checkboxes = document.querySelectorAll('.checkbox-block__element');
    let classes = {0: 'circle-color__yellow', 1: 'circle-color__green', 2: 'circle-color__blue'}

    for (let i = 0; i < Object.keys(classes).length; i++) {
        if (parseInt(e.target.value) === i) {
            circleColors[i].classList.toggle(classes[i])
        }

    }
    if (parseInt(e.target.value) === 3) {
        if (e.target.checked) {
            circleColors[0].classList.add(classes[0])
            circleColors[1].classList.add(classes[1])
            circleColors[2].classList.add(classes[2])
            checkboxes.forEach((checkbox) => {
                    checkbox.checked = true
                }
            )
        } else {
            circleColors[0].classList.remove(classes[0])
            circleColors[1].classList.remove(classes[1])
            circleColors[2].classList.remove(classes[2])
            checkboxes.forEach((checkbox) => {
                    checkbox.checked = false
                }
            )
        }
    }


}

function leftShift(array, number) {
    for (let i = 0; i < number - 1; i++) {
        array.push(array.shift())
    }
    console.log(array)
    return array
}


function commonSubstring(str1, str2) {
    let temp = []
    let max = 0
    let index = null
    for (let i = 0; i < str1.length; i++) {
        temp[i] = []
        for (let j = 0; j < str2.length; j++) {
            if (str1.charAt(i) === str2.charAt(j)) {
                if (i > 0 && j > 0 && temp[i - 1][j - 1] > 0) {
                    temp[i][j] = 1 + temp[i - 1][j - 1]
                } else {
                    temp[i][j] = 1
                }
                if (max < temp[i][j]) {
                    max = temp[i][j]
                    index = i
                }
            } else {
                temp[i][j] = 0
            }
        }
    }
    return str1.substr(index - max + 1, max)
}

