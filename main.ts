/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mercy
 * Created on: Sep 2025
 * This program gets the current temperature in k
*/

// our varible for k
let temperature : number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// temperature
input.onButtonPressed(Button.A, function() {
    temperature = input.temperature()
    basic.showString('the temperature is:')
    basic.showNumber(temperature + 273)
    basic.showString('k')
})
