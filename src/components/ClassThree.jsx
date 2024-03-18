/* eslint-disable react/prop-types */
export default function ClassThree({ jsonDataThree }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan={4}>
          Class Three
        </td>
      </tr>

      {jsonDataThree.map((data) => (
        <tr key={data.id} className="border-b border-[#7ECEB529]">
          <td className="p-5 text-sm md:text-xl">{data.id}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={data.image}
                width="32"
                height="32"
                alt="John Smith"
              />
              <span className="whitespace-nowrap">{data.name}</span>
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">{data.scores}</td>
          <td className="p-5 text-sm md:text-xl text-center">
            {data.percentage}
          </td>
        </tr>
      ))}
    </>
  );
}
