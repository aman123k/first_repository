let tl = gsap.timeline({ default: { ease: "power2.inOut", duration: 2 } });
tl.to('.toastBanner ', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', duration: 2.2 });

const toastContainer = document.querySelector(".toastContainer");
const toastBtn = document.querySelector(".toastBtn");
const toasts = [];

function data(key, timer) {
    toasts.push(key);
    rerender();
    setTimeout(() => {
        toasts.shift();
        rerender();
    }, timer);
}
function rerender() {
    toastContainer.textContent = ' ';
    toasts.forEach(toast => {
        const createToast = document.createElement('div');
        createToast.innerText = "✔️ " + toast;
        createToast.className = 'newToast';
        toastContainer.append(createToast)
    })
}
toastBtn.addEventListener('click', () => {
    data("Here's your toast", 2000)
});
