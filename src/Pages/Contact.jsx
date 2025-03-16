import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true); // For email validation state

  // Email Validation Function
  const validateEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:5000/validate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      return data.valid;
    } catch (error) {
      console.error('Error validating email:', error);
      return false;
    }
  };

  // Send Email Function
  const sendEmail = async (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    const isEmailValid = await validateEmail(email);

    if (!isEmailValid) {
      Swal.fire({
        title: 'Invalid Email!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      return;
    }

    try {
      const formData = new FormData(form.current);
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: Object.fromEntries(formData.entries()) }),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: result.message,
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        form.current.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <section className="p-8 px-6 lg:px-20 mt-0 lg:mt-8">
      <div className="">
        <p className="text-3xl lg:text-5xl text-white leading-tight font-bold gradient-text">
          Let’s work together!
        </p>
        <p className="pt-2 pb-4 text-lg text-white w-full lg:w-[40%]">
          I design and code beautifully simple things, and I love what I do. Just simple like that!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-20 mt-4">
        <form ref={form} onSubmit={sendEmail} className="py-4 lg:py-6 w-full lg:w-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
              />
            </div>
            <div className="mb-4 col-span-full">
              <textarea
                name="message"
                placeholder="Message"
                required
                className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Send Message"
              className="font-medium px-8 py-4 w-44 rounded-3xl text-white custom-gradient cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
