cuteBot.IR_callback(function on_ir_callback(serv1: number) {
    console.log("serv")
    basic.showNumber(serv1)
    console.log(serv1)
})
led.unplot(2, 3)
basic.forever(function on_forever() {
    if (cuteBot.IR_Button(cuteBot.IRButtons.Two)) {
        led.plot(2, 3)
    }
    
})
