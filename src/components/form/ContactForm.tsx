
import React, { ElementRef, useRef } from "react";
import { StyledButton } from "../button/StyledButton";
import { S } from "./ContactForm_Styles";
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if(!form.current) return ;

        emailjs.sendForm('service_jjmyd3j', 'template_u2vz6kg', form.current, {
                publicKey: '9un7RcdO5TwKFiBIh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
    return (
        <S.Form ref={form} onSubmit={sendEmail}>
            <S.Field placeholder="name" name="user_name"/>
            <S.Field placeholder="subject" name="subject"/>
            <S.Field type='email' placeholder="email" name="email"/>
            <S.Field placeholder="message" as="textarea" name="message"/>
            <StyledButton type="submit">
                Send Message!
            </StyledButton>
        </S.Form>
    );
}


