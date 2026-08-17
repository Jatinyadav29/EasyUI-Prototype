import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Layout } from "@/components/Layout";

const LayoutPage = () => {
  const layoutCode = `import { Layout } from "@/components/Layout";

<Layout
  variant="dark"
  brandName="EaseUi"
  navLinks={[
    { label: "Home", href: "#" },
    { label: "Components", href: "#" },
    { label: "Docs", href: "#" },
  ]}
  footerText="EaseUi Footer"
>
  <div className="w-full py-12 text-center">
    <h3 className="text-base font-semibold mb-1">Page Body Content</h3>
    <p className="text-xs text-neutral-500">
      Flexible center area that expands to fill the page height.
    </p>
  </div>
</Layout>`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark"',
      default: '"dark"',
      description:
        "Visual color palette variant for header, background, and footer.",
    },
    {
      prop: "brandName",
      type: "string",
      default: '"EaseUi"',
      description: "Brand name displayed in the top navbar header.",
    },
    {
      prop: "navLinks",
      type: "Array<{ label: string; href: string }>",
      default: "[...]",
      description: "List of navigation link items rendered in the header.",
    },
    {
      prop: "footerText",
      type: "string",
      default: '"EaseUi Footer"',
      description: "Text label displayed inside the bottom footer bar.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "undefined",
      description: "Main body content rendered between the navbar and footer.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Layout</h1>
        <p className="text-xl text-gray-600">
          A full-height page wrapper featuring a top navigation bar, expanding
          main body container, and a bottom footer.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={layoutCode}>
          <div className="w-full border border-neutral-200/80 overflow-hidden shadow-sm">
            <Layout
              variant="dark"
              brandName="EaseUi"
              navLinks={[
                { label: "Home", href: "#" },
                { label: "Components", href: "#" },
                { label: "Docs", href: "#" },
              ]}
              footerText="EaseUi Footer"
            >
              <div className="w-full py-10 text-center">
                <h3 className="text-base font-semibold mb-1">Page Body</h3>
              </div>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;
