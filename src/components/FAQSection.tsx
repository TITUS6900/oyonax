import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import { getFaqSchema } from "@/lib/schema";

export type FaqItem = { question: string; answer: string };

export default function FAQSection({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  return (
    <Section title={title} muted>
      <JsonLd data={getFaqSchema(items)} />
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-border-subtle bg-surface p-4 open:shadow-sm"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
              <span className="shrink-0 text-xl text-brand transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
