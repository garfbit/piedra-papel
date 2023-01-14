let Número = 0
input.onButtonPressed(Button.A, function () {
    Número = randint(1, 3)
    if (Número == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (Número == 2) {
        basic.showIcon(IconNames.Square)
    } else if (Número == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
