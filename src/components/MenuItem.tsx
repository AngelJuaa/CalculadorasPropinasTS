import type { MenuItemProps } from "../types";

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-teal-300 hover:shadow-md">
      <div className="min-w-0">
        <h3 className="font-bold leading-snug text-slate-800">{item.name}</h3>
        <p className="mt-2 text-lg font-black text-teal-700">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <button
        type="button"
        onClick={() => addItem(item)}
        className="shrink-0 rounded-lg bg-teal-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Agregar
      </button>
    </article>
  );
}