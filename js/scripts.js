function myFunction() {
    var h = prompt("Please enter height your triangle [m]");
    var a = prompt("Please enter basic your triangle [m]");
    var triangleArea = (h * a) / 2;
    if ((h != null) && (a != null)) {
        document.getElementById("demo").innerHTML =
        "Triangle field with base: " + a + "m and height: " + h + "m is equal to: " + triangleArea + "m2";
    }
}
