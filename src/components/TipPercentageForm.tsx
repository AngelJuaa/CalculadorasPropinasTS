import type { TipPercentageFormProps } from "../types";

const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "Sin propina",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm({
  tip,
  setTip,
}: TipPercentageFormProps) {
  return (
    <fieldset className="border-t border-slate-200 pt-5">
      <legend className="text-xl font-black text-slate-900">Propina</legend>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tipOptions.map((option) => (
          <div key={option.id}>
            <input
              id={option.id}
              type="radio"
              name="tip"
              value={option.value}
              onChange={(event) => setTip(Number(event.target.value))}
              checked={option.value === tip}
              className="peer sr-only"
            />
            <label
              htmlFor={option.id}
              className="flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-teal-400 hover:bg-teal-50 peer-checked:border-teal-700 peer-checked:bg-teal-50 peer-checked:text-teal-800 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-teal-500 peer-focus-visible:ring-offset-2"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
