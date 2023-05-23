import { CartTableItem } from "./CartTableItem";

export function CartTable() {

  return (
    <table className="w-5/6 mx-auto text-xs 2xl:text-base">
      <tbody>
        <tr className="border flex mb-10 px-2 items-center pl-6 gap-8 md:justify-normal md:px-0 md:pl-0">
          <td className="md:py-6 md:pl-10 md:w-full">
            Product
          </td>
          <td className="md:py-6 md:w-full">
            Price
          </td>
          <td className="md:py-6 md:w-full ">
            Quantity
          </td>
          <td className="md:w-full md:py-6 md:pr-16 md:text-right">
            Subtotal
          </td>
        </tr>
        <CartTableItem />
        <CartTableItem />
        <CartTableItem />
      </tbody>
    </table>
  )
}