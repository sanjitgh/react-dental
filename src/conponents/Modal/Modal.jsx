const Modal = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handelSubmit} className="space-y-5">
            <div>
              <h1>First Name</h1>
              <input
                name="Fname"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <h1>Last Name</h1>
              <input
                name="Lname"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <h1>Email</h1>
              <input
                name="email"
                type="email"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <h1>Phone Number</h1>
              <input
                name="phone"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <h1>Appoinment Date</h1>
              <input
                name="date"
                type="date"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <h1>Address</h1>
              <input
                name="address"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <input className="btn bg-blue-500 text-white" type="submit" value={"Make Appointment"} />
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
