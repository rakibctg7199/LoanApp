
let selectedLoan = 0;
let selectedDuration = 0;

function selectLoan(amount) {
  selectedLoan = amount;
  document.getElementById("loanAmount").innerText = amount;
  updateTotal();
}

function selectDuration(months) {
  selectedDuration = months;
  updateTotal();
}

function updateTotal() {
  if (selectedLoan && selectedDuration) {
    const total = selectedLoan + (selectedLoan * 0.02 * selectedDuration);
    document.getElementById("totalRepay").innerText = total.toFixed(2);
  }
}

function showForm(form) {
  document.getElementById("forms").style.display = "block";
  document.getElementById("signupForm").style.display = form === "signup" ? "block" : "none";
  document.getElementById("signinForm").style.display = form === "signin" ? "block" : "none";
}

function applyLoan() {
  if (!localStorage.getItem("signedIn")) {
    alert("Sign In করতে হবে আগে!");
    return;
  }
  document.getElementById("forms").style.display = "block";
  document.getElementById("depositForm").style.display = "block";
}

function registerUser() {
  const phone = document.getElementById("signupPhone").value;
  const pass = document.getElementById("signupPassword").value;
  const user = document.getElementById("signupUsername").value;

  if (!/\d/.test(user)) return alert("ইউজারনেমে অন্তত ১টি ডিজিট থাকতে হবে");
  if (!/^\d{11}$/.test(phone)) return alert("১১ ডিজিট মোবাইল নম্বর দিন");
  if (!/^\d{6}$/.test(pass)) return alert("৬ ডিজিট পাসওয়ার্ড দিন");
  if (localStorage.getItem(phone)) return alert("এই নম্বরে ইতিমধ্যেই রেজিস্ট্রেশন হয়েছে");

  localStorage.setItem(phone, JSON.stringify({ user, pass }));
  alert("রেজিস্ট্রেশন সফল হয়েছে!");
}

function loginUser() {
  const phone = document.getElementById("signinPhone").value;
  const pass = document.getElementById("signinPassword").value;
  const data = localStorage.getItem(phone);
  if (!data) return alert("নম্বর খুঁজে পাওয়া যায়নি");
  const parsed = JSON.parse(data);
  if (parsed.pass !== pass) return alert("পাসওয়ার্ড মিলছে না");
  localStorage.setItem("signedIn", phone);
  alert("লগইন সফল");
}

function submitDeposit() {
  const trx = document.getElementById("trxID").value;
  if (!trx) return alert("TRX ID দিন");
  alert("আবেদন গ্রহণ করা হয়েছে! যাচাইয়ের পর যোগাযোগ করা হবে।");
}
