input.onGesture(Gesture.TiltLeft, function () {
	
})
basic.forever(function () {
    led.plotBarGraph(
    input.rotation(Rotation.Roll) + 90,
    180
    )
})
