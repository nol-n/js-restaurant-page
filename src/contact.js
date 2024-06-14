import './style.css';
import createElement from "./createElement.js";

export default function contact() {
    
    const contactPage = createElement('div', { class: 'contact-page'});

    const contactHeader = createElement('h2');
    contactHeader.textContent = 'Contact Us';
    const contactText = createElement('p');
    contactText.textContent = 'If you have any questions, feel free to reach out to us via email or phone, or use the contact form below.';
    contactPage.appendChild(contactHeader);
    contactPage.appendChild(contactText);

    const contactInfoDiv = createElement('div', { class: 'contact-info-div'});
    const contactInfoEmail = createElement('p');
    contactInfoEmail.innerHTML = 'Email: <a href="mailto:contact@noblefarms.com">contact@noblefarms.com</a>';
    const contactInfoPhone = createElement('p');
    contactInfoPhone.innerHTML = 'Phone: <a href="tel:+1234567890">(123) 456-7890</a>';
    contactInfoDiv.appendChild(contactInfoEmail);
    contactInfoDiv.appendChild(contactInfoPhone);
    contactPage.appendChild(contactInfoDiv);

    const contactForm = createElement('form', { class: 'contact-form'});
    
    const formGroup1 = createElement('div', { class: 'form-group'});
    const label1 = createElement('label', { for: 'name'});
    label1.textContent = 'Name:';
    const input1 = createElement('input', { type: 'text', id: 'name', name: 'name', required: '' });
    formGroup1.appendChild(label1);
    formGroup1.appendChild(input1);

    const formGroup2 = createElement('div', { class: 'form-group'});
    const label2 = createElement('label', { for: 'email'});
    label2.textContent = 'Email:';
    const input2 = createElement('input', { type: 'email', id: 'email', name: 'email', required: '' });
    formGroup2.appendChild(label2);
    formGroup2.appendChild(input2);

    const formGroup3 = createElement('div', { class: 'form-group'});
    const label3 = createElement('label', { for: 'phone'});
    label3.textContent = 'Phone:';
    const input3 = createElement('input', { type: 'tel', id: 'phone', name: 'phone' });
    formGroup3.appendChild(label3);
    formGroup3.appendChild(input3);

    const formGroup4 = createElement('div', { class: 'form-group'});
    const label4 = createElement('label', { for: 'message'});
    label4.textContent = 'Message:';
    const input4 = createElement('textarea', { id: 'message', name: 'message', rows: '5', required: '' });
    formGroup4.appendChild(label4);
    formGroup4.appendChild(input4);

    const submit = createElement('button', { type: 'submit' });
    submit.textContent = 'Submit';

    contactForm.appendChild(formGroup1);
    contactForm.appendChild(formGroup2);
    contactForm.appendChild(formGroup3);
    contactForm.appendChild(formGroup4);
    contactForm.appendChild(submit);

    contactPage.appendChild(contactForm);

    content.appendChild(contactPage);
}