"use client"
import Banner from "@/app/components/Banner";
import ImageFallback from "@/app/components/ImageFallback";

const Contact = () => {
  return (
    <section className="section pt-0">
      <Banner title="Contact" />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback className="mx-auto lg:pr-10" src="https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/vectors/contact.png" width={497} height={397} alt="" />
          </div>
          <div className="animate lg:col-5">
            <form
              method="POST"
              action={'#'}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label className="mb-2 block font-medium text-dark" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-medium text-dark" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-medium text-dark" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-medium text-dark" htmlFor="message">
                  Message
                </label>
                <textarea className="form-textarea w-full" rows={6} />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
