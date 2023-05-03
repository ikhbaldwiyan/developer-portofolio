import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TbZoomCode } from "react-icons/tb";
import { GrStackOverflow } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { RiGlobalLine } from 'react-icons/ri';

export const ModalDetail = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>
        <TbZoomCode className="mb-1 inline" size={25} /> Detail
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-99 overflow-y-auto mt-3"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h1"
                  className="text-xl font-semibold uppercase leading-6 text-primary mt-4 text-center"
                >
                  <div className="rounded-lg shadow-md overflow-hidden mt-10 bg-gray-100 dark:bg-bgDark">
                    <img src={data.img} width="w-full" alt={data.title} />
                    <h3 className="font-semibold text-center text-xl text-primary dark:text-cyan-500 py-3 uppercase">
                      {data.title}
                    </h3>
                  </div>
                </Dialog.Title>

                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    <BsFillInfoCircleFill />
                    <h3>About Website</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{data.desc}</p>
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-1">
                    <GrStackOverflow />
                    <h3>Technology Stack</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{data.detail}</p>
                </div>

                <div className="mt-3">
                  <div className="flex items-center gap-1">
                    <AiFillGithub />
                    <h3>Repository</h3>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.github}
                    className="text-sm text-cyan-700"
                  >
                    {data.github}
                  </a>
                </div>

                <div className="mt-3">
                  <div className="flex items-center gap-1">
                    <RiGlobalLine />
                    <h3>Website</h3>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.link}
                    className="text-sm text-cyan-700"
                  >
                    {data.link ?? "-"}
                  </a>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-cyan-600 border border-transparent rounded-md hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
