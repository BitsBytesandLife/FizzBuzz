//Print out the the numbers that FizzBuzz Needs
function printNumbers() {

    let numbers = getRange();

    displayData(numbers);

}

//Get the range
//Right Now its set at 100
function getRange() {
    let numbersArray = [];
    for (let index = 1; index <= 100; index++) {
        //const element = array[index];
        numbersArray.push(index);
    }

    return numbersArray;
}

//Display the numbers
function displayData(numbers) {
    //geting information from the user
    let fizz = parseInt(document.getElementById("userFizz").value);
    let buzz = parseInt(document.getElementById("userBuzz").value);

    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;



    //clear the table
    resultsBody.innerHTML = "";

    //loop over
    for (let i = 0; i < numbers.length; i += colCount) {

        let dataRow = rowTemplate.content.cloneNode(true);
        let cols = dataRow.querySelectorAll("td");
        // loop over columns
        // Nested Loop
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            //const element = array[index];
            let value = numbers[i + colIndex];
            if (typeof value === "undefined") {
                value = "";
            } else if (value % fizz == 0 && value % buzz == 0) {
                cols[colIndex].classList.add("fizzbuzz")
                value = "fizzbuzz";
            } else if (value % fizz == 0) {
                cols[colIndex].classList.add("fizz")
                value = "fizz";
            } else if (value % buzz == 0) {
                cols[colIndex].classList.add("buzz")
                value = "buzz";
            }
            cols[colIndex].textContent = value;
        }

        resultsBody.appendChild(dataRow);
    }

}