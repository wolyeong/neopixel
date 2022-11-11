let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (512 < pins.analogReadPin(AnalogPin.P2)) {
        strip.show()
        strip.rotate(-1)
        basic.pause(100)
    } else {
        strip.show()
        strip.rotate(1)
        basic.pause(100)
    }
})
