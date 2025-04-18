import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "./components/top-bar/TopBar";
import Header from "./components/header/Header";
import { BackToTopBtn } from "./components/top-btn/BackToTopBtn";
import Footer from "./sections/footer/Footer";
import Script from "next/script"; // Import the Script component

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Royal Spice",
  description: "The Taste of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        <TopBar />
        <Header />
        {children}
        <Footer />
        <BackToTopBtn />

        {/* Add the StorefrontSDK script */}
        {/* <Script id="storefront-sdk" strategy="afterInteractive">
          {`
            (function(e, t, r, n) {
              var o, c, s;
              o = e.document, c = t.children[0], s = o.createElement("script"), e.StorefrontSDKObject = "StorefrontSDK", e[e.StorefrontSDKObject] = {
                  executeCommand: function(t, r) {
                      e[e.StorefrontSDKObject].buffer.push([t, r])
                  },
                  buffer: []
              }, s.async = 1, s.src ='https://web-apps.cdn4dd.com/webapps/sdk-storefront/latest/sdk.js' , t.insertBefore(s, c)
            })(window, document.head);

            StorefrontSDK.executeCommand('renderFloatingButton', {
                businessId: 13574025,
                businessSlug: 'Royal Spice',
                floatingBar: true,
                position: 'bottom',
                buttonAlignment: 'center',
                backgroundColor: 'transparent',
                buttonBackgroundColor: '#cda45e',
                borderColor: 'transparent',
                buttonText: 'Order Online',
                showModal: true
            });
          `}
        </Script> */}
      </body>
    </html>
  );
}
