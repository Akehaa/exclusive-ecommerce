import { CartTableItem } from "./CartTableItem";

export function CartTable() {

  return (
    <table className="w-5/6 mx-auto text-xs 2xl:text-base">
      <tbody>
        <tr className="border flex mb-10 items-center">
          <td className="py-6 pl-10 w-full">
            Product
          </td>
          <td className="py-6 w-full">
            Price
          </td>
          <td className="py-6 w-full ">
            Quantity
          </td>
          <td className="w-full py-6 pr-16 text-right">
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