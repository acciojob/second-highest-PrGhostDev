//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });
    
    // Find and return the second element
    return arr[1];
}

function Main() {
    var n = prompt("Enter the number of elements");
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = parseInt(prompt("Enter element " + (i+1))); // Parse input as integers
    }
    alert(secondHighest(arr));
}
Main();
