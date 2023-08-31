document.addEventListener("DOMContentLoaded", function() {
    // Function to perform the calculation
    function performCalculation() {
        // Load the MATLAB Component Technology File (CTF)
        const ctf = CCTHelp.loadCTF('CCTHelp.ctf');

        // Call a function from the CTF to perform the calculation
        const result = ctf.performCalculation();

        // Display the result
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Result: " + result;
    }

    // Event listener for the button click
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", performCalculation);
});
