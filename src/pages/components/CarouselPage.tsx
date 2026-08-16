import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import Carousel from "@/components/Carousel/Carousel";

const CarouselPage = () => {
  const basicUsageCode = `
import { Button } from "@/components/Button/Button"

<Button variant="primary" animation="scaleIn" hoverAnimation="jiggle" size="sm">Jiggle</Button>
<Button variant="secondary" animation="slideUp" hoverAnimation="bounce" size="lg">Bounce</Button>
<Button variant="destructive" animation="fadeIn" size="xl">Scale</Button>
<Button variant="dark" animation="bounceIn" hoverAnimation="none" size="sm">Dark</Button>`;

  const propsData = [
    {
      prop: "variant",
      type: '"primary" | "secondary" | "outline" | "destructive" | "ghost" | "dark" | "ok" | "link"',
      default: '"primary"',
      description: "The visual style variant of the button",
    },
    {
      prop: "size",
      type: '"sm" | "lg" | "xl" | "icon" | "auto" | "full"',
      default: '"lg"',
      description: "The size of the button",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"none"',
      description: "Animation when mounting",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "hovering on element animation",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>
        <p className="text-lg text-gray-600">
          Carousel is a UI slideshow that cycles through content using a frame,
          a moving track, and navigation buttons.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div>
            <Carousel />
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

export default CarouselPage;
