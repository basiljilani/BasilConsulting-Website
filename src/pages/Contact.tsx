import { Contact as ContactForm } from '../components/Contact';

export function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="pt-16">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;