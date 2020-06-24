radio.onReceivedNumber(function (receivedNumber) {
    let 相手の手２ = 0
    let 相手の手１ = 0
    let 自分の手 = false
    if (自分の手 == (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Triangle)
    } else if (自分の手 == (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Triangle)
    } else if (自分の手 == (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Triangle)
    } else if (自分の手 == (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Triangle)
    } else if (自分の手 < (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.No)
    } else if (自分の手 < (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.No)
    } else if (自分の手 < (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.No)
    } else if (自分の手 > (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Heart)
    } else if (自分の手 > (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Heart)
    } else if (自分の手 > (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Heart)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(2)
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
    radio.sendNumber(1)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(8)
