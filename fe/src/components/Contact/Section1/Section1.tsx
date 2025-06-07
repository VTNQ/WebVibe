import { useState } from "react";
import {
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const Section1 = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Hà Nội",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Liên hệ đã gửi thành công!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          branch: "Hà Nội",
          message: "",
        });
      } else {
        alert("Gửi thất bại. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Không thể kết nối đến server.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white rounded-xl mb-10 mt-10 max-w-full sm:max-w-md md:max-w-6xl shadow-sm md:shadow-md border border-green-500"
    >
      <h2 className="text-2xl font-bold mb-1">Liên hệ qua email</h2>
      <p className="mb-6 text-gray-600">
        Mọi thắc mắc của quý khách hàng hãy liên hệ với chúng tôi theo form dưới đây:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side */}
        <div className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium mb-1">
              <FaUser className="mr-2 text-gray-600" /> Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium mb-1">
                <FaEnvelope className="mr-2 text-gray-600" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium mb-1">
                <FaPhone className="mr-2 text-gray-600" /> Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium mb-1">
              <FaMapMarkerAlt className="mr-2 text-gray-600" /> Chi nhánh
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
            </select>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col h-full">
          <label className="flex items-center text-sm font-medium mb-1">
            <FaCommentDots className="mr-2 text-gray-600" /> Nội dung
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nội dung"
            className="border border-gray-300 rounded-md px-4 py-3 flex-1 resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white hover:bg-green-700 transition-all rounded-full px-6 py-3 flex items-center justify-center font-semibold shadow-md"
          >
            <FaPaperPlane className="mr-2" />
            Gửi liên hệ cho chúng tôi
          </button>
        </div>
      </div>
    </form>
  );
};

export default Section1;
