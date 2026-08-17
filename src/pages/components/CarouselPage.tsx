import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Carousel } from "@/components/Carousel";

const CarouselPage = () => {
  const lightCarouselCode = `import { Carousel } from "@/components/Carousel";

<Carousel
  variant="light"
  size="md"
  title="Light Carousel"
  description="Explore feature highlights with custom slides."
>
  <div>
    <img
      src="https://4kwallpapers.com/images/walls/thumbs_2t/25876.jpg"
      alt="Abstract Art"
      className="w-full h-40 object-cover rounded-2xl"
    />
  </div>

  <div>
    <img
      src="https://4kwallpapers.com/images/walls/thumbs_2t/25839.jpg"
      alt="Digital Canvas"
      className="w-full h-40 object-cover rounded-2xl"
    />
  </div>
</Carousel>`;

  const darkCarouselCode = `import { Carousel } from "@/components/Carousel";

<Carousel
  variant="dark"
  size="md"
  title="Dark Carousel"
  description="Deep blue ambient glowing background theme."
>
  <div>
    <img
      src="https://4kwallpapers.com/images/walls/thumbs_2t/25839.jpg"
      alt="Neon Glow"
      className="w-full h-40 object-cover rounded-2xl border border-slate-800"
    />
  </div>

  <div>
    <img
      src="https://4kwallpapers.com/images/walls/thumbs_2t/25876.jpg"
      alt="Abstract Dark"
      className="w-full h-40 object-cover rounded-2xl border border-slate-800"
    />
  </div>
</Carousel>`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark"',
      default: '"light"',
      description: "Visual theme variant of the carousel component.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Sizing and padding scale of the carousel container.",
    },
    {
      prop: "inline",
      type: "boolean",
      default: "true",
      description:
        "Renders carousel inline without fixed modal backdrop overlay.",
    },
    {
      prop: "isOpen",
      type: "boolean",
      default: "true",
      description: "Controls the visibility state of the carousel.",
    },
    {
      prop: "title",
      type: "string",
      default: "undefined",
      description: "Heading text displayed in the header section.",
    },
    {
      prop: "description",
      type: "string",
      default: "undefined",
      description: "Subheading/description text rendered under the title.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "undefined",
      description: "Callback function triggered when close button is clicked.",
    },
    {
      prop: "onDone",
      type: "() => void",
      default: "undefined",
      description:
        "Callback function triggered when primary action button is clicked.",
    },
    {
      prop: "doneText",
      type: "string",
      default: '"Done"',
      description: "Text label for the primary action button.",
    },
    {
      prop: "closeText",
      type: "string",
      default: '"Close"',
      description: "Text label for the secondary cancel button.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
        <p className="text-xl text-gray-600">
          The Carousel component cycles through a series of content cards,
          images, or text slides with configurable theme variants.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="flex flex-col gap-10">
          <ComponentDemo code={lightCarouselCode}>
            <div className="w-full flex justify-center">
              <Carousel
                variant="light"
                size="md"
                title="Light Carousel"
                description="Light theme"
              >
                <div className="space-y-3">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/25876.jpg"
                    alt="Abstract Art"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                </div>

                <div className="space-y-3">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/25839.jpg"
                    alt="Digital Canvas"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                </div>
              </Carousel>
            </div>
          </ComponentDemo>

          <ComponentDemo code={darkCarouselCode}>
            <div className="w-full flex justify-center">
              <Carousel
                variant="dark"
                size="md"
                title="Dark Carousel"
                description="Dark theme"
              >
                <div>
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/25839.jpg"
                    alt="Neon Glow"
                    className="w-full h-40 object-cover rounded-2xl border border-slate-800"
                  />
                </div>

                <div className="space-y-3">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/25876.jpg"
                    alt="Abstract Dark"
                    className="w-full h-40 object-cover rounded-2xl border border-slate-800"
                  />
                </div>
              </Carousel>
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
