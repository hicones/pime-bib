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
  const [reasonList, setReasonList] = useState<string[]>([]);

  const toggleReason = (reason: string) => {
    if (reasonList?.includes(reason)) {
      setReasonList(reasonList?.filter((item) => item !== reason));
    } else {
      setReasonList([...reasonList, reason]);
    }
  };

  const form = useForm<ContactUsZodType>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      contact_reason: reasonList,
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
      setReasonList([]);
      reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem!");
    }
  };

  useEffect(() => {
    if (reasonList) {
      setValue("contact_reason", reasonList);
    }
  }, [reasonList, setValue]);

  return (
    <section
      id="contactUs"
      className="w-full flex flex-col lg:pt-[7.5rem] pt-12 containerPadding items-center gap-24 pb-20 bg-main-200"
    >
      <h3 className="contact">fale conosco</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-12 w-full max-w-screen-xl"
      >
        <div className="flex flex-col gap-6">
          <label htmlFor="name">NOME*</label>
          <input
            type="text"
            id="name"
            className="p-2 border-b border-b-fontcolor-50 outline-none focus-within:border-b-background-700 focus-within:border-b-2 transition duration-300"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-background-200">{errors.name?.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="email">EMAIL*</label>
          <input
            type="email"
            id="email"
            className="p-2 border-b border-b-fontcolor-50 outline-none focus-within:border-b-background-700 focus-within:border-b-2 transition duration-300"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-background-200">{errors.email?.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="message">MENSAGEM*</label>
          <textarea
            className="p-2 border border-fontcolor-50 outline-none focus-within:border-background-700 focus-within:border-2 transition duration-300"
            id="message"
            {...register("message")}
          />
          {errors.message && (
            <span className="text-background-200">
              {errors.message?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <label>SELECIONE O MOTIVO DO CONTATO*</label>
          <ul className="flex items-center w-full lg:gap-8 md:gap-6 gap-4">
            <span
              className={`checkmark ${
                reasonList?.includes("sugestão") && "checked"
              }`}
              onClick={() => toggleReason("sugestão")}
            >
              sugestão
            </span>
            <span
              className={`checkmark ${
                reasonList?.includes("parceria") && "checked"
              }`}
              onClick={() => toggleReason("parceria")}
            >
              parceria
            </span>
            <span
              className={`checkmark ${
                reasonList?.includes("indicação") && "checked"
              }`}
              onClick={() => toggleReason("indicação")}
            >
              indicação
            </span>
            <span
              className={`checkmark ${
                reasonList?.includes("outro") && "checked"
              }`}
              onClick={() => toggleReason("outro")}
            >
              outro
            </span>
          </ul>
          {errors.contact_reason && (
            <span className="text-background-200">
              {errors.contact_reason?.message}
            </span>
          )}
        </div>
        <button className="formButton mt-8">Enviar</button>
      </form>
    </section>
  );
};
