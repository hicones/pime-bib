"use client";

import {
  ContactUsSchema,
  ContactUsZodType,
} from "@/resolvers/contact-us-schema";
import api from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [reason, setReason] = useState<string>("");

  const form = useForm<ContactUsZodType>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      contact_reason: reason,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
    setValue,
    register,
    reset,
  } = form;

  const onSubmit = async (data: ContactUsZodType) => {
    try {
      await api.post("/insertcontactus", data).then((response) => {
        toast.success("Mensagem enviada com sucesso!");
      });
      setReason("");
      reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem!");
    }
  };

  useEffect(() => {
    if (reason) {
      setValue("contact_reason", reason);
    }
  }, [reason, setValue]);

  return (
    <section
      id="contactUs"
      className="max-w-screen-xl w-full flex flex-col lg:pt-[14rem] pt-36 gap-24 pb-20 lg:p-0 px-8"
    >
      <h3 className="contact">fale conosco</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-12 w-full flex-col"
      >
        <div className="w-full gap-12 flex justify-between lg:flex-row flex-col ">
          <div className="w-full lg:w-1/2 flex flex-col contactFormDiv lg:gap-20 md:gap-12 gap-12">
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="name"
                placeholder="Nome"
                className="p-2 border-b border-b-fontcolor-50 outline-none focus-within:border-b-main-700 focus-within:border-b-2 transition duration-300"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-main-300 grotesk">
                  {errors.name?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-2 border-b border-b-fontcolor-50 outline-none focus-within:border-b-main-700 focus-within:border-b-2 transition duration-300"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-main-300 grotesk">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <textarea
                className="p-2 border border-fontcolor-50 outline-none focus-within:border-main-700 focus-within:border-2 transition duration-300"
                id="message"
                placeholder="Mensagem"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-main-300 grotesk">
                  {errors.message?.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex lg:w-1/2 items-center justify-center flex-col gap-4">
            <ul className="flex flex-col items-start lg:gap-12 md:gap-8 gap-6">
              <li
                className={`flex justify-start items-start gap-2 checkmark ${
                  reason === "sugestão" && "checked"
                }`}
              >
                01
                <span onClick={() => setReason("sugestão")}>sugestão</span>
              </li>
              <li
                className={`flex justify-start items-start gap-2 checkmark ${
                  reason === "indicação" && "checked"
                }`}
              >
                02
                <span onClick={() => setReason("indicação")}>indicação</span>
              </li>
              <li
                className={`flex justify-start items-start gap-2 checkmark ${
                  reason === "parceria" && "checked"
                }`}
              >
                03
                <span onClick={() => setReason("parceria")}>parceria</span>
              </li>

              <li
                className={`flex justify-start items-start gap-2 checkmark ${
                  reason === "outro" && "checked"
                }`}
              >
                04
                <span onClick={() => setReason("outro")}>outro</span>
              </li>
            </ul>
            {errors.contact_reason && (
              <span className="text-main-300 grotesk">
                {errors.contact_reason?.message}
              </span>
            )}
          </div>
        </div>
        <button className="hoverText1 lg:text-2xl text-base font-normal uppercase lg:w-1/2 w-full">
          <span className="hoverText2">Enviar</span>
          <span className="hoverText2">Enviar</span>
        </button>
      </form>
    </section>
  );
};
