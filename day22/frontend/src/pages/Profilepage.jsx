import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { ErrorToast } from "../utils/toastHelper";
import { axiosInstance } from "../axios/axiosInstance";

const Profilepage = () => {
  const [profileDetails, setProfileDetails] = useState({});
  const [updateToggle, setUpdateToggle] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const getUserProfileDetails = async () => {
    try {
      const resp = await axiosInstance.get("/users/details");

      if (resp.data.isSuccess) {
        setProfileDetails(resp.data.data.user);
      } else {
        ErrorToast("Error fetching profile", resp.data.message);
      }
    } catch (err) {
      ErrorToast("Error fetching profile", err.message);
    }
  };

  const updateUserProfileDetails = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append({...profileDetails});
    formData.append("profilePic", profilePic);

    try {
      const resp = await axiosInstance.patch("/users/update", formData);
      if (resp.data.isSuccess) {
        setProfileDetails(resp.data.data.user);
        setUpdateToggle(false);
      } else {
        ErrorToast("Error updating profile", resp.data.message);
      }
    }catch (err) {
      ErrorToast("Error updating profile", err.message);
    }
    getUserProfileDetails();
  };

  useEffect(() => {
    getUserProfileDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-10"> {/* Added min-h-screen and background */}
      <Navbar />

      <div className="container mx-auto px-4 mt-8"> {/* Centered container */}
        {/* Profile Details Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200"> {/* Enhanced card style */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">User Profile</h1>
          {Object.keys(profileDetails).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg"> {/* Responsive grid */}
              <p><strong>Name:</strong> <span className="text-gray-700">{profileDetails.name}</span></p>
              <p><strong>Email:</strong> <span className="text-gray-700">{profileDetails.email}</span></p>
              <p><strong>Gender:</strong> <span className="text-gray-700">{profileDetails.gender}</span></p>
              <p><strong>Role:</strong> <span className="text-gray-700">{profileDetails.role}</span></p>
            </div>
          ) : (
            <p className="text-center text-gray-500">No profile details available.</p>
          )}
        </div>

        {/* Update Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"> {/* Enhanced card style */}
          {updateToggle ? (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Profile</h1>
              <form onSubmit={updateUserProfileDetails} className="space-y-4"> {/* Spaced form fields */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={profileDetails?.name || ''}
                    onChange={(e) => setProfileDetails({ ...profileDetails, name: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" // Styled input
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={profileDetails.email || ''}
                    onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" // Styled input
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                  <select
                    id="gender"
                    value={profileDetails.gender || ''}
                    onChange={(e) => setProfileDetails({ ...profileDetails, gender: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" // Styled select
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>        

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Profile pic:</label>
                  <input type="file" onChange={(e)=>{setProfilePic(e.target.files[0]);}} alt="profilePic" className="bg-gray-200 border-amber-300 border-2 w-28 h-28 rounded-md"/>
                </div>                

                <div className="flex justify-center gap-4 pt-4">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"> {/* Styled button */}
                    Update Profile Details
                  </button>
                  <button onClick={() => setUpdateToggle(false)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"> {/* Styled button */}
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <button onClick={() => setUpdateToggle(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"> {/* Larger, styled button */}
                Update Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Profilepage };