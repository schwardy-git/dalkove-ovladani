cuteBot.IR_callback(function (serv1) {
    console.log(serv1)
})
led.unplot(2, 3)
basic.forever(function () {
    console.log("ab")
if (cuteBot.IR_Button(cuteBot.IRButtons.Two)) {
        led.plot(2, 3)
    }
})
