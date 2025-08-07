import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DropStacker Pro</title>
      </Head>
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
        <h1>Welcome to DropStacker Pro</h1>
        <p>Join our list for exclusive early access and updates.</p>

        {/* 🔒 AWeber Opt-in Form */}
        <div className="aweber-form-wrapper">
          <div className="AW-Form-183149529"></div>
        </div>
      </main>

      {/* AWeber Embed Script */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "//forms.aweber.com/form/29/183149529.js";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, "script", "aweber-wjs-1qwb5hvl8"));
          `,
        }}
      />

      {/* Style Overrides */}
      <style jsx>{`
        .aweber-form-wrapper * {
          font-family: 'Inter', sans-serif !important;
          font-size: 16px !important;
          color: #fff !important;
          box-sizing: border-box;
        }

        .aweber-form-wrapper input[type='text'],
        .aweber-form-wrapper input[type='email'] {
          width: 100% !important;
          padding: 12px !important;
          margin-bottom: 1rem !important;
          border-radius: 8px !important;
          border: 1px solid #444 !important;
          background: #1f1f1f !important;
        }

        .aweber-form-wrapper input[type='submit'] {
          background: #f5c518 !important;
          color: #000 !important;
          padding: 12px 20px !important;
          border: none !important;
          border-radius: 8px !important;
          font-weight: bold !important;
          cursor: pointer;
          width: 100% !important;
        }

        .aweber-form-wrapper form {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        .aweber-form-wrapper h2,
        .aweber-form-wrapper p {
          display: none !important;
        }
      `}</style>
    </>
  );
}
