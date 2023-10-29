import { initStoryblok } from "@/helpers/initStoryblok";
// import "@kickstartds/ds-agency/components/global";
// @ts-expect-error
import IconSprite from "@kickstartds/ds-agency/icon-sprite";

initStoryblok();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}