// import React, { useState, useEffect } from 'react';
// import {
//   Calendar,
//   Image as ImageIcon,
//   Plus,
//   X,
//   CheckSquare,
//   UploadCloud,
//   ChevronRight,
//   AlertCircle
// } from 'lucide-react';

// const Events = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     category: "branding",
//   });

//   const [imageSlots, setImageSlots] = useState([
//     { id: Date.now(), file: null, preview: null },
//   ]);

//   const [isChecked, setIsChecked] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddImageSlot = () => {
//     if (imageSlots.length < 5) {
//       setImageSlots([
//         ...imageSlots,
//         { id: Date.now(), file: null, preview: null },
//       ]);
//     }
//   };

//   const handleRemoveImageSlot = (id) => {
//     setImageSlots(imageSlots.filter((slot) => slot.id !== id));
//   };

//   const handleFileChange = (id, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setImageSlots((prev) =>
//         prev.map((slot) =>
//           slot.id === id ? { ...slot, file: file, preview: previewUrl } : slot
//         )
//       );
//     }
//   };

//   useEffect(() => {
//     const { title, description, date, category } = formData;
//     const hasImage = imageSlots.some((slot) => slot.file !== null);

//     const isValid =
//       title.trim() &&
//       description.trim() &&
//       date &&
//       category &&
//       hasImage &&
//       isChecked;

//     setIsFormValid(Boolean(isValid));
//   }, [formData, imageSlots, isChecked]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFormValid) return;
//     alert("Event Uploaded Successfully!");
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto pb-10">

//       <div className="mb-6 md:mb-8">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//           Create New Event
//         </h1>
//         <p className="text-sm md:text-base text-gray-500">
//           Fill in the details below to publish a new event.
//         </p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden w-full"
//       >
//         <div className="p-4 md:p-8 space-y-6 md:space-y-8">

//           {/* General Info */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//             <div className="space-y-4 md:space-y-6">

//               {/* Title */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Event Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   placeholder="e.g. Summer Design Workshop"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
//                   focus:bg-white focus:border-amber-500 focus:ring-4 
//                   focus:ring-amber-500/10 transition-all outline-none 
//                   text-base md:text-sm"
//                 />
//               </div>

//               {/* Category */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Category
//                 </label>
//                 <div className="relative">
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
//                     focus:bg-white focus:border-amber-500 focus:ring-4 
//                     focus:ring-amber-500/10 outline-none appearance-none 
//                     cursor-pointer text-base md:text-sm"
//                   >
//                     <option value="branding">Branding</option>
//                     <option value="marketing">Marketing</option>
//                     <option value="design">Design</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
//                     <ChevronRight className="rotate-90" size={16} />
//                   </div>
//                 </div>
//               </div>

//               {/* Date */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Event Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-50 
//                     border border-gray-200 focus:bg-white focus:border-amber-500 
//                     focus:ring-4 focus:ring-amber-500/10 outline-none 
//                     text-base md:text-sm"
//                   />
//                   <Calendar
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     size={18}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="space-y-2 h-full flex flex-col">
//               <label className="block text-sm font-medium text-gray-700">
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Detailed description..."
//                 className="w-full flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200
//                 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10
//                 outline-none resize-none min-h-[150px] md:min-h-[200px]
//                 text-base md:text-sm"
//               ></textarea>
//             </div>
//           </div>

//           <div className="h-px bg-gray-100 w-full" />

//           {/* Image Upload Section */}
//           <div className="space-y-4">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Event Images
//                 </label>
//                 <p className="text-xs text-gray-500">
//                   Max 5 images. Min 1 required.
//                 </p>
//               </div>
//               <div className="text-xs sm:text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
//                 {imageSlots.filter((s) => s.file).length} / 5 Uploaded
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {imageSlots.map((slot) => (
//                 <div key={slot.id} className="relative group w-full">
//                   <div
//                     className={`relative h-44 md:h-48 rounded-xl border-2 border-dashed 
//                     flex flex-col items-center justify-center transition-all overflow-hidden w-full
//                     ${
//                       slot.preview
//                         ? "border-amber-500 bg-white"
//                         : "border-gray-300 bg-gray-50 hover:bg-white hover:border-gray-400"
//                     }`}
//                   >
//                     {slot.preview ? (
//                       <>
//                         <img
//                           src={slot.preview}
//                           alt="Preview"
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
//                         transition-opacity flex items-center justify-center">
//                           <button
//                             type="button"
//                             onClick={() =>
//                               document.getElementById(`file-${slot.id}`)?.click()
//                             }
//                             className="bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-lg hover:bg-gray-100"
//                           >
//                             Change
//                           </button>
//                         </div>
//                       </>
//                     ) : (
//                       <label
//                         htmlFor={`file-${slot.id}`}
//                         className="cursor-pointer w-full h-full flex flex-col 
//                         items-center justify-center p-4"
//                       >
//                         <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center 
//                         justify-center text-amber-600 mb-3">
//                           <ImageIcon size={20} />
//                         </div>
//                         <span className="text-sm font-medium text-gray-700">Upload</span>
//                         <span className="text-xs text-gray-400 mt-1">Max 2MB</span>
//                       </label>
//                     )}

//                     <input
//                       type="file"
//                       id={`file-${slot.id}`}
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => handleFileChange(slot.id, e)}
//                     />
//                   </div>

//                   {imageSlots.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveImageSlot(slot.id)}
//                       className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-gray-200 
//                       shadow-md rounded-full flex items-center justify-center text-gray-500 
//                       hover:text-red-500 hover:border-red-100 transition-colors"
//                     >
//                       <X size={14} />
//                     </button>
//                   )}
//                 </div>
//               ))}

//               {imageSlots.length < 5 && (
//                 <button
//                   type="button"
//                   onClick={handleAddImageSlot}
//                   className="h-44 md:h-48 w-full rounded-xl border-2 border-dashed border-gray-200 
//                   hover:border-amber-400 hover:bg-amber-50/50 flex flex-col 
//                   items-center justify-center transition-all text-gray-400 hover:text-amber-600 gap-2"
//                 >
//                   <Plus size={24} />
//                   <span className="text-sm font-medium">Add Image</span>
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Confirm & Submit */}
//           <div className="bg-gray-50 -mx-4 md:-mx-8 p-4 md:p-8 border-t border-gray-200 mt-6 md:mt-8">
//             <div className="flex flex-col gap-6">

//               {/* Checkbox */}
//               <label className="flex items-start gap-3 cursor-pointer group w-full">
//                 <div className="flex items-center mt-0.5">
//                   <input
//                     type="checkbox"
//                     className="peer sr-only"
//                     checked={isChecked}
//                     onChange={(e) => setIsChecked(e.target.checked)}
//                   />
//                   <div
//                     className={`w-5 h-5 md:w-6 md:h-6 border-2 rounded-md transition-all 
//                     flex items-center justify-center ${
//                       isChecked
//                         ? "bg-amber-600 border-amber-600"
//                         : "bg-white border-gray-300 group-hover:border-amber-400"
//                     }`}
//                   >
//                     <CheckSquare
//                       size={14}
//                       className={`text-white transition-transform ${
//                         isChecked ? "scale-100" : "scale-0"
//                       }`}
//                     />
//                   </div>
//                 </div>

//                 <div className="text-sm">
//                   <span className="font-medium text-gray-700">Review Confirmation</span>
//                   <span className="block text-gray-500 text-xs md:text-sm">
//                     I verify all details are accurate.
//                   </span>
//                 </div>
//               </label>

//               {/* Submit */}
//               <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
//                 {!isFormValid && (
//                   <div className="flex items-center gap-2 text-xs text-amber-600/80 bg-amber-50 p-2 rounded">
//                     <AlertCircle size={14} />
//                     <span>Complete all fields & confirm.</span>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={!isFormValid}
//                   className={`
//                     w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl 
//                     font-bold shadow-lg transition-all
//                     ${
//                       isFormValid
//                         ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-amber-500/30 hover:translate-y-[-1px]"
//                         : "bg-gray-400 text-white cursor-not-allowed"
//                     }
//                   `}
//                 >
//                   <UploadCloud size={20} />
//                   Upload Event
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </form>
//     </div>
//   );
// };

// export default Events;












import React, { useState, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import {
  Calendar,
  Image as ImageIcon,
  Plus,
  X,
  CheckSquare,
  UploadCloud,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

// =========================
// Helper: Generate Cropped Image Blob + Preview URL
// =========================
const createCroppedImage = async (imageSrc, croppedAreaPixels) => {
  const img = document.createElement("img");
  img.src = imageSrc;
  await new Promise((resolve) => (img.onload = resolve));

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  ctx.drawImage(
    img,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const preview = URL.createObjectURL(blob);
      resolve({ blob, preview });
    }, "image/jpeg", 0.95);
  });
};

// =========================
// MAIN COMPONENT
// =========================
const Events = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    category: "branding",
  });

  const [imageSlots, setImageSlots] = useState([
    { id: Date.now(), file: null, preview: null },
  ]);

  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // ========= Cropper States =========
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [tempImage, setTempImage] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedPixels, setCroppedPixels] = useState(null);

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedPixels(croppedAreaPixels);
  }, []);

  // ========= Open Crop Modal =========
  const openCropper = (slotId, file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setTempImage(reader.result);
      setSelectedSlotId(slotId);
      setCropModalOpen(true);
    };
    reader.readAsDataURL(file);
  };

  // ========= Confirm Cropping =========
  const confirmCrop = async () => {
    const result = await createCroppedImage(tempImage, croppedPixels);

    setImageSlots((prev) =>
      prev.map((slot) =>
        slot.id === selectedSlotId
          ? { ...slot, file: result.blob, preview: result.preview }
          : slot
      )
    );

    setCropModalOpen(false);
  };

  // ========= Image Selection =========
  const handleFileChange = (id, e) => {
    const file = e.target.files[0];
    if (file) openCropper(id, file);
  };

  const handleAddImageSlot = () => {
    if (imageSlots.length < 5) {
      setImageSlots([
        ...imageSlots,
        { id: Date.now(), file: null, preview: null },
      ]);
    }
  };

  const handleRemoveImageSlot = (id) => {
    setImageSlots(imageSlots.filter((slot) => slot.id !== id));
  };

  // ========= Input Change =========
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ========= Validate Form =========
  useEffect(() => {
    const { title, description, date, category } = formData;
    const hasImage = imageSlots.some((slot) => slot.file !== null);

    const isValid =
      title.trim() &&
      description.trim() &&
      date &&
      category &&
      hasImage &&
      isChecked;

    setIsFormValid(Boolean(isValid));
  }, [formData, imageSlots, isChecked]);

  // ========= Submit =========
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    alert("Event Uploaded Successfully!");
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-10">

      {/* Heading */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Create New Event
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Fill in the details below to publish a new event.
        </p>
      </div>

      {/* ===========================
          IMAGE CROP MODAL
      =========================== */}
      {cropModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-xl shadow-xl p-4 relative">
            <h2 className="text-lg font-semibold mb-3">Crop Image (4:3)</h2>

            <div className="relative w-full h-72 bg-gray-200 rounded-lg overflow-hidden">
              <Cropper
                image={tempImage}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCropModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={confirmCrop}
                className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===========================
          FORM START
      =========================== */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden w-full"
      >
        <div className="p-4 md:p-8 space-y-6 md:space-y-8">

          {/* -------------------------
              General Info
          -------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">

              {/* Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Event Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Design Workshop"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200
                  focus:bg-white focus:border-amber-500 focus:ring-4
                  focus:ring-amber-500/10 outline-none"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200
                    focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10
                    appearance-none cursor-pointer outline-none"
                  >
                    <option value="branding">Branding</option>
                    <option value="marketing">Marketing</option>
                    <option value="design">Design</option>
                  </select>
                  <ChevronRight
                    className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500"
                    size={16}
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Event Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-50 border border-gray-200 focus:ring-amber-500/10
                    focus:border-amber-500 focus:ring-4 outline-none uppercase"
                  />
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Detailed description..."
                className="w-full flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-amber-500/10
                focus:border-amber-500 focus:ring-4 outline-none min-h-[150px] resize-none"
              ></textarea>
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* -------------------------
              Image Upload Section
          -------------------------- */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Event Images
                </label>
                <p className="text-xs text-gray-500">Max 5 images. Min 1 required.</p>
              </div>
              <div className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                {imageSlots.filter((s) => s.file).length} / 5 Uploaded
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {imageSlots.map((slot) => (
                <div key={slot.id} className="relative group">

                  <div
                    className={`relative h-44 md:h-48 rounded-xl border-2 border-dashed
                    flex flex-col items-center justify-center overflow-hidden
                    ${slot.preview ? "border-amber-500" : "border-gray-300 bg-gray-50"}`}
                  >
                    {slot.preview ? (
                      <>
                        <img src={slot.preview} className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-flex flex items-center justify-center">
                          <button
                            onClick={() =>
                              document.getElementById(`file-${slot.id}`).click()
                            }
                            className="bg-white px-3 py-1.5 rounded-md shadow hover:bg-gray-100"
                          >
                            Change
                          </button>
                        </div>
                      </>
                    ) : (
                      <label
                        htmlFor={`file-${slot.id}`}
                        className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                          <ImageIcon size={20} />
                        </div>
                        <span className="text-sm mt-2">Upload</span>
                        <span className="text-xs text-gray-400">Max 2MB</span>
                      </label>
                    )}

                    <input
                      type="file"
                      id={`file-${slot.id}`}
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(slot.id, e)}
                    />
                  </div>

                  {imageSlots.length > 1 && (
                    <button
                      onClick={() => handleRemoveImageSlot(slot.id)}
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  )}

                </div>
              ))}

              {imageSlots.length < 5 && (
                <button
                  onClick={handleAddImageSlot}
                  className="h-44 md:h-48 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center hover:border-amber-500 hover:bg-amber-50"
                >
                  <Plus size={24} className="text-gray-400" />
                  <span className="text-sm mt-2">Add Image</span>
                </button>
              )}
            </div>
          </div>

          {/* -------------------------
              Confirmation + Submit
          -------------------------- */}
          <div className="bg-gray-50 -mx-4 md:-mx-8 p-4 md:p-8 border-t border-gray-200">
            <div className="flex flex-col gap-6">

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="peer hidden"
                  />
                  <div
                    className={`w-5 h-5 md:w-6 md:h-6 border-2 rounded-md flex items-center justify-center transition
                    ${isChecked ? "bg-amber-600 border-amber-600" : "bg-white border-gray-300"}`}
                  >
                    <CheckSquare
                      size={14}
                      className={`text-white transition-transform ${isChecked ? "scale-100" : "scale-0"}`}
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <span className="font-medium">Review Confirmation</span>
                  <p className="text-gray-500 text-xs">I verify all details are accurate.</p>
                </div>
              </label>

              {/* Submit Buttons */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                {!isFormValid && (
                  <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-2 py-1.5 rounded">
                    <AlertCircle size={14} />
                    <span>Complete all fields & confirm.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`px-8 py-3 rounded-xl text-white font-semibold flex items-center gap-2
                  ${isFormValid
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  <UploadCloud size={20} />
                  Upload Event
                </button>
              </div>

            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Events;
