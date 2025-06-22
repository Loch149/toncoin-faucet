
let amount = 0;
let claims = 0;
let interval = 6; // 6 seconds
let claimBtn = document.getElementById('claimBtn');
let amountDisplay = document.getElementById('amount');
let msg = document.getElementById('claimMsg');

function claimReward() {
    claims++;
    if (claims % 50 === 0) {
        msg.innerHTML = 'Please complete shortlink to continue: <a href="https://shrinkme.ink/Toncloudmining" target="_blank">Click Here</a>';
        claimBtn.disabled = true;
        return;
    }

    amount += 0.000001;
    amountDisplay.innerText = amount.toFixed(8);
    msg.innerText = `Claimed! Total Claims: ${claims}`;

    setTimeout(() => {
        claimBtn.disabled = false;
        msg.innerText = '';
    }, interval * 1000);
}

claimBtn.addEventListener('click', () => {
    claimBtn.disabled = true;
    claimReward();
});
