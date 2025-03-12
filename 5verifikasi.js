function verifyCode() {
  let code = document.getElementById("verificationCode").value;

  if (code === "123456") {
    // Gantilah dengan metode verifikasi yang lebih aman jika diimplementasikan secara nyata
    alert("Verifikasi berhasil! Anda sekarang masuk.");
    window.location.href = "5dashboard.html"; // Redirect ke halaman utama setelah verifikasi
  } else {
    alert("Kode verifikasi salah, silakan coba lagi.");
  }
}
