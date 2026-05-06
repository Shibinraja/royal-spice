"use client";

import "./appBtn.css";
// import Modal from "../modal/Modal";

const AppBtn = ({ name }: { name: string }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const handleToastOrder = (e?: React.MouseEvent<HTMLButtonElement>) => {
  //   e?.preventDefault();
  //   setIsOpen(true);

  // };

  const handleToastOrder = () => {
    // window.open(
    //   "https://order.online/store/royal-spice-troy-31542105",
    //   "_blank"
    // );
    window.open("https://order.toasttab.com/online/www.royalspicetroy.com", "_blank");
  };

  return (
    <>
      <button
        type="button"
        className="app-btn scrollto d-none d-lg-flex"
        onClick={handleToastOrder}
        aria-haspopup="dialog"
        aria-expanded={true}
      >
        {name}
      </button>
      {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
};

export default AppBtn;
