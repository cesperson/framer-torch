PSD = Framer.Importer.load("imported/export-again")

// store original frames https://medium.com/framer-js/ca55fc7cfc61
for (var layerGroupName in PSD) {
    PSD[layerGroupName].originalFrame = PSD[layerGroupName].frame;
}

// setup image
layerA = new Layer({
    width: 640,
    height: 738,
    x: PSD.photo.x,
    y: PSD.photo.y,
    image: "images/torch.gif",
    opacity: 0
});

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
PSD.topline.y += 30;
PSD.topline.placeBehind(PSD.titlepanel);
PSD.speakersline.y -= 10;
PSD.speakersline.opacity = 0;
PSD.positionline.scale += 0.01;
PSD.positionline.x += 60;
PSD.positionline.opacity = 0;
PSD.onedaywhite.opacity = 0;
PSD.playbuttonsmall.scale = 0.01;
PSD.playbuttonsmall.opacity = 0;

PSD.playbutton.on(Events.Click, function (event, layer) {
    PSD.playcirclewithshadow.opacity = 0;
    PSD.playcirclenoshadow.opacity = 1;

    layer.animate({
        properties: {
            x: layer.originalFrame.x - 227,
            y: layer.originalFrame.y + 80
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

    PSD.titlepaneltext.animate({
        properties: {
            opacity: 0,
            x: -30,
            y: +200
        },
        time: 0.1,
        curve: 'ease-out'
    })

    PSD.titlepanelbg.animate({
        properties: {
            height: 340
        },
        time: 0.3,
        delay: 0.1,
        curve: 'ease-out'
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
        curve: 'ease-out'
    })

    PSD.ff.animate({
        properties: {
            scale: 1,
            opacity: 1
        },
        time: 0.15,
        delay: 0.15,
        curve: 'spring(200, 15, 10)'
    })

    PSD.rewind.animate({
        properties: {
            scale: 1,
            opacity: 1
        },
        time: 0.15,
        delay: 0.15,
        curve: 'spring(200, 15, 10)'
    })

    PSD.topline.placeBefore(PSD.photo);
    PSD.topline.animate({
        properties: {
            y: PSD.topline.originalFrame.y
        },
        time: 0.15,
        delay: 0.15,
        curve: 'ease-out'
    })

    PSD.speakersline.animate({
        properties: {
            y: PSD.speakersline.originalFrame.y,
            opacity: 1
        },
        time: 0.15,
        delay: 0.25,
        curve: 'ease-out'
    })

    PSD.positionline.animate({
        properties: {
            scale: 1,
            y: PSD.positionline.originalFrame.y,
            x: PSD.positionline.originalFrame.x,
            opacity: 1
        },
        time: 0.30,
        delay: 0.25,
        curve: 'ease-out'
    })

    PSD.oneday.opacity = 0;
    PSD.oneday.animate({
        properties: {
            opacity: 0
        },
        time: 0.30,
        delay: 0.25,
        curve: 'ease-out'
    });

    PSD.onedaywhite.animate({
        properties: {
            opacity: 1
        },
        time: 0.30,
        delay: 0.25,
        curve: 'ease-out'
    });

    PSD.playbuttonsmall.animate({
        properties: {
            opacity: 1,
            scale: 1
        },
        time: 0.15,
        delay: 0.15,
        curve: 'ease-out'
    });

    PSD.photo.animate({
        properties: {
            opacity: 0
        },
        time: 0.15,
        curve: 'ease-out'
    });

    layerA.placeBehind(PSD.topline);
    layerA.animate({
        properties: {
            opacity: 1
        },
        time: 0.15,
        curve: 'ease-out'
    });
})

