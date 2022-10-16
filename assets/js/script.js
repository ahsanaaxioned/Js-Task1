// storing global variable start here
const img = document.querySelector(".image"),
    images = [
        "https://media.istockphoto.com/photos/day-at-the-office-picture-id1390307383?s=612x612",
        "https://media.istockphoto.com/photos/japanese-woman-helping-her-colleague-picture-id1366415101?s=612x612",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://media.istockphoto.com/photos/close-up-of-a-smart-young-woman-coding-picture-id1332378618?s=612x612",
        "https://media.istockphoto.com/photos/teacher-writing-on-the-whiteboard-in-the-classroom-picture-id1350900187?s=612x612"
    ];
let counter = 0;
// storing global variable end here
// working on image changes start here
if (img) {
    setInterval(function () {
        img.src = images[counter];
        counter++;
        if (counter >= images.length) {
            counter = 0;
        };
    }, 1000);
};
// working on image changes end here