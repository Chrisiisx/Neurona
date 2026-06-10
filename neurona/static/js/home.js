document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('mouseenter', function() {
        document.querySelectorAll('.step').forEach(s => {
        s.classList.remove('active');
        s.querySelector('span:first-child')?.classList?.remove('text-teal');
        s.querySelector('span:first-child')?.classList?.add('text-text-muted');
        s.querySelector('div div:first-child')?.classList?.remove('text-[#e8e8e8]');
        });
        this.classList.add('active');
        this.querySelector('span:first-child')?.classList?.add('text-teal');
        this.querySelector('span:first-child')?.classList?.remove('text-text-muted');
        this.querySelector('div div:first-child')?.classList?.add('text-[#e8e8e8]');
    });
});