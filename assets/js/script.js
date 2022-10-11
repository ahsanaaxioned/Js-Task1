// storing global variable start here
let img = document.querySelector(".image");
let images = [
    "https://media.istockphoto.com/photos/day-at-the-office-picture-id1390307383?s=612x612", 
    "https://media.istockphoto.com/photos/japanese-woman-helping-her-colleague-picture-id1366415101?s=612x612", 
    "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-two-handsome-businessmen-working-in-the-picture-id1322205575", 
    "https://media.istockphoto.com/photos/close-up-of-a-smart-young-woman-coding-picture-id1332378618?s=612x612", 
    "https://media.istockphoto.com/photos/teacher-writing-on-the-whiteboard-in-the-classroom-picture-id1350900187?s=612x612"
];

// storing global variable end here
// working on image changes start here

    for (let i = 0; i < images.length; i++) {

        var timer = setInterval(function () {
            img.src = images[i];
            i++;
            if (i >= images.length ) {
               i = 0; 
            };
        }, 1000);
    };

// working on image changes end here


