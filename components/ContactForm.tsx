import { useFormFields } from "../hooks/useFormChange";

const ContactForm = (): JSX.Element => {
  const { fields, handleInputChange, handleSubmit } = useFormFields({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <form
      id={"contact"}
      name="contact"
      method="post"
      action="https://formsubmit.co/b8e330a457b56b5d59f134bf54ae3adc"
      onSubmit={handleSubmit}
    >
      <div className={"grid grid-cols-2 gap-4"}>
        <p hidden>
          <label>
            Don’t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>
        <div className={"w-full col-span-1"}>
          <label htmlFor="name">Full Name</label>
          <input
            onChange={handleInputChange}
            value={fields.name}
            className={
              // "w-full p-2 rounded-md bg-[#3B3B3B] border-2 border-gray-600 focus:outline-none"
              "w-full p-2 rounded-md bg-[#3B3B3B] border-2 border-gray-700"
            }
            type="name"
            name="name"
            title={"name"}
            id="name"
            required
          />
        </div>
        <div className={"w-full col-span-1"}>
          <label htmlFor="email" className={"inline-block"}>
            Email
          </label>
          <input
            onChange={handleInputChange}
            value={fields.email}
            className={"w-full p-2 rounded-md bg-[#3B3B3B] border-2 border-gray-700"}
            type="email"
            title={"email"}
            name="email"
            id="email"
            required
          />
        </div>
        <div className={"w-full col-span-2"}>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={handleInputChange}
            value={fields.message}
            className={"w-full p-2 rounded-md bg-[#3B3B3B] border-2 border-gray-700"}
            rows={10}
            name="message"
            id="message"
            required
          />
        </div>
        <div className={"col-span-1"}>
          <button
            type={"submit"}
            className={
              "border-white rounded-3xl px-6 sm:px-12 py-2 hover:rounded-none border border-white-100 transition-all ease-out duration-200"
            }
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
