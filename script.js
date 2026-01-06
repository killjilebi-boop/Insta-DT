document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();

    // Get values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    const purpose = document.getElementById('purpose').value;

    // Generate fake score (random for simulation)
    const fakeScore = Math.floor(Math.random() * 60) + 30; // 30% to 90%

    // Calculate age group
    const birthYear = new Date(dob).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    let ageGroup = "";
    if(age < 18) ageGroup = "Under 18";
    else if(age <= 25) ageGroup = "18–25";
    else if(age <= 35) ageGroup = "26–35";
    else ageGroup = "36+";

    // Display result
    document.getElementById('greeting').innerText = `Hi, ${name} 👋`;
    document.getElementById('summary').innerText = `Age group: ${ageGroup}\nCity: ${city}\nPurpose: ${purpose}\nPhone (masked): ******${phone.slice(-2)}`;
    document.getElementById('fakeScore').innerText = fakeScore;

    // Show result, hide form
    document.getElementById('userForm').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});
