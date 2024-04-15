import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { Slide} from "react-awesome-reveal";


const SERVICE_ID = "service_6utmnbt";
const TEMPLATE_ID = "template_jihzvwq";
const PUBLIC_KEY = "PAwMibpUNKmcgFL40";

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Form>
      <Slide direction="right">
        <form onSubmit={handleOnSubmit}>
          <div className="name">
            <span>
              <CgProfile />
            </span>
            <input type="text" name="from_name" placeholder="Fullname..." />
          </div>
          <div className="email">
            <span>
              <MdAlternateEmail />
            </span>
            <input type="email" name="from_email" placeholder="Email..." />
          </div>
          <div className="message">
            <span className="messageIcon">
              <FiMail />
            </span>
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Message..."
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </Slide>
    </Form>
  );
}

export default ContactForm

const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;