list2: List[number] = []
value = 0

def on_forever():
    global list2
    list2 = [2, 4, 6, 8]
    for value2 in list2:
        serial.write_value("list", list2.index(value2))
        serial.write_value("value", value2)
        basic.show_number(value2)
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(500)
basic.forever(on_forever)
