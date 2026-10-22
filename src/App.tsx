import { menuItems } from "./assets/data/db";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-teal-700 px-4 py-8 text-white shadow-md">
        <div className="mx-auto max-w-7xl">
          <p className="mb-1 text-center text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            Restaurante
          </p>
          <h1 className="text-center text-3xl font-black sm:text-4xl">
            Calculadora de propinas
          </h1>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10 lg:px-8 lg:py-12">
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-black sm:text-3xl">Menú</h2>
            <p className="mt-1 text-sm text-slate-500">
              Selecciona los productos para agregarlos a tu orden.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </section>

        <section
          aria-label="Resumen de la orden"
          className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
        >
          {order.length ? (
            <div className="space-y-8">
              <OrderContents order={order} removeItem={removeItem} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
              <TipPercentageForm tip={tip} setTip={setTip} />
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <span
                aria-hidden="true"
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-2xl text-teal-700"
              >
                +
              </span>
              <h2 className="text-lg font-bold text-slate-800">
                Tu orden está vacía
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Agrega productos desde el menú para ver aquí el resumen de tu
                cuenta.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
