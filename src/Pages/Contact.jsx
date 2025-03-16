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

        <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="w-full lg:w-1/2 mt-8 lg:mt-0 aos-init aos-animate"
    >
      <div className="space-y-8">
        {/* Phone */}
        <div className="flex items-center text-[#ddd] space-x-4">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
          </div>
          <div>
            <p>Phone</p>
            <h3 className="mt-1 text-lg cursor-pointer hover:text-[#8750f7]">
              +8801861026837
            </h3>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center text-[#ddd] space-x-4">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
            </svg>
          </div>
          <div>
            <p>Email</p>
            <h3 className="mt-1 text-lg cursor-pointer hover:text-[#8750f7]">
              hasandevpro@gmail.com
            </h3>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center text-[#ddd] space-x-4">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
            </svg>
          </div>
          <div>
            <p>Address</p>
            <h3 className="mt-1 text-lg cursor-pointer hover:text-[#8750f7]">
              Gulshan-1, Dhaka-1212, Bangladesh
            </h3>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Contact;
