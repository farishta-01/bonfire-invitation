import React, { useState } from 'react';

export default function Ticket() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    semester: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    semester: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.values(errors).some((error) => error !== '')) {
      setFormErrors(errors);
    } else {
    
      console.log('Form submitted successfully:', formData);

      window.alert('Form submitted successfully! Contact Student Affair Office. Thanks!');

      
    }
  };

  const validateForm = (data) => {
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      program: '',
      semester: '',
    };

    Object.keys(data).forEach((key) => {
      if (data[key].trim() === '') {
        errors[key] = 'This field is required';
      }
    });

    // Additional validation logic can be added here

    return errors;
  };

  return (
    <div id='ticket'>
      <>
        <section className="p-6  dark:text-gray-50">
          <h1 className="text-4xl text-center  font-bold tracking-tight my-11 text-white sm:text-6xl">
            Book Ticket
          </h1>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-600">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Ticket</p>
                <p className="text-xs">Charges: 1500 Rs.</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    First name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className={`w-full rounded-md focus:ring focus:ring-gray-300 dark:border-gray-700 dark:text-gray-900 ${
                      formErrors.firstName && 'border-red-500'
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className={`w-full rounded-md focus:ring focus:ring-gray-300 dark:border-gray-700 dark:text-gray-900 ${
                      formErrors.lastName && 'border-red-500'
                    }`}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full rounded-md focus:ring focus:ring-gray-300 dark:border-gray-700 dark:text-gray-900 ${
                      formErrors.email && 'border-red-500'
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm ml-3">Program</label>
                  <div className="flex items-center ml-4">
                    <input
                      type="radio"
                      id="bscs"
                      name="program"
                      value="BSCS"
                      checked={formData.program === 'BSCS'}
                      onChange={handleChange}
                    />
                    <label htmlFor="bscs" className="ml-2">
                      BSCS
                    </label>
                  </div>
                  <div className="flex items-center ml-4">
                    <input
                      type="radio"
                      id="bba"
                      name="program"
                      value="BBA"
                      checked={formData.program === 'BBA'}
                      onChange={handleChange}
                    />
                    <label htmlFor="bba" className="ml-2">
                      BBA
                    </label>
                  </div>
                  {formErrors.program && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.program}</p>
                  )}
                </div>
                <div className="col-span-full">
                  <label htmlFor="semester" className="text-sm">
                    Semester
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${
                      formErrors.semester && 'border-red-500'
                    }`}
                    value={formData.semester}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Semester</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                  </select>
                  {formErrors.semester && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.semester}</p>
                  )}
                </div>
              </div>
              <button
  type="submit"
  
  className="text-white bg-blue-400 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-1 sm:px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Submit

 
</button>


            </fieldset>
          </form>
        </section>
      </>
    </div>
  );
}