"use client";

import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useState } from "react";

interface StateType {
  email: string | undefined;
  message: string | undefined;
}

const initialState: StateType = {
  email: "",
  message: "",
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [state, setState] = useState(initialState);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:liemjgearen@pm.me">
          liemjgearen@pm.me
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");

          setState(initialState);
        }}
      >
        <input
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
