function scriptTest()
{
    alert("Hey my script is running!");
}
function hello() {
    let name = document.getElementById("name").value;
    let emotion = document.getElementById("emotion").value.toLowerCase();
    document.getElementById("hello").innerHTML = (
        "<p>The Teal Hound welcomes you, " + name + "! I can tell that you're feeling " + emotion + ".</p>"
        )
}
