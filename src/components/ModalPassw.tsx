import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { changePassword } from "../lib/routes";

function ModalPassw({ userData }: any) {
  const [selectedId, setSelectedId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(1024);
  const [messageSended, setMessageSended] = useState<boolean>(false);

  const handleEmail = async () => {
    if (!email.includes("@")) {
      setValidEmail(false);
      return;
    }
    console.log(email);
    setValidEmail(true);
    // Send value to the backend:
    // const sendEmail = await changePassword(email);
    // if the response is valid:
    setMessageSended(true);
    // then clean the input:
    setEmail("");
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setEmail('');
    setMessageSended(false);
    setValidEmail(true);
  }, [selectedId]);

  return (
    <div>
      <motion.div layoutId="modalPass">
        <motion.button
          type="button"
          className="text-aquaort font-semibold cursor-pointer transition hover:text-aquaorthree pb-4"
          onClick={() => setSelectedId("modalPass")}
        >
          Forgot password?
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div className="flex justify-center items-center absolute z-10 top-0 left-0 w-full h-full bg-blacktrans px-4">
            <motion.div
              layoutId={selectedId}
              className="flex flex-col gap-2 bg-oliveort border boder-white w-96 rounded-2xl py-2 px-3"
            >
              <motion.div
                className="self-end font-semibold cursor-pointer text-red-400"
                onClick={() => setSelectedId("")}
              >
                <IoClose className="text-3xl" />
              </motion.div>
              <motion.div className="flex flex-col gap-2 p-2">
                <h2 className="text-center font-semibold text-xl text-aquaort">
                  Reset your password
                </h2>
                <p className="text-center">
                  Enter your email address to get reset instructions sent to
                  you.
                </p>
                <div className="flex flex-col gap-4 p-2">
                  <div>
                    <div className="border-b">
                      <input
                        type="email"
                        className="h-10 rounded-xl bg-oliveort text-white w-full"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                    </div>
                    {!validEmail && (
                      <p className="text-xs text-red-200">
                        Please check twice if your email is correct
                      </p>
                    )}
                    {messageSended && (
                      <p className="text-xs text-green-200">
                        Check your email inbox (spam inbox too)
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleEmail()}
                    type="button"
                    className="h-10 border border-white rounded-xl transition hover:bg-oliveortwo cursor-pointer"
                  >
                    {width > 500 ? "Click Here" : "Tap Here"}
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-center text-xs">
                    If you need any assistance please contact us on{" "}
                  </p>
                  <a
                    href="mailto: support@ortex.com"
                    className="text-center text-xs text-aquaort font-semibold"
                  >
                    support@ortex.com
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ModalPassw;
