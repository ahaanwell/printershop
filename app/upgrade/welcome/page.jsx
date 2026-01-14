import Script from "next/script";
import SetupPage from "./SetupPage";

export const metadata = {
  title: "HP - Professional Printer Download Driver & Setup Solutions",
  description:
    "Expert printer services including installation, troubleshooting, maintenance, and 24/7 technical assistance for all printer brands.",
  icons: {
  icon: "/hplogo.png",
},

};

export default function Page() {
  return (
    <>
      {/* ✅ Load Tawk.to script properly */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68e4b9cd615cd1194e6d045f/1j6unbirp';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />

      <SetupPage />
    </>
  );
}
