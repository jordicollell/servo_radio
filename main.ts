radio.onReceivedNumber(function (receivedNumber) {
    pins.servoWritePin(AnalogPin.P10, receivedNumber)
    led.plotBarGraph(
    receivedNumber,
    180
    )
})
input.onButtonPressed(Button.A, function () {
    servo += 5
    if (servo > 180) {
        servo += 180
    }
    radio.sendNumber(servo)
    led.plotBarGraph(
    servo,
    180
    )
})
input.onButtonPressed(Button.B, function () {
    servo += -5
    if (servo < 0) {
        servo += 0
    }
    radio.sendNumber(servo)
    led.plotBarGraph(
    servo,
    180
    )
})
let servo = 0
radio.setGroup(1)
