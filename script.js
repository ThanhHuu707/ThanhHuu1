const container = document.getElementById('container');

function toggleForm(showRegister) {
  if (showRegister) {
    container.classList.add("right-panel-active");
  } else {
    container.classList.remove("right-panel-active");
  }
}

function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (!username || !password) {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert('Đăng ký thành công! Vui lòng đăng nhập.');
  toggleForm(false);
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const userData = JSON.parse(localStorage.getItem('user'));

  if (!userData) {
    alert('Không tìm thấy tài khoản nào!');
    return;
  }

  if (username === userData.username && password === userData.password) {
    document.cookie = `user=${username}; path=/; max-age=3600`;
    window.location.href = "https://dynamic-banoffee-6fd875.netlify.app/";
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu!');
  }
}
