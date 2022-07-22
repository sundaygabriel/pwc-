const color  = "red";
switch(color){
    case "blue":
        console.log("color is blue");
        break;
    case "green":
        console.log("color is green");
        break;
    case "red":
        console.log("color is red");
        break;
    default:
        console.log("color is not red, blue or green");
}

const score = 80;
switch (true){
    case score >= 90 && score <= 100:
        console.log("excellent");
        break;
    case score >= 70 && score <90:
        console.log("very good");
        break;
    case score >= 50 && score <70:
        console.log("average");
        break;
    case score >= 30 && score <50:
        console.log("fair");
    case score <= 30:
        console.log("poor");
    default:
        console.log("you did not take the test");
}