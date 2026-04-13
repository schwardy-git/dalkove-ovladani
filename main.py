def on_ir_callback(serv1):
    print("serv")
    basic.show_number(serv1)
    print(serv1)
    
cuteBot.IR_callback(on_ir_callback)

led.unplot(2, 3)

def on_forever():
    if cuteBot.IR_Button(cuteBot.IRButtons.TWO):
        led.plot(2, 3)
basic.forever(on_forever)
