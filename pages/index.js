// pages/index.js

export default function Home() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Verdana, sans-serif' }}>
      <style>{`
        .aweber-form input[type="email"] {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .aweber-form input[type="submit"] {
          width: 100%;
          padding: 12px;
          background-color: #088239;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .aweber-form input[type="submit"]:hover {
          opacity: 0.9;
        }
      `}</style>

      <h2 style={{ textAlign: 'center' }}>Welcome to DropStacker Pro</h2>
      <p style={{ textAlign: 'center' }}>Enter your details below to get instant access:</p>

      <form
        method="post"
        className="aweber-form"
        acceptCharset="UTF-8"
        action="https://www.aweber.com/scripts/addlead.pl"
      >
        {/* Hidden AWeber fields */}
        <input type="hidden" name="meta_web_form_id" value="641659250" />
        <input type="hidden" name="listname" value="awlist6902603" />
        <input
          type="hidden"
          name="redirect"
          value="https://dropstacker-pro.vercel.app/dashboard"
        />
        <input type="hidden" name="meta_adtracking" value="Drop_Stacker_Pro" />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />
        <input type="hidden" name="meta_tooltip" value="" />

        {/* Email Field */}
        <label htmlFor="awf_field-118259477">Email:</label>
        <input
          className="text"
          id="awf_field-118259477"
          type="email"
          name="email"
          required
        />

        {/* Submit Button */}
        <input
          name="submit"
          className="submit"
          type="submit"
          value="Get Instant Access"
        />
      </form>
    </div>
  );
}
