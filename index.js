 // 1. Sign In/Sign Up Click Alert
 document.querySelector('.signin').addEventListener('click', () => {
     alert('Sign In clicked!');
 });

 document.querySelector('.signup').addEventListener('click', () => {
     alert('Sign Up clicked!');
 });

 // 2. Scroll to news  "Start Free Trial"
 document.querySelector('.btn-primary').addEventListener('click', () => {
     document.querySelector('.newsletter').scrollIntoView({
         behavior: 'smooth'
     });
 });

 // 3. News form validation
 document.querySelector('.newsletter form').addEventListener('submit', function(e) {
     e.preventDefault(); // form submission
     const emailInput = this.querySelector('input[type="email"]');
     const email = emailInput.value.trim();
     if (email === '') {
         alert('Please enter your email address.');
     } else if (!email.includes('@') || !email.includes('.')) {
         alert('Please enter a valid email address.');
     } else {
         alert('Thanks for subscribing!');
         emailInput.value = ''; // Clear input
     }
 });
 // sroll button js
 const topBtn = document.getElementById('topBtn');

 window.addEventListener('scroll', () => {
     topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
 });

 topBtn.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });