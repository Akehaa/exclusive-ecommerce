import { MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"

export function CartTableItem() {
  const counter = 99

  return (
    <tr className="border flex mb-10 items-center">
      <td className="py-6 pl-10 w-full">
        image LCD Monitor
      </td>
      <td className="py-6 w-full">
        $1000
      </td>
      <td className="py-6 w-full ">
        <span className="py-2 border-2 border-black/25 rounded pr-8 pl-4">
          {counter}
        </span>
        {counter <= 9
          ? <div className="flex flex-col -mt-7 ml-9">
            <button>
              <MdKeyboardArrowUp />
            </button>
            <button>
              <MdKeyboardArrowDown />
            </button>
          </div>
          : <div className="flex flex-col -mt-7 ml-11">
            <button>
              <MdKeyboardArrowUp />
            </button>
            <button>
              <MdKeyboardArrowDown />
            </button>
          </div>}
      </td>
      <td className="w-full py-6 pr-16 text-right">
        $1000
      </td>
    </tr>
  )
}