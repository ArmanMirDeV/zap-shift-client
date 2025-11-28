import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regions = [...new Set(serviceCenters.map((c) => c.region))];

  const selectedRegion = useWatch({ control, name: "region" });

  const districtsByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((c) => c.region === region);
    return regionDistrict.map((d) => d.district);
  };

  const handleRiderApplication = (data) => {
      console.log(data);
      axiosSecure.post('/riders', data)
          .then(res => {
              if (res.data.insertedId) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Applied Successfully",
                      showConfirmation: false,
                      timer: 2000
              })
          }
      })

  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-primary mb-6">Become a Rider</h2>

      <form
        className="bg-white shadow-lg rounded-xl p-8 space-y-10"
        onSubmit={handleSubmit(handleRiderApplication)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Rider Information */}
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6">
              Personal Information
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  className="input input-bordered w-full"
                  {...register("fullName")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  readOnly
                  defaultValue={user?.email}
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  {...register("email")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Date of Birth</label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  {...register("dob")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Gender</label>
                <select
                  className="select select-bordered w-full"
                  {...register("gender")}
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  {...register("phone")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Alternative Phone
                </label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  {...register("altPhone")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Full Address</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("address")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Region</label>
                <select
                  {...register("region")}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select Region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">District</label>
                <select
                  {...register("district")}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select District
                  </option>
                  {districtsByRegion(selectedRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Post Code</label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  {...register("postCode")}
                />
              </div>
            </div>
          </div>

          {/* Documents & Vehicle */}
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6">Documents & Vehicle</h3>

            <div className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">
                  National ID (NID)
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  {...register("nid")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Driving License Number
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("license")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  License Expiry Date
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  {...register("licenseExpiry")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Vehicle Type</label>
                <select
                  className="select select-bordered w-full"
                  {...register("vehicleType")}
                >
                  <option disabled selected>
                    Select Vehicle
                  </option>
                  <option>Bike</option>
                  <option>Scooter</option>
                  <option>Bicycle</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Bike Model</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("bikeModel")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Bike Registration Number
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("bikeReg")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Bike Insurance Number
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("insurance")}
                />
              </div>

              {/* Emergency Contact */}
              <h3 className="text-xl font-semibold mt-6">Emergency Contact</h3>

              <div>
                <label className="block mb-1 font-medium">Contact Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("emergencyName")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Contact Number</label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  {...register("emergencyPhone")}
                />
              </div>

              {/* Work Availability */}
              <h3 className="text-xl font-semibold mt-6">Work Availability</h3>

              <div>
                <label className="block mb-1 font-medium">
                  Availability (Hours)
                </label>
                <input
                  type="text"
                  placeholder="Example: 9am - 10pm"
                  className="input input-bordered w-full"
                  {...register("availability")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Night Shifts Available?
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("nightShift")}
                >
                  <option disabled selected>
                    Select Option
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Banking Info */}
              <h3 className="text-xl font-semibold mt-6">Banking Details</h3>

              <div>
                <label className="block mb-1 font-medium">Bank Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("bankName")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Bank Account Number
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  {...register("bankAccount")}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  bKash/Nagad Number (Optional)
                </label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  {...register("mobileBanking")}
                />
              </div>

              {/* Agreements */}
              <div className="mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" {...register("agreeTerms")} />
                  <span>I agree to the Terms & Conditions</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" {...register("agreeVerification")} />
                  <span>I agree to background verification</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn text-black btn-primary w-full md:w-auto"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Rider;
