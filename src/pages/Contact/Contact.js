import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
import { toast } from "react-toastify";


const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");

  const [contact, setContact] = useState("");

  const fetchContact = async () => {
    try {
      const response = await axios.get("http://192.168.245.190:8002/api/member/show-contact-config");
      setContact(response.data?.list);
    } catch (err) {
      console.log("Fetch fetchContact Data Error: ", err);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.245.190:8002/api/member/add-contact",
        {
          email: email,
          numberPhone: phone,
          fullName: name,
          content: body
        }
      )
      if (response.data?.status === true) {
        toast.success("Gửi thông tin thành công")
        setBody("")
        setName("")
        setPhone("")
        setEmail("")
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.")
      }

    } catch (error) {
      console.error("Có lỗi xảy ra. Vui lòng thử lại.");
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.")
    }

  }

  return (
    <>
      <div className="bg-home">
        <div className="layout-contact">
          <div className="container">
            <div className="row my-3">
              <div className="col-lg-6 col-12">
                <div class="contact">
                  <h4>{contact.company}</h4>
                  <div class="time_work">
                    <div class="item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        class="svg-inline--fa fa-map-marker-alt fa-w-12"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                          class=""
                        ></path>
                      </svg>
                      <div className="d-flex">
                        <p className="fw-bold">Địa chỉ: </p> <span dangerouslySetInnerHTML={{ __html: contact.address }}></span>
                      </div>
                    </div>
                    <div class="item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-envelope fa-w-16"
                      >
                        <path
                          fill="currentColor"
                          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                          class=""
                        ></path>
                      </svg>
                      <b>Email:</b>{" "}
                      <a href="mailto:cskh@nguyenkimvn.vn">{contact.email}</a>
                    </div>
                    <div class="item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-phone-alt fa-w-16"
                      >
                        <path
                          fill="currentColor"
                          d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                          class=""
                        ></path>
                      </svg>
                      <div className="d-flex mt-3">
                        <p className="fw-bold">Hotline: </p> <span dangerouslySetInnerHTML={{ __html: contact.phone }}></span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="form-contact">
                  <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
                  <div class="group_contact">
                    <input
                      placeholder="Họ và tên"
                      type="text"
                      class="form-control  form-control-lg"
                      required=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="contact[Name]"
                    />
                    <input
                      placeholder="Email"
                      type="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required=""
                      id="email1"
                      class="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="contact[email]"
                    />
                    <input
                      type="number"
                      placeholder="Điện thoại*"
                      name="contact[phone]"
                      class="form-control form-control-lg"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required=""
                    />
                    <textarea
                      placeholder="Nội dung"
                      name="contact[body]"
                      id="comment"
                      class="form-control content-area form-control-lg"
                      rows="5"
                      required=""
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <button onClick={(e) => handleSubmit(e)} class="btn-contact">
                      Gửi thông tin
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div style={{ width: "100%" }}>
                  <span dangerouslySetInnerHTML={{ __html: contact.map }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
