import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  // API'dan rolleri çekip formu reset ile güncelliyoruz.
  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        const fetchedRoles = response.data;
        setRoles(fetchedRoles);
        // "Müşteri" rolünü, yani code değeri "customer" olanı buluyoruz.
        const customerRole = fetchedRoles.find(
          (role) => role.code.toLowerCase() === "customer"
        );
        // Eğer "customer" bulunamazsa, listenin ilk elemanını kullanıyoruz.
        reset({ role_id: customerRole ? customerRole.id : fetchedRoles[0]?.id });
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  }, [reset]);

  // Formdaki role_id alanını izliyoruz.
  const selectedRole = watch("role_id");
  // Seçili rolün detaylarına ulaşmak için.
  const selectedRoleObj = roles.find((role) => role.id == selectedRole);

  const onSubmit = async (data) => {
    // confirmPassword alanını payload'dan çıkarıyoruz.
    const { confirmPassword, ...payload } = data;
    console.log("Payload being sent:", payload);

    try {
      await axiosInstance.post("/signup", payload);
      alert("You need to click link in email to activate your account!");
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
              validate: {
                hasUpperCase: (value) =>
                  /[A-Z]/.test(value) || "Must contain an uppercase letter",
                hasLowerCase: (value) =>
                  /[a-z]/.test(value) || "Must contain a lowercase letter",
                hasNumber: (value) =>
                  /[0-9]/.test(value) || "Must contain a number",
                hasSpecialChar: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Must contain a special character",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Role Selection Field */}
        <div>
          <label className="block text-sm font-medium">Role</label>
          {roles.length ? (
            <select
              className="w-full border p-2 rounded"
              {...register("role_id", { required: "Role is required" })}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          ) : (
            <p>Loading roles...</p>
          )}
        </div>

        {/* Eğer seçili rolun code değeri "store" ise ek alanları göster */}
        {selectedRoleObj?.code === "store" && (
          <div className="space-y-4">
            {/* Store Name */}
            <div>
              <label className="block text-sm font-medium">Store Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                {...register("store.name", {
                  required: "Store Name is required",
                  minLength: { value: 3, message: "Store Name must be at least 3 characters" },
                })}
              />
              {errors.store?.name && (
                <p className="text-red-500 text-sm">{errors.store.name.message}</p>
              )}
            </div>
            {/* Store Phone */}
            <div>
              <label className="block text-sm font-medium">Store Phone</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                {...register("store.phone", {
                  required: "Store Phone is required",
                  pattern: {
                    value: /^(05)[0-9]{9}$/,
                    message: "Invalid Turkish phone number",
                  },
                })}
              />
              {errors.store?.phone && (
                <p className="text-red-500 text-sm">{errors.store.phone.message}</p>
              )}
            </div>
            {/* Store Tax ID */}
            <div>
              <label className="block text-sm font-medium">Store Tax ID</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                {...register("store.tax_no", {
                  required: "Store Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Tax ID must match pattern TXXXXVXXXXXX",
                  },
                })}
              />
              {errors.store?.tax_no && (
                <p className="text-red-500 text-sm">{errors.store.tax_no.message}</p>
              )}
            </div>
            {/* Store Bank Account */}
            <div>
              <label className="block text-sm font-medium">
                Store Bank Account (IBAN)
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                {...register("store.bank_account", {
                  required: "Store Bank Account is required",
                  pattern: {
                    value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                    message: "Invalid IBAN format",
                  },
                })}
              />
              {errors.store?.bank_account && (
                <p className="text-red-500 text-sm">{errors.store.bank_account.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition flex items-center justify-center"
          >
            {isSubmitting && <span className="loader mr-2"></span>}
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
