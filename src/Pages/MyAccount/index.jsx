import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { CiEdit } from "react-icons/ci";
import { useStoreContext } from "../../Context/StoreContext";
import userServices from "../../api/Firebase/Services";

function MyAccount() {
  const { userData } = useStoreContext();
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    name: userData.name ? userData.name : "",
    lastname: userData.lastname ? userData.lastname : "",
    ID: userData.ID ? userData.ID : "",
    gender: userData.gender ? userData.gender : "",
    birthday: userData.birthday ? userData.birthday : "",
    phone: userData.phone ? userData.phone : "",
    email: userData.email ? userData.email : "",
  };

  const handleSubmit = async (values) => {
    const response = await userServices.updateUser(userData.uid, values);
    console.log(response);
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl my-32 mx-auto p-8">
      <div className="flex justify-between items-center p-2">
        <h2 className="text-2xl">Profile</h2>
        <button
          className="flex items-center text-lg"
          onClick={() => setIsEditing(true)}
        >
          <CiEdit className="mr-2" />
          Edit
        </button>
      </div>
      <hr className="w-full border-black my-3" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className="ml-4 mr-8 p-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">Name</label>
                <Field
                  type="text"
                  name="name"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">
                  Lastname
                </label>
                <Field
                  type="text"
                  name="lastname"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">
                  Identity document
                </label>
                <Field
                  type="text"
                  name="ID"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">
                  Gender
                </label>
                <Field
                  type="text"
                  name="gender"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">
                  Birthday
                </label>
                <Field
                  type="text"
                  name="birthday"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">Phone</label>
                <Field
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-300"
                  } rounded-md shadow-sm`}
                />
              </div>
            </div>
            {isEditing && (
              <div className="flex items-center justify-center mt-8">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 w-1/3 mx-8 rounded-lg p-2 text-white bg-black hover:bg-gray-800 active:bg-gray-600 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 w-1/3 mx-8 rounded-lg p-2 text-white bg-black hover:bg-gray-800 active:bg-gray-600 focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MyAccount;
