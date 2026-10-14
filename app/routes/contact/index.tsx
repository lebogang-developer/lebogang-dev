import type { Route } from "./+types";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted successfully", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        Contact Me
      </h2>

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
            Full Names
          </label>
          <input
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700rounded-lg text-gray-100"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full names"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700rounded-lg text-gray-100"
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700rounded-lg text-gray-100"
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter the subject of your message"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700rounded-lg text-gray-100"
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Send Message ➜
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;
