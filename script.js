document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    this.textContent = body.classList.contains('dark-mode') ? '切换至亮色主题' : '切换至暗色主题';
});