var r;
var g;
var b;
var chat = []


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    button = createButton('Refresh');
    button.position(windowWidth / 2, windowHeight / 3);
    button.mousePressed(changeComment);
}

function draw() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255)

    stroke(0)
    textSize(20)
    fill(255)
    text("Comments", windowWidth / 10, windowHeight / 10)
    noStroke()
}

function changeComment() {
    let msgs = [
        "She is such a clown ...I can't even",
        "He's back again on the news feed... ughhh",
        "Why do people still support this guy",
        "People still like this person?",
        "I puke when he returned",
        "literally all my respect for him is gone",
        "I need more of these",
        "This video was chaotic and i loved it",
        "You are awesome!",
        "I really loveeeeeeee your videos",
        "You look pretty with your makeup",
        "You're a great person and so unique",
        "T F i though you got terminated",
        "For God sake he was never removed from yt",
        "He looks like a dead squirrel",
        "He is disgraceful copying peoples video",
        "you are a legend",
        "Feel blessed with this video",
        "So wonderful",
        "Thanks for inspiring us"
    ];
    //let r = random(windowWidth - 50, windowHeight- 50)
    chatComment(msgs[Math.floor(Math.random() * msgs.length)]);
    //chatComment(msgs[(r * msgs.length)])
}


// used intersection lines 28-35 https://editor.p5js.org/eric/sketches/HkW2DRKnl
function intersection(rect1, rect2) {
    var x1 = rect2.x, y1 = rect2.y, x2 = x1 + rect2.width, y2 = y1 + rect2.height;
    if (rect1.x > x1) { x1 = rect1.x; }
    if (rect1.y > y1) { y1 = rect1.y; }
    if (rect1.x + rect1.width < x2) { x2 = rect1.x + rect1.width; }
    if (rect1.y + rect1.height < y2) { y2 = rect1.y + rect1.height; }
    return (x2 <= x1 || y2 <= y1) ? false : { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}

function chatComment(msgs) {
    //for (let i = 0; i < 20; i++) { //for lop to loop the overlapping
    let rW = random(windowWidth - 50)
    let rH = random(windowHeight - 50)
    let radius = 75
    let overlapping = false
    for (let i = 0; i < 5; i++) {
        for (let index = 0; index < chat.length; index++) {
            const element = chat[index];
            let r2 = {
                x: rW - 50 - radius / 2,
                y: rH - radius + 20,
                width: radius / 2 + 50 + textWidth(msgs),
                height: radius
            }
            overlapping = overlapping || intersection(element, r2) != false
        }

        if (!overlapping) {
            console.log("not overlapping")
        } else {
            console.log("overlapping")
        }
    }

    fill(0)

    strokeWeight(2)
    textSize(32);
    stroke(255)
    rect(rW - 50 - radius / 2, rH - radius + 20, radius / 2 + 50 + textWidth(msgs), radius)
    chat.push({
        x: rW - 50 - radius / 2,
        y: rH - radius + 20,
        width: radius / 2 + 50 + textWidth(msgs),
        height: radius
    })
    stroke(0)
    fill(255);
    text(msgs, rW, rH);
    noStroke()
    fill(r, g, b)
    circle(rW - 50, rH - 20, radius)
}