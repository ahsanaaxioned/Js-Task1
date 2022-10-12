// storing global variable start here
let img = document.querySelector(".image");
let images = [
    "https://media.istockphoto.com/photos/day-at-the-office-picture-id1390307383?s=612x612",
    "https://media.istockphoto.com/photos/japanese-woman-helping-her-colleague-picture-id1366415101?s=612x612",
    "https://media.istockphoto.com/photos/young-businesswoman-calculating-bill-in-office-picture-id1042650228?s=612x612",
    "https://media.istockphoto.com/photos/close-up-of-a-smart-young-woman-coding-picture-id1332378618?s=612x612",
    "https://media.istockphoto.com/photos/teacher-writing-on-the-whiteboard-in-the-classroom-picture-id1350900187?s=612x612"
];
let a = 0;
// storing global variable end here
// working on image changes start here
setInterval(function () {
    img.src = images[a];
    a++;
    if (a >= images.length) {
        a = 0;
    };
}, 1000);
// working on image changes end here


