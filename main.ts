input.onButtonPressed(Button.A, function () {
    list.push(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (morseToChar(list)))
    radio.sendString("" + (morseToChar(list)))
    list = []
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    list.push(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    basic.pause(200)
    basic.clearScreen()
})
function charToMorse (char: string) {
    return MORSE_CODE[char.toUpperCase()]
}
function morseToChar (morse: any[]) {
    let char = Object.keys(MORSE_CODE).find(key => JSON.stringify(MORSE_CODE[key]) == JSON.stringify(morse))
if (char == undefined) {
        return " "
    }
    return char
}
let list: number[] = []
radio.setGroup(1)
let MORSE_CODE: { [key: string]: number[] } = {
    A: [0, 1],
    B: [1, 0, 0, 0],
    C: [1, 0, 1, 0],
    D: [1, 0, 0],
    E: [0],
    F: [0, 0, 1, 0],
    G: [1, 1, 0],
    H: [0, 0, 0, 0],
    I: [0, 0],
    J: [0, 1, 1, 1],
    K: [1, 0, 1],
    L: [0, 1, 0, 0],
    M: [1, 1],
    N: [1, 0],
    O: [1, 1, 1],
    P: [0, 1, 1, 0],
    Q: [1, 1, 0, 1],
    R: [0, 1, 0],
    S: [0, 0, 0],
    T: [1],
    U: [0, 0, 1],
    V: [0, 0, 0, 1],
    W: [0, 1, 1],
    X: [1, 0, 0, 1],
    Y: [1, 0, 1, 1],
    Z: [1, 1, 0, 0],
    "0": [1, 1, 1, 1, 1],
    "1": [0, 1, 1, 1, 1],
    "2": [0, 0, 1, 1, 1],
    "3": [0, 0, 0, 1, 1],
    "4": [0, 0, 0, 0, 1],
    "5": [0, 0, 0, 0, 0],
    "6": [1, 0, 0, 0, 0],
    "7": [1, 1, 0, 0, 0],
    "8": [1, 1, 1, 0, 0],
    "9": [1, 1, 1, 1, 0],
    " ": [],
};
list = []
basic.forever(function () {
	
})
