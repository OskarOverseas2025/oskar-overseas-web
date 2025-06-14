import Script from "next/script";

const GoogleAnalytics = ({ id = "G-4QEMZ5PF3T'" }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${id}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${id}');
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;
