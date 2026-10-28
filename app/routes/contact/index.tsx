import type { Route } from "./+types";
import { Form } from "react-router";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const errors: Record<string, string> = {};

  if (!name.trim()) errors.name = "Name is required!";

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address!";
  }

  if (!subject.trim()) errors.subject = "Subject is required!";
  if (!message.trim()) errors.message = "Message is required!";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = { name, email, subject, message };

  return { message: "Form submitted successfully", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};

  const socials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/27782971833",
      icon: FaWhatsapp,
      color: "hover:text-green-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/lebogang-peter-sekaleli-b89380173/",
      icon: FaLinkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/lebogang-developer",
      icon: FaGithub,
      color: "hover:text-gray-300",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900 rounded-xl">
      <h2 className="text-3xl text-white font-bold mb-4 text-center">
        Contact Me
      </h2>

      {/* Social media links */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {socials.map(({ name, href, icon: Icon, color }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className={`flex flex-col items-center gap-2 text-gray-400 ${color} transition-colors duration-300`}
          >
            <Icon size={28} />
            <span className="text-sm">{name}</span>
          </a>
        ))}
      </div>

      {actionData?.message ? (
        <p className="mb-6 text-white p-4 bg-green-700 text-center rounded-lg border border-green-500 shadow-md">
          {actionData.message}
        </p>
      ) : null}

      <Form method="post" className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100"
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter the subject of your message"
            required
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100"
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-300"
        >
          Send Message ➜
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;
