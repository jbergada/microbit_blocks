let list: number[] = []
let value = 0
basic.forever(function () {
    list = [
    2,
    4,
    6,
    8
    ]
    for (let value of list) {
        serial.writeValue("list", list.indexOf(value))
        serial.writeValue("value", value)
        basic.showNumber(value)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
    }
})
