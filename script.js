document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = document.getElementById("hobbies").value;
    const introduction = document.getElementById("introduction").value;

    // Kiểm tra nếu thông tin bắt buộc chưa được nhập
    if (!fullName || !gender) {
        alert("Vui lòng nhập đầy đủ thông tin bắt buộc (Họ và tên, Giới tính)!");
        return;
    }

    // Hiển thị thông tin người dùng
    document.getElementById("infoFullName").textContent = fullName;
    document.getElementById("infoEmail").textContent = email;
    document.getElementById("infoPhone").textContent = phone;
    document.getElementById("infoGender").textContent = gender;
    document.getElementById("infoHobbies").textContent = hobbies || "Chưa cung cấp";
    document.getElementById("infoIntroduction").textContent = introduction || "Chưa cung cấp";

    // Ẩn form và hiển thị thông tin người dùng
    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("userInfo").classList.remove("hidden");
});
