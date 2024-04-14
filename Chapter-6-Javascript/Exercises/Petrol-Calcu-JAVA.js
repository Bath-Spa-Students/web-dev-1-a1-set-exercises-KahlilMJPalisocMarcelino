function calculateTotalAmount() {
    var costPerLiter = document.getElementById("costPerLiter").value;
    var numberOfLiters = document.getElementById("numberOfLiters").value;

    if (costPerLiter === "" || numberOfLiters === "") {
        alert("You forgot to enter either the cost per liter and the number of liters.");
        return;
    }

    var totalAmount = costPerLiter * numberOfLiters;

    document.getElementById("totalCost").textContent = "Total Amount: AED " + totalAmount.toFixed(2);
}

