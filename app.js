PSD = Framer.Importer.load("imported/export-again")

// add frames to root

// store original frames https://medium.com/framer-js/ca55fc7cfc61
for (var layerGroupName in PSD) {
    PSD[layerGroupName].originalFrame = PSD[layerGroupName].frame;
}

// initial setup
PSD.bigcircle.scale = 0.01;
PSD.bigcircle.opacity = 0;
PSD.bigcircle.x += 100;
PSD.bigcircle.y -= 100;
PSD.playcirclenoshadow.opacity = 1;
PSD.ff.scale = 0.01;
PSD.ff.opacity = 0;
PSD.rewind.scale = 0.01;
PSD.rewind.opacity = 0;

PSD.playbutton.on(Events.Click, function (event, layer) {
    PSD.playcirclewithshadow.opacity = 0;
    PSD.playcirclenoshadow.opacity = 1;

    layer.animate({
        properties: {
            x: layer.originalFrame.x - 225,
            y: layer.originalFrame.y + 100
        },
        time: 0.2,
        curve: 'ease-out'
    })

    PSD.playcirclenoshadow.placeBehind(PSD.photo);
    PSD.playcirclenoshadow.animate({
        properties: {
            scale: 6,
            opacity: 0
        },
        time: 0.15,
        delay: 0.15,
        curve: 'ease-in'
    })

    PSD.titlepanelbg.animate({
        properties: {
            height: 340
        },
        time: 0.3,
        delay: 0.1,
        curve: 'ease-in'
    });

    PSD.bigcircle.animate({
        properties: {
            x: PSD.bigcircle.originalFrame.x,
            y: PSD.bigcircle.originalFrame.y,
            scale: 1,
            opacity: 1
        },
        time: 0.15,
        delay: 0.15,
        curve: 'ease-in'
    })

    PSD.ff.animate({
        properties: {
            scale: 1,
            opacity: 1
        },
        time: 0.15,
        delay: 0.15,
        curve: 'ease-in'
    })

    PSD.rewind.animate({
        properties: {
            scale: 1,
            opacity: 1
        },
        time: 0.15,
        delay: 0.15,
//        curve: 'ease-in',
        curve: 'spring(500, 25, 500)'
    })
})




//for (layerName in myLayers) {
//	var layer = myLayers[layerName];
//	layer.on(Events.Click, function(event, layer) {
//
//		// Wind up the layer by making it smaller
//		layer.scale = 0.7
//
//		// Animate the layer back to the original size with a spring
//		layer.animate({
//			properties: {scale:1.0},
//			curve: "spring",
//			curveOptions: {
//				friction: 15,
//				tension: 1000,
//			}
//		})
//
//		// Only animate this layer, not other ones below
//		event.stopPropagation()
//	})
//}