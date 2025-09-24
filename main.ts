/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mercy
 * Created on: Sep 2025
 * This program gets the current temperature in k
*/

// our varible for Kelvin
let temperatureInKelvin : number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// temperature in Kelvin
input.onButtonPressed(Button.A, function() {
    temperatureInKelvin = input.temperature()
    basic.showString('The temperature is:')
    basic.showNumber(temperatureInKelvin + 273)
    basic.showString('K.')
})
