document.querySelector('.apply-btn').addEventListener('click', () => {
  document.querySelector('.deposit-form').style.display = 'block';
});

function copyNumber() {
  const number = document.getElementById('bkash-number').innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert('নম্বর কপি হয়েছে: ' + number);
  });
}

document.querySelectorAll('.amount-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amount-buttons button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});
