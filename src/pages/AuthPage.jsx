// src/pages/AuthPage.jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../redux/actions/authActions";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md">
        {/* Tab Başlıkları */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-center font-semibold ${
              activeTab === "login"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 text-center font-semibold ${
              activeTab === "signup"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>
        <div className="p-6">
          {activeTab === "login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // loginUser thunk'u, login işlemini gerçekleştirir.
    dispatch(loginUser(data.email, data.password, data.rememberMe, navigate));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-4">Login</h2>
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex items-center">
        <input type="checkbox" {...register("rememberMe")} className="mr-2" />
        <label>Remember Me</label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  // GET /roles: Rol seçeneklerini API'dan çekiyoruz.
  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
        // "Müşteri" rolünün code'u "customer" olduğundan varsayılan yapıyoruz.
        const customerRole = response.data.find(
          (role) => role.code === "customer"
        );
        if (customerRole) {
          reset({ role_id: customerRole.id });
        }
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
        toast.error("Error fetching roles");
      });
  }, [reset]);

  // Seçilen rolü izliyoruz.
  const selectedRole = watch(
    "role_id",
    roles.length > 0 ? roles.find((role) => role.code === "customer")?.id : ""
  );

  const onSubmit = async (data) => {
    // confirmPassword'ı çıkartıyoruz; ESLint uyarısını engellemek için _confirmPassword kullanıyoruz.
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword: _confirmPassword, ...payload } = data;
    payload.role_id = parseInt(payload.role_id, 10);

    // Eğer seçilen rol "store" ise, ek alanları payload'a ekliyoruz.
    const storeRole = roles.find((r) => r.code === "store");
    if (storeRole && payload.role_id === storeRole.id) {
      payload.store = {
        name: data.store?.name,
        phone: data.store?.phone,
        tax_no: data.store?.tax_no,
        bank_account: data.store?.bank_account,
      };
    }

    console.log("Payload to be sent:", payload);
    try {
      await axiosInstance.post("/signup", payload);
      toast.success("You need to click link in email to activate your account!");
      navigate(-1);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>
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
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
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
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
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
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Must contain a special character",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
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
      <div>
        <label className="block text-sm font-medium">Role</label>
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
      </div>
      {roles.length > 0 &&
        roles.find((r) => r.code === "store") &&
        selectedRole === String(roles.find((r) => r.code === "store").id) && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Store Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                {...register("store.name", {
                  required: "Store Name is required",
                  minLength: {
                    value: 3,
                    message: "Store Name must be at least 3 characters",
                  },
                })}
              />
              {errors.store?.name && (
                <p className="text-red-500 text-sm">{errors.store.name.message}</p>
              )}
            </div>
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
  );
}


