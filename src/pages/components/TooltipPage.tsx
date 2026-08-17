import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components";

const TooltipPage = () => {
  const darkTooltipCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="Dark theme tooltip" variant="dark" position="top">
  <Button variant="dark" size="sm">Hover Me</Button>
</Tooltip>`;

  const lightTooltipCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="Light theme tooltip" variant="light" position="top">
  <Button variant="outline" size="sm">Hover Me</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode",
      default: "-",
      description: "Text or node rendered inside the floating tooltip badge.",
    },
    {
      prop: "variant",
      type: '"dark" | "light"',
      default: '"dark"',
      description: "Visual color palette variant of the tooltip background.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Directional positioning relative to the trigger element.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The element that triggers the tooltip on hover.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-xl text-gray-600">
          A popup snippet that displays helpful info when hovering over an
          element.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="flex flex-col gap-10">
          <ComponentDemo code={darkTooltipCode}>
            <div className="py-6 flex justify-center items-center">
              <Tooltip
                content="Dark theme tooltip"
                variant="dark"
                position="top"
              >
                <Button variant="dark" size="sm">
                  Hover Me
                </Button>
              </Tooltip>
            </div>
          </ComponentDemo>

          <ComponentDemo code={lightTooltipCode}>
            <div className="py-6 flex justify-center items-center">
              <Tooltip
                content="Light theme tooltip"
                variant="light"
                position="top"
              >
                <Button variant="outline" size="sm">
                  Hover Me
                </Button>
              </Tooltip>
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

export default TooltipPage;
