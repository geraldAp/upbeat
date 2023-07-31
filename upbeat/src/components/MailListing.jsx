import { useRef, useState } from "react";
import { toast } from "react-toastify";

const MailListing = () => {
  const textInput = useRef();
  const [mail, setMail] = useState("");
  const [error, setError] = useState(null);

  const notify = async (e) => {
    e.preventDefault();

    if (textInput.current.value === "") {
      toast.warning("Please Enter Email", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const letter = { email: mail };

    const res = await fetch(`http://localhost:4000/api/newsletters`, {
      method: "POST",
      body: JSON.stringify(letter),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      toast.error(json.error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }else{
      toast.success("Successfully Subscribed", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  };

  return (
    <div className="px-4 md:px-8 mb-9">
      <h3 className=" text-xl md:text-left text-center  md:text-2xl 2xl:6xl font-medium mb-3 text-[#ffffff]">
        Join our Mailing List
      </h3>
      <p className="md:w-[80%] text-justify md:text-left text-xs md:text-sm 2xl:text-base mb-4 text-[#ffffff]">
        Subscribe to our mailing list for the latest updates on our
        collaborations, events, branding activations, blog and all other
        announcements
      </p>
      <div className="flex gap-5 w-full">
        <input
          onChange={(e) => setMail(e.target.value)}
          ref={textInput}
          value={mail}
          className=" w-[180px] md:w-[320px] outline-none p-3 rounded-md"
          type="email"
        />
        <button onClick={notify} className="btn-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailListing;
