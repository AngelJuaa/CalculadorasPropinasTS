import type { OrderContentsProps } from "../types";

export default function OrderContents({order,removeItem }:OrderContentsProps) {
  return (
    <div>
        <h2 className="text-2xl font-black text-slate-900">Consumo</h2>
        <div className="mt-5 divide-y divide-slate-100">
            {order.map(item=>(
            <div key={item.id} className="flex items-center justify-between gap-4 py-4">
               <div className="min-w-0">
                <p className="font-semibold text-slate-800">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
                </div> 
                <button
                  type="button"
                  onClick={()=>removeItem(item.id)}
                  aria-label={`Quitar ${item.name} de la orden`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-bold text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  ×
                </button>
            </div>
            ))}
            
        </div>
    </div>
  )
}
