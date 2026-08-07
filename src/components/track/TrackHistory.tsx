import { HistoryCategory } from "@/types/history";

type Props = {
  history: HistoryCategory[];
};

export default function TrackHistory({
  history,
}: Props) {
  if (history.length === 0) {
    return (
      <div className="rounded-2xl bg-[#1a2132] p-6">

        <h2 className="mb-6 text-3xl font-bold">
          TAS History
        </h2>

        <p className="text-zinc-400">
          No history available.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#1a2132] p-6">

      <h2 className="mb-6 text-3xl font-bold">
        TAS History
      </h2>

      {history.map((category) => (
        <div
          key={category.name}
          className="mb-10"
        >
          <h3 className="mb-4 text-2xl font-bold text-cyan-400">
            {category.name}
          </h3>

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b border-zinc-700">

                <th className="py-2 text-left">
                  Record
                </th>

                <th className="py-2 text-left">
                  Authors
                </th>

                <th className="py-2 text-left">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {category.entries.map((entry, index) => (
                <tr
                  key={index}
                  className="border-b border-zinc-800"
                >
                  <td className="py-2">
                    {entry.record}
                  </td>

                  <td className="py-2">
                    {entry.authors.join(", ")}
                  </td>

                  <td className="py-2 text-zinc-400">
                    {entry.date}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      ))}

    </div>
  );
}