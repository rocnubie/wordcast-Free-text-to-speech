import type { JsonLd as JsonLdType } from "@/lib/jsonld";

export function JsonLd({ data }: { data: JsonLdType | JsonLdType[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
