/*
*This program controls the buttons and code that runs behind the scenes
*in the html document.
*/

/*
*Task: create buttons after loading DOM
*/
document.addEventListener("DOMContentLoaded", function ()
 {
    const addAssetsBtn = document.getElementById("add-assets-btn");
    const addInvestmentBtn = document.getElementById("add-investment-btn");
    const addIntangiblesBtn = document.getElementById("add-intangibles-btn");
    const addLiabilitiesBtn = document.getElementById("add-liabilities-btn");
    const addLongTermBtn = document.getElementById("add-long-term-btn");
    const calculatePositionBtn = document.getElementById("calculate-position-btn");

    /*
    *Task: calculates the total and updates with total value
    *
    */
    function calculateTotal(fields, totalElementId)
     {
        let total = 0;
        fields.forEach(id => {
            const value = parseFloat(document.getElementById(id)?.value) || 0;
            total += value;
        });
        document.getElementById(totalElementId).textContent = total.toFixed(2);
    }

     /*
    *Task: creates event listener which button is clicked. Hides the button
    * and then calculates the numbers as they are entered. 
    */
    addAssetsBtn.addEventListener("click", function () 
    {
        addAssetsBtn.style.display = "none";
        const assetsFormHtml = `
            <div>
                <label for="cash">Cash:</label>
                <input type="number" id="cash" class="input mb-2" placeholder="Enter cash amount">
                <label for="inventory">Inventory:</label>
                <input type="number" id="inventory" class="input mb-2" placeholder="Enter inventory amount">
                <label for="supplies">Supplies:</label>
                <input type="number" id="supplies" class="input mb-2" placeholder="Enter supplies amount">
                <label for="temp-investments">Temporary Investments:</label>
                <input type="number" id="temp-investments" class="input mb-2" placeholder="Enter temp investments amount">
            </div>
        `;
        document.getElementById("assets-form").innerHTML = assetsFormHtml;

        const fields = ['cash', 'inventory', 'supplies', 'temp-investments'];
        fields.forEach(id => document.getElementById(id).addEventListener('input', () => calculateTotal(fields, 'total-assets')));
    });

     /*
    *Task: creates event listener which button is clicked. Hides the button
    * and then calculates the numbers as they are entered. 
    */    addInvestmentBtn.addEventListener("click", function () 
    {
        addInvestmentBtn.style.display = "none"; // Hide the button
        const investmentFormHtml = `
            <div>
                <label for="land">Land:</label>
                <input type="number" id="land" class="input mb-2" placeholder="Enter land amount">
                <label for="building">Building and Improvements:</label>
                <input type="number" id="building" class="input mb-2" placeholder="Enter building amount">
                <label for="equipment">Equipment:</label>
                <input type="number" id="equipment" class="input mb-2" placeholder="Enter equipment amount">
            </div>
        `;
        document.getElementById("investment-form").innerHTML = investmentFormHtml;

        const fields = ['land', 'building', 'equipment'];
        fields.forEach(id => document.getElementById(id).addEventListener('input', () => calculateTotal(fields, 'total-investment')));
    });

        /*
    *Task: creates event listener which button is clicked. Hides the button
    * and then calculates the numbers as they are entered. 
    */
    addIntangiblesBtn.addEventListener("click", function () 
    {
        addIntangiblesBtn.style.display = "none"; 
        const intangiblesFormHtml = `
            <div>
                <label for="trade-names">Trade Names:</label>
                <input type="number" id="trade-names" class="input mb-2" placeholder="Enter trade names amount">
                <label for="contributions">Contributions:</label>
                <input type="number" id="contributions" class="input mb-2" placeholder="Enter contributions amount">
            </div>
        `;
        document.getElementById("intangibles-form").innerHTML = intangiblesFormHtml;

        const fields = ['trade-names', 'contributions'];
        fields.forEach(id => document.getElementById(id).addEventListener('input', () => calculateTotal(fields, 'total-intangibles')));
    });

      /*
    *Task: creates event listener which button is clicked. Hides the button
    * and then calculates the numbers as they are entered. 
    */
    addLiabilitiesBtn.addEventListener("click", function () 
    {
        addLiabilitiesBtn.style.display = "none"; 
        const liabilitiesFormHtml = `
            <div>
                <label for="accounts-payable">Accounts Payable:</label>
                <input type="number" id="accounts-payable" class="input mb-2" placeholder="Enter accounts payable amount">
                <label for="notes-payable">Notes Payable:</label>
                <input type="number" id="notes-payable" class="input mb-2" placeholder="Enter notes payable amount">
                <label for="interest-payable">Interest Payable:</label>
                <input type="number" id="interest-payable" class="input mb-2" placeholder="Enter interest payable amount">
                <label for="wages-payable">Wages Payable:</label>
                <input type="number" id="wages-payable" class="input mb-2" placeholder="Enter wages payable amount">
                <label for="accrued-expenses">Accrued Expenses:</label>
                <input type="number" id="accrued-expenses" class="input mb-2" placeholder="Enter accrued expenses amount">
            </div>
        `;
        document.getElementById("liabilities-form").innerHTML = liabilitiesFormHtml;

        const fields = ['accounts-payable', 'notes-payable', 'interest-payable', 'wages-payable', 'accrued-expenses'];
        fields.forEach(id => document.getElementById(id).addEventListener('input', () => calculateTotal(fields, 'total-liabilities')));
    });

         /*
    *Task: creates event listener which button is clicked. Hides the button
    * and then calculates the numbers as they are entered. 
    */
    addLongTermBtn.addEventListener("click", function () 
    {
        addLongTermBtn.style.display = "none"; 
        const longTermFormHtml = `
            <div>
                <label for="long-notes-payable">Notes Payable:</label>
                <input type="number" id="long-notes-payable" class="input mb-2" placeholder="Enter notes payable amount">
                <label for="bonds-payable">Bonds Payable:</label>
                <input type="number" id="bonds-payable" class="input mb-2" placeholder="Enter bonds payable amount">
            </div>
        `;
        document.getElementById("long-term-form").innerHTML = longTermFormHtml;

        const fields = ['long-notes-payable', 'bonds-payable'];
        fields.forEach(id => document.getElementById(id).addEventListener('input', () => calculateTotal(fields, 'total-long-term')));
    });

        /*
    *Task: calculates all liabilities and all assets and then produces the number at the end. 
    */
    calculatePositionBtn.addEventListener("click", function () 
    {
        

        const totalAssets = parseFloat(document.getElementById('total-assets').textContent) +
                            parseFloat(document.getElementById('total-investment').textContent) +
                            parseFloat(document.getElementById('total-intangibles').textContent);
        document.getElementById('total-assets-summary').textContent = totalAssets.toFixed(2);
       
        const totalLiabilities = parseFloat(document.getElementById('total-liabilities').textContent) +
                                  parseFloat(document.getElementById('total-long-term').textContent);
        document.getElementById('total-liabilities-summary').textContent = totalLiabilities.toFixed(2);

        const position = totalAssets - totalLiabilities;
        document.getElementById('total-position-summary').textContent = position.toFixed(2);

    });

});
