radio.onReceivedNumber(function (receivedNumber) {
    if (1 < 2) {
        basic.showIcon(IconNames.Heart)
    } else if (false) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Triangle)
    }
    if (2 < 3) {
        basic.showIcon(IconNames.Heart)
    } else if (false) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Triangle)
    }
    if (3 < 1) {
        basic.showIcon(IconNames.Heart)
    } else if (false) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Triangle)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(2)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(8)
