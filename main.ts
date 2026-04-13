cuteBot.IR_callback(function (serv1) {
    console.log("serv")
basic.showNumber(serv1)
    console.log(serv1)
led.plot(2, 2)
})
led.unplot(2, 3)
basic.forever(function () {
    if (cuteBot.IR_Button(cuteBot.IRButtons.Two)) {
        led.plot(2, 3)
    }
})
