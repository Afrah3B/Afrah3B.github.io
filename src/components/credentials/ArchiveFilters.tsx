import { categoryLabels, credentialCategories, type CredentialCategory } from "../../content/credentials";

export type CredentialFilter = "all" | CredentialCategory;

type ArchiveFiltersProps = {
  active: CredentialFilter;
  counts: Record<CredentialCategory, number>;
  total: number;
  onChange: (filter: CredentialFilter) => void;
};

export function ArchiveFilters({ active, counts, total, onChange }: ArchiveFiltersProps) {
  const filters: Array<{ id: CredentialFilter; label: string; count: number }> = [
    { id: "all", label: "All", count: total },
    ...credentialCategories.map((category) => ({ id: category, label: categoryLabels[category], count: counts[category] })),
  ];

  return (
    <div className="credential-filters" role="group" aria-label="Filter credentials by category">
      {filters.map((filter) => (
        <button type="button" key={filter.id} aria-pressed={active === filter.id} onClick={() => onChange(filter.id)}>
          <span>{filter.label}</span><small>{filter.count}</small>
        </button>
      ))}
    </div>
  );
}
