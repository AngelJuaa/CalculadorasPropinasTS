import { useCallback } from "react";
import type { OrderTotalsProps } from "../types";

export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order]);
  const totalAmount = useCallback(
    () => subtotalAmount() + tipAmount(),
    [order, tip],
  );
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);

  return (
    <div className="border-t border-slate-200 pt-5">
      <h2 className="text-xl font-black text-slate-900">Totales y propina</h2>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm text-slate-600">
          <p>Subtotal</p>
          <span>{formatCurrency(subtotalAmount())}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <p>Propina</p>
          <span>{formatCurrency(tipAmount())}</span>
        </div>
        <div className="flex justify-between border-t border-slate-100 pt-3 text-lg font-black text-slate-900">
          <p>Total a pagar</p>
          <span className="text-teal-700">{formatCurrency(totalAmount())}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => placeOrder()}
        className="mt-6 w-full rounded-lg bg-teal-700 px-5 py-3 font-bold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Guardar orden
      </button>
    </div>
  );
}
