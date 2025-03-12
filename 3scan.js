function sendVerification() {
  let waNumber = document.getElementById("waNumber").value;
  if (!waNumber.startsWith("+62")) {
    alert("Masukkan nomor dengan format +62xxxxxxxxxxx");
    return;
  }

  localStorage.setItem("waNumber", waNumber);
  alert("Kode verifikasi telah dikirim ke WhatsApp Anda!");
  window.location.href = "4verifikasi.html"; // Redirect ke halaman verifikasi
}
