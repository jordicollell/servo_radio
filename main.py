def on_forever():
    pins.servo_write_pin(AnalogPin.P10, 0)
    basic.pause(300)
    pins.servo_write_pin(AnalogPin.P10, 180)
    basic.pause(300)
basic.forever(on_forever)
