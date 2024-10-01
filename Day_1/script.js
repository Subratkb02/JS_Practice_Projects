function countChar() {
    const data = document.getElementById("text").value;

    if (data) {
        const charCount = data.length;
        const wordCount = data.split(/\s+/).filter(Boolean).length;
        document.getElementById("char").innerHTML = `Total number of characters: ${charCount}<br>Total number of words: ${wordCount}`;
    } else {
        alert("Please enter some text");
    }
}