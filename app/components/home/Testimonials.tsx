export default function Testimonials() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Get To Know Our Clients
      </h2>

      {/* Cards grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <a
          href="#"
          className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition block"
        >
          <p className="text-gray-600 mb-6">
            “Dhanwaan has made saving so much easier for my shop. Earlier I had to depend on local collectors, but now everything is digital and transparent. I can see my deposits anytime on the app. Very useful for small businesses like mine in Uttarakhand!”
          </p>
          <div>
            <h4 className="font-semibold">Rachit Gupta</h4>
            <p className="text-sm text-gray-500">Small Business Owner</p>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="#"
          className="bg-green-700 text-white rounded-xl shadow p-6 hover:shadow-lg transition block"
        >
          <p className="mb-6">
            “I wanted to start saving but never knew where to begin. With Dhanwaan, even small amounts are automatically saved from my bank account. The process is simple, and I feel more confident about building financial discipline for the future.”
          </p>
          <div>
            <h4 className="font-semibold">Kush Batra</h4>
            <p className="text-sm opacity-80">First-time Saver</p>
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="#"
          className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition block"
        >
          <p className="text-gray-600 mb-6">
            “Our whole family uses Dhanwaan to manage savings. The app is secure, easy to use, and backed by a trusted credit society. The best part is — no hidden charges and complete transparency. Truly a modern way to save for big goals.”
          </p>
          <div>
            <h4 className="font-semibold">Vishal Negi</h4>
            <p className="text-sm text-gray-500">Family User</p>
          </div>
        </a>
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
          View More →
        </button>
      </div>
    </section>
  );
}
