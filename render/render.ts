///<reference types="./index.d.ts" />
import { LineChartProps } from "@mui/x-charts/LineChart";
import { lists } from "virtual:lists";

type BenchExecuteResult = {
  time: number;
  size: number;
};
type BenchModeResult = {
  O3: BenchExecuteResult;
  Oz: BenchExecuteResult;
};
export type BenchResult = {
  name: string;
  results: {
    active: BenchModeResult;
    passive: BenchModeResult;
  };
};

export async function fetchData(setData: React.Dispatch<Record<string, BenchResult[]>>) {
  console.log(lists);
  let data: Record<string, BenchResult[]> = {};
  for (const line of lists.split("\n")) {
    if (!line) continue;
    const res = await (await fetch(line)).json();
    data[line] = res;
  }
  setData(data);
}

const platforms = ["darwin-arm64", "linux-x64"];
const caseNames = ["parser"];

function getLineKey(platform: string, caseName: string, mode: "O3" | "Oz", metric: "time" | "size") {
  return `${platform}-${caseName}-${mode}-${metric}`;
}

export function toLineChartProps(
  data: Record<string, BenchResult[]>,
  {
    enableDarwinArm64,
    enableLinuxX64,
    enableO3,
    enableOz,
  }: { enableDarwinArm64: boolean; enableLinuxX64: boolean; enableO3: boolean; enableOz: boolean }
): LineChartProps {
  if (!enableO3 && !enableOz) return { xAxis: [], series: [] };

  const seriesMap: Record<string, { data: (number | null)[]; label?: string }> = {
    baseline: { data: [], label: "baseline" },
  };
  for (const platform of platforms) {
    for (const caseName of caseNames) {
      if (platform === "darwin-arm64" && !enableDarwinArm64) continue;
      if (platform === "linux-x64" && !enableLinuxX64) continue;
      if (enableO3) {
        seriesMap[getLineKey(platform, caseName, "O3", "time")] = {
          data: [],
          label: `${platform} ${caseName} O3 time`,
        };
        seriesMap[getLineKey(platform, caseName, "O3", "size")] = {
          data: [],
          label: `${platform} ${caseName} O3 size`,
        };
      }
      if (enableOz) {
        seriesMap[getLineKey(platform, caseName, "Oz", "time")] = {
          data: [],
          label: `${platform} ${caseName} Oz time`,
        };
        seriesMap[getLineKey(platform, caseName, "Oz", "size")] = {
          data: [],
          label: `${platform} ${caseName} Oz size`,
        };
      }
    }
  }
  const dateSet = new Set<string>();
  for (const key in data) {
    const date = key.split("/")[1].split("-")[0];
    dateSet.add(date);
  }
  const xAxis = Array.from(dateSet).sort();
  const dateIndexMap: Record<string, number> = {};
  for (let _ in seriesMap) {
    seriesMap[_].data.length = xAxis.length;
  }
  xAxis.forEach((date, index) => {
    dateIndexMap[date] = index;
    for (let k in seriesMap) {
      seriesMap[k].data[index] = k == "baseline" ? 1 : null;
    }
  });

  for (const fileName in data) {
    const platform = fileName.split("/")[0];
    if (platform === "darwin-arm64" && !enableDarwinArm64) continue;
    if (platform === "linux-x64" && !enableLinuxX64) continue;
    const date = fileName.split("/")[1].split("-")[0];

    const caseName = data[fileName][0].name;
    const index = dateIndexMap[date];

    if (enableO3) {
      seriesMap[getLineKey(platform, caseName, "O3", "time")].data[index] = data[fileName][0].results.active.O3.time;
      seriesMap[getLineKey(platform, caseName, "O3", "size")].data[index] = data[fileName][0].results.active.O3.size;
    }
    if (enableOz) {
      seriesMap[getLineKey(platform, caseName, "Oz", "time")].data[index] = data[fileName][0].results.active.Oz.time;
      seriesMap[getLineKey(platform, caseName, "Oz", "size")].data[index] = data[fileName][0].results.active.Oz.size;
    }
  }
  return {
    xAxis: [
      {
        scaleType: "band",
        data: xAxis,
      },
    ],
    yAxis: [
      {
        min: 0,
      },
    ],
    series: Object.values(seriesMap),
  };
}
