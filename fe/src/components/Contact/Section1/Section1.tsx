import { FaCommentDots, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaUser } from "react-icons/fa";

const Section1 = () => {
  return (
    <div
      className="
        mx-auto p-6 bg-white rounded-xl mt-4 mb-10
        max-w-full sm:max-w-md md:max-w-6xl
        shadow-sm md:shadow-md
      "
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
              placeholder="Họ và tên"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium mb-1">
                <FaEnvelope className="mr-2 text-gray-600" /> Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium mb-1">
                <FaPhone className="mr-2 text-gray-600" /> Số điện thoại
              </label>
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium mb-1">
              <FaMapMarkerAlt className="mr-2 text-gray-600" /> Chi nhánh
            </label>
            <select
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue="Hà Nội"
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
            placeholder="Nội dung"
            className="border border-gray-300 rounded-md px-4 py-3 flex-1 resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-full px-6 py-3 flex items-center justify-center font-semibold shadow-md"
            type="submit"
          >
            <FaPaperPlane className="mr-2" />
            Gửi liên hệ cho chúng tôi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
