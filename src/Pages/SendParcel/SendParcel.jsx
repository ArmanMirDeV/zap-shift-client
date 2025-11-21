import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
control,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDuplicate= serviceCenters.map(c => c.region)

  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: 'senderRegion'});
  const receiverRegion = useWatch({ control, name: 'receiverRegion'});

  const districtsByRegion = region => {
    const regionDistrict = serviceCenters.filter(c => c.region === region)
    const districts = regionDistrict.map(d => d.district)

    return districts;
  }

  

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>

      <form
        className="m-12 text-black p-4"
        onSubmit={handleSubmit(handleSendParcel)}
      >
        {/* Parcel Type */}
        <div className="flex gap-6 my-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />
            <span>Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio"
            />
            <span>Non-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="form-control">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Parcel Name"
              {...register("parcelName")}
            />
          </div>

          <div className="form-control">
            <label className="label">Parcel Weight (Kg)</label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Parcel Weight"
              {...register("parcelWeight")}
            />
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Sender Details</h4>

            {/* Sender Name */}

            <div className="form-control mb-4">
              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("senderName")}
              />
            </div>
            {/* Sender Email */}
            <div className="form-control mb-4">
              <label className="label">Sender Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                {...register("senderEmail")}
              />
            </div>

            {/*  Sender Address */}

            <div className="form-control mb-4">
              <label className="label">Sender Address</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("senderAddress")}
              />
            </div>

            {/*  Sender phone number */}

            <div className="form-control mb-4">
              <label className="label">Sender Phone No</label>
              <input
                type="tel"
                className="input input-bordered w-full"
                {...register("senderPhone")}
              />
            </div>

            {/* Sender Region */}
            <div className="form-control mb-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region "
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            {/* Sender Districts */}
            <div className="form-control mb-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a Districts "
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            {/*  Pickup Information */}

            <div className="form-control">
              <label className="label">Pickup Instruction</label>
              <textarea
                className="textarea textarea-bordered w-full"
                {...register("pickupInstruction")}
              ></textarea>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Receiver Details</h4>

            <div className="form-control mb-4">
              {/*  Receiver Name */}

              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("receiverName")}
              />
            </div>

            {/* Receiver  Email */}
            <div className="form-control mb-4">
              <label className="label">Receiver Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                {...register("receiverEmail")}
              />
            </div>

            {/*  Receiver Address */}

            <div className="form-control mb-4">
              <label className="label">Receiver Address</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("receiverAddress")}
              />
            </div>

            <div className="form-control mb-4">
              {/*  Receiver Phone No */}

              <label className="label">Receiver Phone No</label>
              <input
                type="tel"
                className="input input-bordered w-full"
                {...register("receiverPhone")}
              />
            </div>

            {/* Receiver Region */}
            <div className="form-control mb-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region "
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            {/* Receiver Districts */}
            <div className="form-control mb-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Districts</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a Districts "
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            {/* Receiver Instructions */}

            <div className="form-control">
              <label className="label">Delivery Instruction</label>
              <textarea
                className="textarea textarea-bordered w-full"
                {...register("deliveryInstruction")}
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-6 text-black">
          Send Parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
