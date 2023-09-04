"use client"
import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PosButton from "../../Components/PostButton/PostButton";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import { toast } from "react-hot-toast";
// import { Api } from "../../../utils/Api";
const Page = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  
  const [update, setUpdate] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const handleDeleteClick = () => {
    setDeleteModalOpen(false);
  };
  const Clients = [
    {
      title: "Shirt",
      price: "500",
      discount: "10%",
      duration: "1 year",
      description: "High-quality cotton shirt",
      descriptionData: ["Description 1", "Description 2"],
    },
    {
      title: "Pants",
      price: "800",
      discount: "15%",
      duration: "6 months",
      description: "Comfortable and stylish pants",
      descriptionData: ["Description 3", "Description 4"],
    },
    // Add more example clients as needed
  ];
  const [open, setOpen] = useState(false);
  const [clientData, setclientData] = useState({
    title: "any",
    price: "90",
    discount: "",
    duration: "",
    description: "",
    descriptionData: [],
  });
  const [clients, setclients] = useState([]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setclientData((prev) => ({ ...prev, [name]: value }));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setclientData((prev) => ({ ...prev, descriptionData: [...clientData.descriptionData, clientData?.description] }));
      setclientData((prev) => ({ ...prev, description: "" }));
    }
  };
  const handleAddClicked = async () => {
    const { duration, discount, price, title, descriptionData } = clientData;
    if (!title || !price || !discount || !duration) {
      toast.error("Fill all the field");
      return;
    }
    const payload = {
      title: title,
      price: price,
      discount: discount,
      type_of_duration: "year",
      value_of_duration: 2,
      description: descriptionData
    }
    //  const responce= await Api("post","/client/add",payload)
    //  if(responce){
    setclients([...clients, clientData]);
    toast.success("Add client Successfully");
    //  }
    //  else{
    //   toast.success('failed');
    //  }

    setclientData({
      title: "",
      price: "",
      discount: "",
      duration: "",
      description: "",
      descriptionData: [],
    });
    setOpen(false);
  };
  return (
    <div className="flex flex-col flex-1 xl:pl-64">
      <div className="py-12 bg-white sm:py-16 lg:py-8">
        <div className="px-4  sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div></div>

            <div className="flex items-center justify-start mt-4 sm:justify-end sm:mt-0 sm:space-x-7">
              <button
                type="button"
                className="items-center hidden px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={() => setOpen(true)}
              >
                Add client
              </button>
            </div>
          </div>

          <div className="flex flex-col mt-4 lg:mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table className="min-w-full lg:divide-gray-200 lg:divide-y">
                  <thead className="hidden lg:table-header-group">
                    <tr>
                      <th className="py-3.5 px-4 text-left text-sm font-medium text-gray-500  tracking-widest">Title</th>

                      <th className="py-3.5 px-4 text-left text-sm  tracking-widest font-medium text-gray-500">Price</th>

                      <th className="py-3.5 px-4 text-left text-sm  tracking-widest font-medium text-gray-500">Discount</th>

                      <th className="py-3.5 px-4 text-left hidden xl:table-cell text-sm  tracking-widest font-medium text-gray-500">Duration</th>

                      <th className="py-3.5 px-4 text-left text-sm  tracking-widest font-medium text-gray-500">Description</th>

                      <th className="relative py-3.5 pl-4 pr-4 md:pr-0">
                        <span className="sr-only"> Actions </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Clients?.map((item, i) => (
                      <tr className="bg-gray-50" key={i}>
                        <td className="px-4 py-4 pt-6 lg:pt-5  text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                          <div className="flex items-center">{item.title}</div>
                        </td>
                        <td className=" px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                          <div className="flex items-center">{item.price}</div>
                        </td>
                        <td className=" px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                          <div className="flex items-center">{item.discount}</div>
                        </td>
                        <td className=" px-4 py-4 text-sm font-medium text-gray-900  xl:table-cell whitespace-nowrap">
                          <div className="flex items-center">{item.duration}</div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900  pt-6 lg:pt-5  align-top lg:align-middle lg:text-left whitespace-nowrap">
                          {item.description}
                        </td>
                        <td className=" px-4 py-4 lg:table-cell whitespace-nowrap">
                          <div className="flex items-center space-x-4">
                            <div className="inline-flex items-center px-1 py-1 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-200 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <AiOutlineEye onClick={() => {setUpdate(true)
                              setIsDisable(true)
                              console.log(item,'\n', i)}} className="h-6 w-6 text-indigo-500" />
                            </div>
                            <div className="inline-flex items-center px-1 py-1 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-200 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <AiOutlineEdit onClick={() => {setUpdate(true)
                              console.log(item,'\n', i)
                              setIsDisable(false)
                              }} className="h-6 w-6 text-indigo-500" />
                            </div>
                            <div className="inline-flex items-center px-1 py-1 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-200 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <AiOutlineDelete onClick={() => {
                                console.log(item ,'\n', i, "rowdata")
                                setDeleteModalOpen(true)
                              }

                              } className="h-6 w-6 text-rose-600" />
                            </div>
                          </div>
                        </td>
                        {/* ... (rest of your table cell content) */}
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
          <Modal open={open} onClose={() => setOpen(false)} center>
            <div className="  modallarge">
              <div className="sm:px-2 ">
                <div className="text-center text-xl mt-0 mb-3">Add client</div>
                <div className="mt-2">
                  <div className="grid  sm:grid-cols-2 gap-6">
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj ">
                        {" "}
                        Title{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="title"
                          id=""
                          value={clientData?.title}
                          placeholder="Enter Title"
                          onChange={handlerChange}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Price{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="price"
                          id=""
                          value={clientData?.price}
                          placeholder="Enter Price"
                          onChange={handlerChange}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Discount{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="discount"
                          id=""
                          value={clientData?.discount}
                          placeholder="Enter Discount"
                          onChange={handlerChange}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Duration{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="duration"
                          id=""
                          value={clientData?.duration}
                          placeholder="Enter Duration"
                          onChange={handlerChange}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Description{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="description"
                          id=""
                          placeholder="Enter Description"
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                          value={clientData?.description}
                          onChange={handlerChange}
                          onKeyPress={handleKeyPress}
                        />
                        <div className="flex flex-wrap mt-3">
                          {clientData?.descriptionData?.map((value, index) => (
                            <div key={index} className="text-gray-600 mb-2 mr-4 bg-slate-300 py-1 rounded px-3 relative">
                              {value}

                              <TiDelete
                                className="absolute -top-1 -right-1 h-5 w-5"
                                onClick={() => setclientData((prev) => ({ ...prev, descriptionData: [...clientData.descriptionData?.filter((data, i) => i !== index)] }))}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <PosButton
                    title={"Add"}
                    onClick={handleAddClicked}
                    className="flex items-center justify-center w-full px-8 py-4 mt-12 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </Modal>
          {/* Delete Modal  */}
          <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)} onDelete={handleDeleteClick} />
          {/* Veiw Modal */}
          <Modal open={update} onClose={() => setUpdate(false)} center>
            <div className="modallarge">
              <div className="sm:px-2 ">
                <div className="text-center text-xl  mb-4 ">Update client</div>

                <div className="mt-2">
                  <div className="grid  sm:grid-cols-2 gap-6">
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj ">
                        {" "}
                        Title{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="title"
                          id=""
                          value={clientData?.title}
                          placeholder="Enter Title"
                          onChange={handlerChange}
                          disabled={isDisable}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Price{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="price"
                          id=""
                          value={clientData?.price}
                          placeholder="Enter Price"
                          onChange={handlerChange}
                          disabled={isDisable}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Discount{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="discount"
                          id=""
                          value={clientData?.discount}
                          placeholder="Enter Discount"
                          disabled={isDisable}
                          onChange={handlerChange}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Duration{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="duration"
                          id=""
                          disabled={isDisable}
                          value={clientData?.duration}
                          placeholder="Enter Duration"
                          onChange={handlerChange}
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Description{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="description"
                          id=""
                          placeholder="Enter Description"
                          className="block w-full px-3 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                          value={clientData?.description}
                          onChange={handlerChange}
                          disabled={isDisable}
                          onKeyPress={handleKeyPress}
                        />
                        <div className="flex flex-wrap mt-3">
                          {clientData?.descriptionData?.map((value, index) => (
                            <div key={index} className="text-gray-600 mb-2 mr-4 bg-slate-300 py-1 rounded px-3 relative">
                              {value}

                              <TiDelete
                                className="absolute -top-1 -right-1 h-5 w-5"
                                onClick={() => setclientData((prev) => ({ ...prev, descriptionData: [...clientData.descriptionData?.filter((data, i) => i !== index)] }))}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!isDisable &&
                  (<PosButton
                    title={"Update"}
                    onClick={handleAddClicked}
                    className="flex items-center justify-center w-full px-8 py-4 mt-12 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 drop-shadow-xl"
                  />)}
                </div>
              </div>
            </div>
          {/* Edit Modal */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Page;
