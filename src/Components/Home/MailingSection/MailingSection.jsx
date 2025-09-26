import { toast } from "react-toastify";
import api from "../../../../API/axiosInstance";
import Swal from "sweetalert2";

const MailingSection = () => {
  const handleFeedback = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Data = Object.fromEntries(formData.entries());

    api
      .post("/feedbackSending", Data)
      .then((res) => {
        if (res.data.sent === true) {
          Swal.fire({
            title: "You Feedback Sent Successfully",
            text: "Thanks for visiting my website!",
            icon: "success",
            confirmButtonColor: "#4CAF50",
          });
          e.target.reset();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="mx-3">
      <p className="text-center text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl mt-8 font-bebas">
        Give Us Feedback About Your Experience
      </p>
      <section className="max-w-7xl mx-auto bg-linear-65 from-purple-500 to-pink-500 mt-3 rounded-xl">
        <form onSubmit={handleFeedback}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label font-semibold text-[17px] text-white">
                FROM
              </label>
              <input
                type="email"
                className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email address"
                name="senderEmail"
                required
              />
              <label className="label font-semibold text-[17px] text-white">
                MESSAGE
              </label>
              <textarea
                placeholder="Enter Your Feedback Here"
                className="textarea textarea-success w-full"
                name="feedback"
                required
              ></textarea>
              <button className="btn bg-green-500 text-white font-semibold border-2 border-green-500 text-[16px] mt-4 active:scale-x-95">
                Sent
              </button>
            </fieldset>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MailingSection;
