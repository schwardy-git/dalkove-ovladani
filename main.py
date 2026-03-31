def on_ir_callback(serv1):
    console.log(serv1)
    pass
cuteBot.IR_callback(on_ir_callback)

led.unplot(2, 3)

def on_forever():
    print("ab")
    if cuteBot.IR_Button(cuteBot.IRButtons.TWO):
        led.plot(2, 3)
basic.forever(on_forever)
