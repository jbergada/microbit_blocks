let value = 0
let list2 : number[] = []
basic.forever(function () {
    list2 = [
    2,
    4,
    6,
    8
    ]
    for (let value2 of list2) {
        serial.writeValue("list", _py.py_array_index(list2, value2))
        serial.writeValue("value", value2)
        basic.showNumber(value2)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
    }
})
