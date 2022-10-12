// storing global variable start here
let img = document.querySelector(".image");
let images = [
    "https://media.istockphoto.com/photos/day-at-the-office-picture-id1390307383?s=612x612",
    "https://media.istockphoto.com/photos/japanese-woman-helping-her-colleague-picture-id1366415101?s=612x612",
    "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-two-handsome-businessmen-working-in-the-picture-id1322205575",
    "https://media.istockphoto.com/photos/close-up-of-a-smart-young-woman-coding-picture-id1332378618?s=612x612",
    "https://media.istockphoto.com/photos/teacher-writing-on-the-whiteboard-in-the-classroom-picture-id1350900187?s=612x612"
];
let a = 0;
// storing global variable end here
// working on image changes start here
setInterval(function () {
    img.src = images[a];
    // console.log(a);
    a++;
    if (a >= images.length) {
        images.unshift("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")
        // console.log(images);
        a = 0;
    };
}, 1000);
// working on image changes end here


