 function donateNow() {
    let donation = parseFloat(
        document.getElementById("in-amount").innerText
      ) || 0;
      const inputAmount = parseFloat(
        document.getElementById("donationAmount").value
      );

      if (!isNaN(inputAmount) && inputAmount > 0) {
        donation += inputAmount;
        document.getElementById("in-amount").innerText = donation;
        document.getElementById("donationAmount").value = "";
      } else {
        alert("Please enter a valid donation amount.");
      }
    }

        // function showHistory() {
        //     const historyList = document.getElementById('donationHistory');
        //     historyList.innerHTML = ''; // Clear previous history

        //     history.forEach((donation, index) => {
        //         const listItem = document.createElement('li');
        //         listItem.textContent = `Donation ${index + 1}: ${donation}`;
        //         historyList.appendChild(listItem);
        //     });
        // }

        