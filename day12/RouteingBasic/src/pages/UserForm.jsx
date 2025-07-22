import React, { useRef, useState } from "react";

const MultiPhotoForm = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photoBlobs, setPhotoBlobs] = useState([]);
  const [streaming, setStreaming] = useState(false);

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStreaming(true);
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  // Capture image and save as Blob
  const takePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    canvasRef.current.toBlob((blob) => {
      if (blob) {
        setPhotoBlobs((prev) => [...prev, blob]);
      }
    }, "image/png");
  };

  // Remove image by index
  const removePhoto = (indexToRemove) => {
    setPhotoBlobs((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    photoBlobs.forEach((blob, index) => {
      formData.append("photos", blob, `photo${index + 1}.png`);
    });

    console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/api/v1/uploadDetails", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const result = await res.json();
      console.log("Upload success:", result);
      alert("Uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4 border shadow rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="w-full border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            className="w-full border p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Camera:</label>
          <div className="space-y-2">
            {!streaming && (
              <button type="button" onClick={startCamera} className="bg-blue-500 text-white px-3 py-1 rounded">
                Start Camera
              </button>
            )}
            <video ref={videoRef} width="320" height="240" autoPlay className="border" />
            <button type="button" onClick={takePhoto} className="bg-green-500 text-white px-3 py-1 rounded">
              Capture Photo
            </button>
            <canvas ref={canvasRef} width="320" height="240" className="hidden" />
          </div>
        </div>

        <div>
          <label>Captured Photos:</label>
          <div className="flex flex-wrap gap-2">
            {photoBlobs.map((blob, index) => {
              const imgUrl = URL.createObjectURL(blob);
              return (
                <div key={index} className="relative group">
                  <img src={imgUrl} alt={`capture-${index}`} className="w-24 h-24 object-cover rounded border" />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white px-1 rounded-full text-xs opacity-80 group-hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiPhotoForm;
